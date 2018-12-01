<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">
			

			<el-row style="padding:10px 10px 0px 10px;display:flex;flex-direction: row-reverse;">
				<el-button type="success"  @click.native="addSite">新增网点</el-button>
				<div style="flex:1;display:flex;">
					<el-input 
						size="medium" 
						style="width: 300px;font-size:12px;flex: 0 0 25%;" 
						placeholder="请输入医院名称/管理员/地区" 
						@change="handleSearchChange"
						class="input-with-select">    
							<el-button slot="append" icon="el-icon-search" @click.native="searchSites"></el-button>
						</el-input>

						<!-- <div>
						<el-cascader
							size="medium"
							style="width:100%;margin-left: 10px;"
							placeholder="归属地区"
							:options="regionInfo.region.options"
							v-model="regionInfo.region.value"
							@active-item-change="handleItemChange"
							@change="handleRegionChange">
						</el-cascader>
					</div> -->
				</div>
			</el-row>



				
			<div style="margin: 10px;">
				<el-table
					:data="siteList"
					border
					max-height="400">
					<el-table-column
					fixed
					prop="site_name"
					label="网点名称"
					width="250">
					</el-table-column>				
					<el-table-column
					prop="administrator"
					label="管理员"
					width="180">
					</el-table-column>
					<el-table-column
					prop="district"
					label="医院地区"
					width="300">
					</el-table-column>
					<el-table-column
					prop="detailed_address"
					label="详细地址"
					width="500">
					</el-table-column>					
					<el-table-column
					fixed="right"
					label="操作"
					width="180">
					<template slot-scope="scope">
						<el-button @click.native.prevent="putTopRow(scope.$index, scope.row)" type="text" size="small">置顶</el-button>
						<el-button @click.native.prevent="modifyRow(scope.$index, scope.row)" type="text" size="small">修改</el-button>						
						<el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">删除</el-button>
					</template>
					</el-table-column>
				</el-table>
			</div>	
  			
  		</el-row>
			<el-dialog
				title="删除"
				:visible.sync="siteDelete.dialogVisible"
				width="30%"
				center>
				<span style="text-align">确定删除该网点吗？</span>
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" size="mini" @click="deleteSiteAccount">确 定</el-button>
				</span>
		  </el-dialog>
    </div>
</template>

