<template>
  <div class="arrangement-by-row">
    <content-head-top class="router-content-header"></content-head-top>
    <section class="section_container">
        <el-main>
            <el-row style="text-align:left;padding:10px;">
                    <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">新增网点</el-breadcrumb>
                    <el-form label-width="100px" :rules="rules">
                        <el-row>
                            <el-col :span="12">
                                <el-form-item label="网点名称:" prop="siteInfo.site_name">
                                    <el-input v-model="siteInfo.site_name"></el-input>
                                </el-form-item>
                            </el-col>                            
                        </el-row>
                        <el-row>
                            <el-col :span="12">
                                <el-row>
                                    <el-form-item label="地区:">
                                        <el-cascader
                                            style="width:100%;"
                                            placeholder="请选择"
                                            :options="siteInfo.region.options"
                                            v-model="siteInfo.region.value"
                                            @active-item-change="handleItemChange"
                                            @change="handleRegionChange">
                                        </el-cascader>
                                    </el-form-item>
                                </el-row>
                                <el-row>
                                    <el-form-item label="详细位置:" prop="siteInfo.detailed_address">
                                        <el-input v-model="siteInfo.detailed_address"></el-input>
                                    </el-form-item>
                                </el-row>
                                <el-row>
                                    <el-form-item label="管理员:" prop="siteInfo.administrator">
                                        <el-input v-model="siteInfo.administrator"></el-input>
                                    </el-form-item>
                                </el-row>

                            </el-col>
                            <el-col :span="12">
                                <el-form-item label="地图选点:" prop="siteInfo.site_location">
                                    <!-- <el-input v-model="companyInfo.administrator"></el-input> -->
                                </el-form-item>
                            </el-col>
                        </el-row>                                     
                    </el-form>                
                </el-row>
            </el-main>
        </section>
       
       <div style="padding-top:10px;padding-bottom:10px;">
             <span><el-button @click.native ="cancel">取消</el-button><el-button type="success" @click.native ="saveSite">保存</el-button></span>
         </div>           
            
  </div>
</template>

