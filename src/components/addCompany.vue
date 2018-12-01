<template>
  <div class="arrangement-by-row">
      <content-head-top class="router-content-header"></content-head-top>
       <el-main>           
           <el-row style="text-align:left;padding:10px;">
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">公司信息</el-breadcrumb>
                <el-form label-width="100px" :rules="rules">
                    <el-row>
                        <el-col :span="12">
                            <el-row>
                                <el-form-item label="公司名称:" prop="comp_name">
                                    <el-input v-model="comp_name" name="comp_name" auto-complete="on" ></el-input>
                                </el-form-item>
                            </el-row>
                            <el-row>
                                <el-form-item label="公司类别:" prop="type.value">
                                    <el-select
                                        v-model="type.value"
                                        size="medium"
                                        style="width:100%;"
                                        placeholder="请选择">
                                        <el-option
                                            v-for="item in type.options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                        </el-option>
                                    </el-select>
                                </el-form-item>                            
                            </el-row>

                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="公司Logo:" prop="companyLogo">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>                                
                            </el-form-item>
                        </el-col>
                    </el-row>                    
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="区域:" prop="region.value">
                                <el-cascader
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="区域选择"
                                    :options="compRegion.region.options"
                                    v-model="compRegion.region.value"
                                    @active-item-change="handleItemChange"
                                    @change="handleRegionChange">
                                </el-cascader>
                            </el-form-item>
                            <!-- <div>
                                <el-cascader
                                    size="medium"
                                    style="width:100%;margin-left: 10px;"
                                    placeholder="归属地区"
                                    :options="compRegion.region.options"
                                    v-model="compRegion.region.value"
                                    @active-item-change="handleItemChange"
                                    @change="handleRegionChange">
                                </el-cascader>
                            </div> -->
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="公司地址:" prop="address">
                                <el-input v-model="address" placeholder="请输入公司详细地址"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="邮编:" prop="zip_code">
                                <el-input v-model="zip_code"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="电话:" prop="comp_telephone">
                                <el-input v-model="comp_telephone" placeholder="请输入公司电话"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="联系人:" prop="contact_name">
                                        <el-input v-model="contact_name" placeholder="请输入联系人姓名"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col  :span="12">
                                    <el-form-item label="邮箱:" prop="contact_email">
                                        <el-input v-model="contact_email" placeholder="请输入联系人邮箱"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="手机号:" prop="contact_phone">
                                        <el-input v-model="contact_phone" placeholder="请输入联系人手机号"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col  :span="12">
                                    <el-form-item label="职位:" prop="contact_position" >
                                        <el-input v-model="contact_position" placeholder="请输入联系人职位名称"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="公司简介:" prop="description">
                                <el-input v-model="description" placeholder="请输入公司简介" type="textarea"></el-input>                                
                            </el-form-item>
                        </el-col>                        
                    </el-row>
                </el-form>                
            </el-row>

            <el-row style="text-align:left;padding:10px;">
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">财务信息</el-breadcrumb>
                <el-row>
                    <el-col :span="12">
                        <el-form label-width="100px">
                            <el-form-item label="纳税人识别号:" prop="texpayer_id">
                            <el-input v-model="texpayer_id"></el-input>
                            </el-form-item>
                            <el-form-item label="发票抬头:" prop="invoice_title">
                                <el-input v-model="invoice_title"></el-input>
                            </el-form-item>
                        </el-form>
                        
                    </el-col>
                    <el-col :span="12">
                        <el-form label-width="100px">
                            <el-form-item label="电话:" prop="texpayer_phone">
                            <el-input v-model="texpayer_phone"></el-input>
                            </el-form-item>
                            <el-form-item label="微信号:" prop="texpayer_webchat">
                                <el-input v-model="texpayer_webchat"></el-input>
                            </el-form-item>
                        </el-form>
                    </el-col>

                </el-row>
            </el-row>

            <el-row >
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">服务支持设置</el-breadcrumb>
                <el-row>
                    <el-col :span="14">
                        <el-form label-width="100px" :rules="rules">
                            <el-form-item label="服务热线:" prop="comp_hotline">
                                <el-input v-model="comp_hotline" placeholder="请输入公司服务热线"></el-input>
                            </el-form-item>
                            <el-form-item label="对外联系人:" prop="external_contact">
                                <el-row class="externalHeader" style="background:#d7e7f3;margin-bottom:5px;">
                                    <el-col :span="6">姓名</el-col>
                                    <el-col :span="6">手机</el-col>
                                    <el-col :span="6"> QQ</el-col>
                                    <el-col :span="6">邮箱</el-col>                                    
                                </el-row>
                                <el-row v-for="(item,index) in external_contacts" :key="index">
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.name'></el-input></el-form-item></el-col>
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.phone'></el-input></el-form-item></el-col>
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.qq'></el-input></el-form-item></el-col>
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.email'></el-input></el-form-item></el-col>
                                </el-row>         
                                <el-row v-for="(item,index) in externalContactsNew" :key="index">
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.name'></el-input></el-form-item></el-col>
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.phone'></el-input></el-form-item></el-col>
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.qq'></el-input></el-form-item></el-col>
                                    <el-col :span="6" style="padding:2px"><el-form-item><el-input v-model='item.email'></el-input></el-form-item></el-col>
                                </el-row>
                                <el-row class="externalAdd" style="text-align:left;">
                                    <i class="el-icon-plus add-externalcontact-icon" @click="addExternalContact"></i><label>添加对外联系人</label>
                                </el-row>
                            </el-form-item>
                        </el-form>
                    </el-col>

                </el-row>
            </el-row>

            <el-row>
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">上传公司证件</el-breadcrumb>
                <el-form model="companyCerts">                    
                    <el-row style="text-align:left;padding:20px;">                        
                        <el-col :span="6">
                            <!-- <form action="https://dybanyungong.com/upload/do_upload" 
                                        enctype="multipart/form-data" 
                                        method="post" 
                                        accept-charset="utf-8">
                                    <input type="file" name="userfile" size="20" />
                                    <br />
                                    <br />
                                    <input type="submit" value="upload" />
                            </form> -->
                            <el-form-item label="公司证件">                                
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://dybanyungong.com/upload/do_upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess1"
                                    :before-upload="beforeAvatarUpload"
                                    :on-change="handleFileChange"
                                    >
                                    <img v-if="companyCerts.certificate1.image_path" :src="companyCerts.certificate1.image_path" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司证件">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://dybanyungong.com/upload/do_upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess2"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="companyCerts.certificate2.image_path" :src="companyCerts.certificate2.image_path" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司证件">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://dybanyungong.com/upload/do_upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess3"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="companyCerts.certificate3.image_path" :src="companyCerts.certificate3.image_path" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="公司证件">
                                <el-upload
                                    class="avatar-uploader"
                                    action="https://dybanyungong.com/upload/do_upload"
                                    :show-file-list="false"
                                    :on-success="handleAvatarSuccess4"
                                    :before-upload="beforeAvatarUpload">
                                    <img v-if="companyCerts.certificate4.image_path" :src="companyCerts.certificate4.image_path" class="avatar">
                                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                            </el-form-item>
                        </el-col>

                    </el-row>
                </el-form>
                
            </el-row>
       </el-main>
       <div style="padding-top:10px;padding-bottom:10px;">
             <span><el-button @click.native ="cancel">取消</el-button><el-button type="success" @click.native ="saveCompany">保存</el-button></span>
         </div>           
            
  </div>