<script>
	import ContentHeadTop from '../components/ContentHeadTop'
    export default {
    	components: {
    		ContentHeadTop,
		},
		created() {
			this.searchSites();
			this.searchRegion();
		},
		methods: {
      modifyRow(index, row) {
        console.log(row);
				sessionStorage.setItem('site_detail',JSON.stringify(row));
				this.$router.push('addSite');
			},
			putTopRow(index, row) {
				this.$http({
					method: 'POST',
					url: '/hugongljb/adjust_site_to_top',
					data: {
						sid: row['sid'],
						prefered_prio: parseInt(this.prefered_prio_maximal) + 1,
          }
                    
        }).then((response) => {
						console.log(response);
						if(response.status == 200) {
							this.searchSites();
						}
					  console.log(response.status);
				});
			},
			deleteRow(index, row) {
        console.log(row);
				this.siteDelete.dialogVisible = true;
				this.siteDelete.index = index;
				this.siteDelete.rowInfo = row;
			},

			deleteSiteAccount() {
				this.siteDelete.dialogVisible = false;						
				var rowInfo = this.siteDelete.rowInfo;
				console.log(rowInfo['sid']);

				this.$http({
                    method: 'POST',
                    url: '/hugongljb/delete_site_account',
                    data: {
                        sid: rowInfo['sid'],
                    }
                    
                }).then((response) => {
					  console.log(response);
					  console.log(response.status);
					  if(response.status == 200) {
						  this.siteList.splice(this.siteDelete.index, 1);
					  }
				});
			},
			addSite() {
				sessionStorage.setItem('site_detail', null);
				this.$router.push('addSite');
			},
			findPreferedPrioMaximal(sitelist) {
				var prio_max = 0;
				for(let item of this.siteList) {
					if(prio_max < item.prefered_prio) {
						prio_max = item.prefered_prio
					}
					console.log("prio_max = " + prio_max);
				}
				this.prefered_prio_maximal = prio_max;

			},
			async searchSites() {
				this.$http({
					method:'POST',
					url:'/hugongljb/get_sites',
					data:{
						site_name:this.site_name,
						administrator:this.administrator,
						district:this.district,
					}
				}).then((response) => {
					// console.log(response);
					this.siteList = response.data.data.list;
					this.findPreferedPrioMaximal(this.siteList);
				})
			},

			async searchRegion() {
				this.$http.get("/hugong/get_sub_address")
				.then((response) => {
					console.log("response:");
					console.log(response);
                    var list = response.data.data;

                    var cacheLen = this.regionInfo.region.areaPointers.length;
                    for(var i = 0; i < list.length; i++) {
                        var item = {label: list[i].areaName, value: list[i].areaName, children:[]}
                        this.regionInfo.region.options[i] = Object.assign({}, item);
                        this.regionInfo.region.areaPointers[cacheLen + i] = Object.assign({}, {pid: i + 1, curLevel: 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: this.regionInfo.region.options[i]});
                    }
				})
			},			
			
			findAreaByName(areaName) {
                var name = areaName[areaName.length - 1];
                var areaShadows = this.regionInfo.region.areaPointers;
                var ret;
                for(var i = 0; i < areaShadows.length; i++) {
                    var area = areaShadows[i];
                    if(name == area.areaName) {
                        ret = area;
                        break;
                    }
                }
                return ret;
            },
			handleItemChange(itemVal) {
                console.log("handleItemChange() " + ",itemVal: "+ itemVal);
                var curHitArea = this.findAreaByName(itemVal);

                if(curHitArea == null) {
                    console.log("area error,return")
                    return;
                }

                if(curHitArea.bound == null) {
                    console.log("shadow bound error,return")
                    return;
                }

                if(!(curHitArea.bound.children == null || curHitArea.bound.children.length == 0)) {
                    console.log("area has children,return")
                    return;
                }
                
                this.$http({
                    method: 'POST',
                    url: '/hugong/get_sub_address?pid=' + curHitArea.areaId,
                    // url: '/hugong/get_sub_address',
                    // data: {
                    //     pid:1021,
                    // }
                    
                }).then((response) => {
                    var list = response.data.data;
                    var cacheLen = this.regionInfo.region.areaPointers.length;
                    for(var i = 0; i < list.length; i++) {
                        if(curHitArea.curLevel >= 2) {
                            var item = {label: list[i].areaName, value: list[i].areaName}
                            curHitArea.bound.children[i] = Object.assign({}, item);
							this.regionInfo.region.areaPointers[cacheLen + i] = Object.assign({}, 
							        {pid: i + 1, curLevel: curHitArea.curLevel + 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: curHitArea.bound.children[i]});
                        }else{
                            var item = {label: list[i].areaName, value: list[i].areaName, children:[]}
                            curHitArea.bound.children[i] = Object.assign({}, item);
							this.regionInfo.region.areaPointers[cacheLen + i] = Object.assign({}, 
							        {pid: i + 1, curLevel: curHitArea.curLevel + 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: curHitArea.bound.children[i]});
                        }
                    }
                });
            },
            handleRegionChange() {
                console.log(this.regionInfo.region.value);
                console.log(JSON.stringify(this.regionInfo.region.value));
			},
			handleSearchChange(content) {
				this.site_name = content;
				this.administrator = content;
				this.district = content;
			}
    },
    data() {
      return {
		  site_name:'',
		  administrator:'',
		  district:'',
		siteList:[],
        regionInfo: {
			region:{
				options: [],
				value: [],
				areaPointers:[],//directly pointer to each option's children of cascader menu.				
			},
		},				
		siteDelete:{
			rowInfo:'',
			index:'',
			dialogVisible:false,
		},
		prefered_prio_maximal:0,
      }
    }
    }
</script>


<style lang="less">
	@import '../style/mixin';

	.el-table th, .el-table td{
		text-align:center;
	}

	.el-dialog--center .el-dialog__body {
    	text-align: center;
	}

</style>