<script>
    import ContentHeadTop from '../components/ContentHeadTop'
    export default {
        components: {
    		ContentHeadTop,
        },
        beforeCreate() {
            console.log("beforeCreate");

            this.$http.get("/hugong/get_sub_address")
				.then((response) => {
					console.log("response:");
					console.log(response);
                    var list = response.data.data;

                    var cacheLen = this.siteInfo.region.areaPointers.length;
                    for(var i = 0; i < list.length; i++) {
                        var item = {label: list[i].areaName, value: list[i].areaName, children:[]}
                        this.siteInfo.region.options[i] = Object.assign({}, item);
                        this.siteInfo.region.areaPointers[cacheLen + i] = Object.assign({}, {pid: i + 1, curLevel: 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: this.siteInfo.region.options[i]});
                    }
				})

        },
        created(){
            var item = sessionStorage.getItem('site_detail');
            console.log("item:" + item);
            if(item != null) {
                var obj = JSON.parse(item);
                if(obj.sid == null) {
                    console.log("obj.sid == null");
                    return;
                }

                this.siteInfo.sid = obj.sid;
                this.siteInfo.cid = obj.cid;
                this.siteInfo.site_name = obj.site_name;
                this.siteInfo.site_location = obj.site_location;
                this.siteInfo.administrator = obj.administrator;
                this.siteInfo.city = obj.city;
                this.siteInfo.region.value = obj.region;
                this.siteInfo.detailed_address = obj.detailed_address;
            }
        },

		methods: {
            cancel() {
				this.goBack();
            },            
            saveSite(){
                var regionVal = this.siteInfo.region.value;
                var regionStr = '';
                for(var i = 0; i < regionVal.length; i++) {
                    regionStr = regionStr + regionVal[i];
                }
                
                console.log(regionStr);



                this.$http({
                    method: 'POST',
                    url: '/hugongljb/post_site_info',
                    data: {
                        site_name: this.siteInfo.site_name,
                        site_location: this.siteInfo.site_location,
                        administrator: this.siteInfo.administrator,
                        city: this.siteInfo.city,
                        district: JSON.stringify(regionStr),
                        detailed_address: this.siteInfo.detailed_address,
                        prefered_prio: 0,
                        
                    }
                    
                }).then((response) => {
					  console.log(response);
                      console.log(response.status);
                      
                      if(response.status == 200) {
                          this.goBack();
                      }
                });
            },
            findAreaByName(areaName) {
                var name = areaName[areaName.length - 1];
                var areaShadows = this.siteInfo.region.areaPointers;
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
                    var cacheLen = this.siteInfo.region.areaPointers.length;
                    for(var i = 0; i < list.length; i++) {
                        if(curHitArea.curLevel >= 2) {
                            var item = {label: list[i].areaName, value: list[i].areaName}
                            curHitArea.bound.children[i] = Object.assign({}, item);
                            this.siteInfo.region.areaPointers[cacheLen + i] = Object.assign({}, {pid: i + 1, curLevel: curHitArea.curLevel + 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: curHitArea.bound.children[i]});

                        }else{
                            var item = {label: list[i].areaName, value: list[i].areaName, children:[]}
                            curHitArea.bound.children[i] = Object.assign({}, item);
                            this.siteInfo.region.areaPointers[cacheLen + i] = Object.assign({}, {pid: i + 1, curLevel: curHitArea.curLevel + 1, areaId: list[i].areaId, areaName: list[i].areaName, bound: curHitArea.bound.children[i]});
                        }
                    }
                });
            },
            handleRegionChange() {
                console.log(this.siteInfo.region.value);
                console.log(JSON.stringify(this.siteInfo.region.value));
            },            
        },
        data () {
            return {
                siteInfo: {
                    sid: '',
                    cid: '',
                    site_name: '',
                    hospital_name: '',
                    administrator: '',
                    city: '',
                    region:{
                        options: [{
                            value: '广东省',
                            label: '广东省',
                            children: [{
                                value: '深圳市',
                                label: '深圳市',
                                children: [{
                                    value: '宝安区',
                                    label: '宝安区'
                                    }, {
                                    value: '福田区',
                                    label: '福田区'
                                    }, {
                                    value: '罗湖区',
                                    label: '罗湖区'
                                    }, {
                                    value: '南山区',
                                    label: '南山区'
                                }]
                            }, {
                                value: '广州市',
                                label: '广州市',
                                children: [{
                                value: '越秀区',
                                label: '越秀区'
                                }, {
                                value: '番禺区',
                                label: '番禺区'
                                }]
                            }]
                            },{
                            value: '北京市',
                            label: '北京市',
                            children: [{
                                value: '北京城区',
                                label: '北京城区',
                                children: [{
                                        value: '东城区',
                                        label: '东城区'
                                    }, {
                                        value: '西城区',
                                        label: '西城区'
                                    }, {
                                        value: '朝阳区',
                                        label: '朝阳区'
                                    }]
                            }]
                        }],
                        value: [],
                        areaPointers:[],//directly pointer to each option's children of cascader menu.
                        
                    },
                detailed_address: '',
                site_location: '',
                },               

                rules: {
                    site_name: [
                        {required:true, message:"请输入网点名称", trigger:"blur"}
                    ],
                    hospital_name: [
                        {required:true, message:"请输入医院名称", trigger:"blur"}
                    ],
                    region: [
                        {required:true, message:"请选择地区", trigger:"blur"}
                    ],
                    detailed_address: [
                        {required:true, message:"请输入详细位置", trigger:"blur"}
                    ],
                    administrator: [
                        {required:true, message:"请输入管理员", trigger:"blur"}
                    ],
                    site_location: [
                        {required:true, message:"请选择地点", trigger:"blur"}
                    ],                  

                },
                imageUrl: '',
            }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    @import '../style/mixin';

    .section_container{
        // .wh(520px, 310px);
		// .ctp(520px, 310px);
		padding: 2px;
        border-radius: 2px;
        border: 1px solid;
        border-color: rgb(210, 212, 212);
		// text-align: center;
        // background-color:rgb(239, 243, 243);
    }
        
    .arrangement-by-row{
        display: flex;
        flex-direction: column;
		height: 100%;
		width: 100%;
		
	}
    
</style>