</template>

<script>
    import ContentHeadTop from '../components/ContentHeadTop'
    import lrz from 'lrz'
    export default {
        components: {
    		ContentHeadTop,
        },
        created(){
            this.searchRegion();
            var item = sessionStorage.getItem('company_detail');
            console.log("item:" + item);
            if(item != null) {
                var obj = JSON.parse(item);
                if(obj.cid == null) {
                    console.log("obj.cid == null");
                    return;
                }
                this.cid = obj.cid;
                this.comp_name = obj.comp_name;
                this.type.value = obj.type;
                this.region.value = obj.region;
                this.address = obj.address;
                this.zip_code = obj.zip_code;
                this.comp_telephone = obj.comp_telephone;
                this.description = obj.description;

                this.contact_name = obj.contact_name;
                this.contact_phone = obj.contact_phone;
                this.contact_email = obj.contact_email;
                this.contact_position = obj.contact_position;

                this.texpayer_id = obj.texpayer_id;
                this.texpayer_phone = obj.texpayer_phone;
                this.texpayer_webchat = obj.texpayer_webchat;
                this.invoice_title = obj.invoice_title;
                
                this.comp_hotline = obj.comp_hotline;
                this.compRegion.region.value = "北京市,北京城区,朝阳区".split(',');

                this.external_contacts = JSON.parse(obj.external_contacts);
            }
        },
		methods: {
            cancel() {
				this.goBack();
            },
            getTypeNameByInt(integer) {
                var name;
                switch(integer) {
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
            // getTypeIntByName(name) {
            //     switch(name) {
            //         case '':
            //         case '':
            //         case '':
            //         case '':
                    
            //     }
            // },
            saveCompany(){
                this.external_contacts = this.external_contacts.concat(this.externalContactsNew);
                console.log(this.external_contacts);
                this.externalContactsNew = [];
                console.log(this.external_contacts);
                console.log(JSON.stringify(this.external_contacts));
                console.log(JSON.parse(JSON.stringify(this.external_contacts)));

                this.$http({
                    method: 'POST',
                    url: '/hugongljb/post_company_info',
                    data: {
                        cid: this.cid,
                        comp_name: this.comp_name,
                        comp_status:this.comp_status[0],
                        type: this.type,
                        region: this.region.value,
                        address: this.address,
                        zip_code: this.zip_code,
                        comp_telephone: this.comp_telephone,
                        contact_name:this.contact_name,
                        contact_phone: this.contact_phone,
                        contact_email: this.contact_email,
                        contact_position: this.contact_position,
                        description: this.description,
                        texpayer_id: this.texpayer_id,
                        texpayer_phone: this.texpayer_phone,
                        texpayer_webchat: this.texpayer_webchat,
                        invoice_title: this.invoice_title,
                        comp_hotline: this.comp_hotline,
                        external_contacts: JSON.stringify(this.external_contacts),
                    }
                    
                }).then((response) => {
                    // if(response.data)
					  console.log(response);
                      console.log(response.status);
                      
                      if(response.status == 200) {
                          this.goBack();
                      }
                });
            
            },
            handleAvatarSuccess1(res, file) {
                console.log(res.status);
                if (res.status == 1) {
                    this.companyCerts.certificate1.image_path = res.image_path;
                }else{
					this.$message.error('上传图片失败！');
				}
            },
            handleAvatarSuccess2(res, file) {
                if (res.status == 1) {
                    this.companyCerts.certificate2.image_path = res.image_path;
                }else{
					this.$message.error('上传图片失败！');
				}
            },
            handleAvatarSuccess3(res, file) {
                if (res.status == 1) {
                    this.companyCerts.certificate3.image_path = res.image_path;
                }else{
					this.$message.error('上传图片失败！');
				}
            },
            handleAvatarSuccess4(res, file) {
                if (res.status == 1) {
                    this.companyCerts.certificate4.image_path = res.image_path;
                }else{
					this.$message.error('上传图片失败！');
				}
            },
            handleFileChange(file,fileList){
   
            },
            beforeAvatarUpload(file) {
               
                //const isLt2M = file.size / 1024 / 1024 < 2;

                // if (!isJPG) {
                // this.$message.error('上传头像图片只能是 JPG 格式!');
                // }
                // if (!isLt2M) {
                // this.$message.error('上传头像图片大小不能超过 2MB!');
                // }
                return  true;
            },
            addExternalContact() {
                alert('addExternalContact');
                this.externalContactsNew.push(Object.assign({},{...this.external_contact}));
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


        },
        data () {
            return {
                cid:'',
                comp_name:'',
                comp_status:'',
                type:{
                    options:[{
                    value: 1,
                    label: '类别一'
                    }, {
                    value: 2,
                    label: '类别二'
                    }, {
                    value: 3,
                    label: '类别三'
                    }, {
                    value: 4,
                    label: '类别四'
                    }],
                    value: ''
                },

                compRegion: {
                    region:{
                        options: [],
                        value: [],
                        areaPointers:[],//directly pointer to each option's children of cascader menu.				
                    },
                },
                
                region:{
                    options:[
                    {
                    value: '北京',
                    label: '北京'
                    }, {
                    value: '上海',
                    label: '上海'
                    }, {
                    value: '南京',
                    label: '南京'
                    }, {
                    value: '成都',
                    label: '成都'
                    }, {
                    value: '深圳',
                    label: '深圳'
                    }, {
                    value: '广州',
                    label: '广州'
                    }],
                    value: ''
                },
                zip_code:'',
                comp_telephone:'',
                contact_name:'',
                contact_phone:'',
                contact_email:'',
                contact_position:'',
                logo:'',
                address:'',
                teleNumber:'',
                texpayer_id:'',
                texpayer_webchat:'',
                texpayer_phone:'',
                invoice_title:'',
                external_contact:{
                    name:'',
                    phone:'',
                    qq:'',
                    email:'',
                },
                external_contacts:[],
                externalContactsNew:[],
                comp_status:['已启用','已停用'],
                rules: {
                    comp_name: [
                        {required:true, message:"请输入公司名称", trigger:"blur"}
                    ],
                    comp_telephone: [
                        {required:true, message:"请输入公司电话", trigger:"blur"}
                    ],
                    type: [
                        {required:true, message:"请输入公司类别", trigger:"blur"}
                    ],
                    region: [
                        {required:true, message:"请选择区域", trigger:"blur"}
                    ],
                    zip_code: [
                        {required:true, message:"请输入邮编", trigger:"blur"}
                    ],
                    contact_name: [
                        {required:true, message:"请输入联系人", trigger:"blur"}
                    ],
                    contact_phone: [
                        {required:true, message:"请输入手机号", trigger:"blur"}
                    ],
                    companyLogo: [
                        {required:true, message:"请选择公司LOGO", trigger:"blur"}
                    ],
                    address: [
                        {required:true, message:"请输入公司信息地址", trigger:"blur"}
                    ]
                },
                companyCerts:{
                    certificate1:{ image_path:'' },
                    certificate2:{ image_path:'' },
                    certificate3:{ image_path:'' },
                    certificate4:{ image_path:'' },
                }                
            }
        },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less">
    @import '../style/mixin';

   	.avatar-uploader .el-upload {
	    border: 1px dashed #cfcaca;
	    border-radius: 6px;
	    cursor: pointer;
	    position: relative;
	    overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
	    border-color: #20a0ff;
	}
	.avatar-uploader-icon {
	    font-size: 28px;
	    color: #8c939d;
	    width: 90px;
	    height: 90px;
	    line-height: 90px;
	    text-align: center;
	}
	.avatar {
	    width: 90px;
	    height: 90px;
	    display: block;
    }
    
    .el-textarea__inner{
        height:100px;
    }

	.add-externalcontact-icon {
	    font-size: 20px;
	    color: #8c939d;
	    width: 50px;
	    height: 50px;
        line-height: 50px;
        text-align: center;
        cursor: pointer;
	}
        
    .arrangement-by-row{
        display: flex;
        flex-direction: column;
		height: 100%;
		width: 100%;
		
	}
    
</style>