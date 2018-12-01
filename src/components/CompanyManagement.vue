<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">
			<el-row style="display:flex; padding:10px;">
				<el-input 
					size="medium" 
					style="width: 300px;font-size:12px;"
					placeholder="请输入公司名称/编号/负责人/手机号"					
					@change="handleSearchChange"
					class="input-with-select">    
					<el-button slot="append" icon="el-icon-search" @click.native="searchCompany"></el-button>
				</el-input>

				<el-select
					v-model="compTypes.value"
					@change="handleCompanyTypeChange"
					size="medium"
					style="margin-left: 20px; width:150px;"
					placeholder="公司类型">
					<el-option
						v-for="item in compTypes.options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				<div>
					<el-cascader
						size="medium"
						style="width:100%;margin-left: 10px;"
						placeholder="归属地区"
						:options="compRegion.region.options"
						v-model="compRegion.region.value"
						@active-item-change="handleItemChange"
						@change="handleRegionChange">
					</el-cascader>
				</div>
					

				<el-select 
				    v-model="compStatus.value"
					@change="handleCompanyStatusChange"
					style="margin-left: 20px; width:150px;"
					size="medium"
					placeholder="账号状态">
					<el-option
						v-for="item in compStatus.options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
						:disabled="item.disabled">
					</el-option>
				</el-select>
			</el-row>
			<el-row style="margin: 10px;">
				<el-breadcrumb style="float:left;padding-top:12px;padding-left: 10px;">公司列表</el-breadcrumb>
				<el-button type="success" style="float:right;" @click.native="addCompany">新增</el-button>
			</el-row>
				
			<div style="margin: 10px;">
				<el-table
					:data="companyList"
					align="left"
					border
					max-height="400">
					<el-table-column
					fixed
					prop="cid"
					label="公司编号"
					width="150">
					</el-table-column>
					<el-table-column
					prop="comp_name"
					label="公司名称"
					width="300">
					</el-table-column>
					<el-table-column
					:formatter="formaterType"
					prop="type"
					label="公司类型"
					width="120">
					</el-table-column>
					<el-table-column
					prop="region"
					label="所属地区"
					width="180">
					</el-table-column>
					<el-table-column
					prop="contact_name"
					label="负责人"
					width="120">
					</el-table-column>
					<el-table-column
					prop="contact_phone"
					label="联系电话"
					width="120">
					</el-table-column>
					<el-table-column
					prop="comp_status"
					label="账号状态"
					width="120">
					</el-table-column>
					<el-table-column
					prop="remark"
					label="备注"
					width="150">
					</el-table-column>
					<el-table-column
					fixed="right"
					label="操作"
					width="180">
					<template slot-scope="scope">
						<el-button @click="viewRow(scope.$index, scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="disableRow(scope.$index, scope.row)" type="text" size="small">禁用</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">删除</el-button>
					</template>
					</el-table-column>
				</el-table>
			</div>	
  			
  		</el-row>
		  <el-dialog
			title="禁用"
			:visible.sync="compDisable.dialogVisible"
			width="30%"
			center>
			<span>确定禁用该公司账号吗？</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" size="mini" @click="disableCompanyAccount">确 定</el-button>
			</span>
		  </el-dialog>
		  <el-dialog
			title="删除"
			:visible.sync="compDelete.dialogVisible"
			width="30%"
			center>
			<span style="text-align">确定删除该公司账号吗？</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" size="mini" @click="deleteCompanyAccount">确 定</el-button>
			</span>
		  </el-dialog>
    </div>
</template>

<script>
	import ContentHeadTop from '../components/ContentHeadTop'
	// import addCompany from '../components/addCompany'
    export default {
    	components: {
    		ContentHeadTop,
		},		
		created(){
			this.searchCompany();
			this.searchRegion();
		},
		methods: {
			formaterType(row, column) {
				var type;
				switch(row.type) {
					case '1':
						type = '类型一';
						break;
					case '2':
						type = '类型二';
						break;
					case '3':
						type = '类型三';
						break;
					case '4':
						type = '类型四';
						break;			
				}
				return type;
			},
			viewRow(index, row) {
				console.log(row);
				sessionStorage.setItem('company_detail',JSON.stringify(row));
				this.$router.push('addCompany');
			},
			disableRow(index, row) {
				this.compDisable.dialogVisible = true;
				this.compDisable.rowInfo = row;
				console.log('index=' + index);

			},
			disableCompanyAccount() {
				this.compDisable.dialogVisible = false;
				var rowInfo = this.compDisable.rowInfo;
				console.log(rowInfo['cid']);

				this.$http({
                    method: 'POST',
                    url: '/hugongljb/disable_company_account',
                    data: {
						cid: rowInfo['cid'],
						comp_status: '已停用',
                    }
                    
                }).then((response) => {
					  console.log(response);
					  console.log(response.status);					  
				});
			},
			deleteRow(index, row) {
				console.log(row);				
				this.compDelete.dialogVisible = true;
				this.compDelete.index = index;
				this.compDelete.rowInfo = row;
			},
			deleteCompanyAccount() {
				this.compDelete.dialogVisible = false;						
				var rowInfo = this.compDelete.rowInfo;
				console.log(rowInfo['cid']);

				this.$http({
                    method: 'POST',
                    url: '/hugongljb/delete_company_account',
                    data: {
                        cid: rowInfo['cid'],
                    }
                    
                }).then((response) => {
					  console.log(response);
					  console.log(response.status);
					  if(response.status == 200) {
						  this.companyList.splice(this.compDelete.index, 1);
					  }
				});
			},
			
			addCompany() {
				sessionStorage.setItem('company_detail', null);
				this.$router.push('addCompany');
			},
			cancel() {
				this.goBack();
			},
			async searchCompany() {
				console.log('region = ' + this.region);
				console.log('comp_status = ' + this.comp_status);
				console.log('type = ' + this.type);
				this.$http({
					method:'POST',
					url:'/hugongljb/get_companys',
					data:{
						cid:this.cid,
						comp_name:this.comp_name,
						contact_name:this.contact_name,
						contact_phone:this.contact_phone,
						type:this.compTypes.value,
						region:this.region,
						comp_status:this.comp_status,
					}

				}).then((response) => {
					console.log(response);
					this.companyList = response.data.data.list;
					// console.log(this.companyList);
				})
			},
			async searchRegion() {
				this.$http.get("/hugong/get_sub_address")
				.then((response) => {
					console.log("response:");
					console.log(response);
                    var list = response.data.data;

                    var cacheLen = this.compRegion.region.areaPointers.length;
                    for(var i = 0; i < list.length; i++) {
                        var item = {label: list[i].areaName, value: list[i].areaName, children:[]}
                        this.compRegion.region.options[i] = Object.assign({}, item);
                        this.compRegion.region.areaPointers[cacheLen + i] = Object.assign({}, {pid: i + 1, curLevel: 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: this.compRegion.region.options[i]});
                    }
				})
			},			
			
			findAreaByName(areaName) {
                var name = areaName[areaName.length - 1];
                var areaShadows = this.compRegion.region.areaPointers;
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
                    var cacheLen = this.compRegion.region.areaPointers.length;
                    for(var i = 0; i < list.length; i++) {
                        if(curHitArea.curLevel >= 2) {
                            var item = {label: list[i].areaName, value: list[i].areaName}
                            curHitArea.bound.children[i] = Object.assign({}, item);
							this.compRegion.region.areaPointers[cacheLen + i] = Object.assign({}, 
							        {pid: i + 1, curLevel: curHitArea.curLevel + 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: curHitArea.bound.children[i]});
                        }else{
                            var item = {label: list[i].areaName, value: list[i].areaName, children:[]}
                            curHitArea.bound.children[i] = Object.assign({}, item);
							this.compRegion.region.areaPointers[cacheLen + i] = Object.assign({}, 
							        {pid: i + 1, curLevel: curHitArea.curLevel + 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: curHitArea.bound.children[i]});
                        }
                    }
                });
			},
			handleSearchChange(content) {
				this.cid = content;
				this.comp_name = content;
				this.contact_name = content;
				this.contact_phone = content;
			},
            handleRegionChange() {
				this.region = this.compRegion.region.value;
				console.log('this.region:' + this.region);
			},
			handleCompanyTypeChange(){
				this.type = this.compTypes.value;
				console.log('this.type:' + this.type);
			},
			handleCompanyStatusChange() {
				this.comp_status = this.compStatus.value;
				console.log('this.comp_status:' + this.comp_status);
			},
			getTypeNameByNum(num) {
                var name;
                switch(num) {
                    case 1:
                        name = '类别一';
                        break;
                    case 2:
                        name = '类别二';
                        break;
                    case 3:
                        name = '类别三';
                        break;
                    case 4:
                        name = '类别四';
                        break;
                    default:
                }
                return name;
            },
    },
    data() {
      return {
			cid:'',
			comp_name:'',
			contact_name:'',
			contact_phone:'',
			type:'',
			region:'',
			comp_status:'',
			companyList:[],
			compRegion: {
				region:{
					options: [],
					value: [],
					areaPointers:[],//directly pointer to each option's children of cascader menu.				
				},
			},
		compTypes:{
			options: [{
			value: 1,
			label: '类型一'
			}, {
			value: 2,
			label: '类型二',
			}, {
			value: 3,
			label: '类型三',
			}, {
			value: 4,
			label: '类型四',
			}, {
			value: 0,
			label: '所有类型',
			}],
			value: ''
		},
		compStatus:{
			options: [{
			value: '已启用',
			label: '已启用'
			}, {
			value: '已停用',
			label: '已停用',
			}],
			value: ''
		},
		compDisable:{
			rowInfo:'',
			dialogVisible:false,
		},
		compDelete:{
			rowInfo:'',
			index:'',
			dialogVisible:false,
		},
      }
    }
    }
</script>


<style lang="less">
	@import '../style/mixin';


	.el-table th{
        text-align:center;/** 设置水平方向居中 */
        vertical-align:middle/** 设置垂直方向居中 */
    }
	td{
		text-align:center;
	}
	.el-dialog--center .el-dialog__body {
    	text-align: center;
	}

</style>
