<template>
  <div class="arrangement-by-row">
      <content-head-top class="router-content-header"></content-head-top>
       <el-main>           
           <el-row style="text-align:left;padding:10px;">
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">护工信息</el-breadcrumb>
                <el-form label-width="100px" :rules="rules">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="护工姓名:" prop="name">
                                <el-input v-model="name"></el-input>
                            </el-form-item>                            
                        </el-col>
                        <el-col :span="12">                            
                            <el-form-item label="护工级别:" prop="stars">
                                <el-select
                                    v-model="stars.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择护工级别">
                                    <el-option
                                        v-for="item in stars.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>                    
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="所在医院:" prop="site_name">
                                <el-select
                                    v-model="site_name.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择医院名称">
                                    <el-option
                                        v-for="item in site_name.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="联系方式:" prop="phone">
                                <el-input v-model="phone" placeholder="请输入联系方式"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>                    
                </el-form>                
            </el-row>

            <el-row style="text-align:left;padding:10px;">
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">个人信息</el-breadcrumb>
                <el-form label-width="100px">
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="性别:" prop="gender">
                                <el-select
                                    v-model="gender.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择性别">
                                    <el-option
                                        v-for="item in gender.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="年龄:" prop="age">
                                <el-input type="number" min="18" max="65" v-model="age"></el-input>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="身高(cm):" prop="height">
                                <el-input type="number" min="100" max="200" v-model="height"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="体重(Kg):" prop="weight">
                                <el-input type="number" min="20" max="100" v-model="weight"></el-input>
                            </el-form-item>                            
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="籍贯:" prop="native_province">
                                <el-select
                                    v-model="native_province.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择护工籍贯">
                                    <el-option
                                        v-for="item in native_province.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="护理经验(年):" prop="experience">
                                <el-select
                                    v-model="experience.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择护理经验年数">
                                    <el-option
                                        v-for="item in experience.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>                            
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="文化程度:" prop="degree">
                                <el-select
                                    v-model="degree.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择护工籍贯">
                                    <el-option
                                        v-for="item in degree.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="所属公司:" prop="comp_name">
                                <el-select
                                    v-model="comp_name.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择所属公司">
                                    <el-option
                                        v-for="item in comp_name.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="普通话级别:" prop="lanage_level">
                                <el-select
                                    v-model="lanage_level.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择普通话级别">
                                    <el-option
                                        v-for="item in lanage_level.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </el-col>
                        <el-col :span="12">
                            <el-form-item label="身份证号:" prop="idNo">
                                <el-input v-model="idNo"></el-input>
                            </el-form-item>                            
                        </el-col>
                    </el-row>
                </el-form>                
            </el-row>

            <el-row>
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">照片上传</el-breadcrumb>
                <el-row style="text-align:left;padding:20px;">
                    <el-col :span="6">
                        <div style="display:flex;">
                            <el-breadcrumb style="margin-right:10px;">头像上传</el-breadcrumb>
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="display:flex;">
                            <el-breadcrumb style="margin-right:10px;">身份证(头像面)</el-breadcrumb>
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div style="display:flex;">
                            <el-breadcrumb style="margin-right:10px;">身份证(国徽面)</el-breadcrumb>
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>

                    </el-col>
                    <el-col :span="6">
                        <div style="display:flex;">
                            <el-breadcrumb style="margin-right:10px;">手持身份证</el-breadcrumb>
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-col>
                </el-row>
                <el-row style="text-align:left;padding:20px;">
                    <el-col :span="6">
                        <div style="display:flex;">
                            <el-breadcrumb style="margin-right:10px;padding-left:14px;">健康证</el-breadcrumb>
                            <el-upload
                                class="avatar-uploader"
                                action="https://jsonplaceholder.typicode.com/posts/"
                                :show-file-list="false"
                                :on-success="handleAvatarSuccess"
                                :before-upload="beforeAvatarUpload">
                                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                            </el-upload>
                        </div>
                    </el-col>
                </el-row>
            </el-row>
       </el-main>
       <div style="padding-top:10px;padding-bottom:10px;">
             <span><el-button @click.native ="cancel">取消</el-button><el-button type="success" @click.native="saveCareworker">保存</el-button></span>
         </div>           
            
  </div>
</template>

<script>
    import ContentHeadTop from '../components/ContentHeadTop'
    export default {
        components: {
    		ContentHeadTop,
        },
        created() {
            var item = sessionStorage.getItem('careworker_detail');
            console.log("item:" + item);
            if(item != null) {
                var obj = JSON.parse(item);
                if(obj.hid == null) {
                    console.log("obj.hid == null");
                    return;
                }
                this.hid = obj.hid;
                this.name = obj.name;
                this.stars.value = obj.stars;
                this.site_name.value = obj.site_name;
                this.phone = obj.phone;
                this.gender.value = obj.gender;
                this.age = obj.age;
                this.height = obj.height;

                this.weight = obj.weight;
                this.native_province.value = obj.native_province;
                this.experience.value = obj.experience;
                this.comp_name.value = obj.comp_name;

                this.degree.value = obj.degree;
                this.lanage_level.value = obj.lanage_level;
                this.idNo = obj.idNo;                
            }
        },
		methods: {            
            cancel() {
				this.goBack();
            },
            saveCareworker(){

                this.$http({
                    method: 'POST',
                    url: '/hugongljb/client_post_careworker_info',
                    data: {

                        hid: this.hid,                        
                        name: this.name,
                        stars: this.stars.value,
                        site_name: this.site_name.value,
                        phone: this.phone,
                        gender:this.gender.value,
                        age: this.age,
                        height: this.height,
                        weight: this.weight,
                        native_province:this.native_province.value,
                        experience: this.experience.value,
                        comp_name: this.comp_name.value,
                        degree: this.degree.value,                        
                        // description: this.description,                        
                        lanage_level: this.lanage_level.value,
                        idNo: this.idNo,
                    }
                    
                }).then((response) => {
                    // if(response.data)
					  console.log(response);
                      console.log(response.status);
                      
                      if(response.status == 200) {
                        //   this.goBack();
                      }
                });

            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },
            
        },
        data () {
            return {
                hid:'',
                name:'',   
                gender:{
                    options: [{
                    value: '男',
                    label: '男'
                    }, {
                    value: '女',
                    label: '女',
                    // disabled: true
                    }],
                    value: ''
                },
                age:'',
                height:'',
                weight:'',
                native_province:{
                    options: [{
                    value: '北京',
                    label: '北京',
                    }, {
                    value: '天津',
                    label: '天津',
                    }, {
                    value: '上海',
                    label: '上海',
                    }, {
                    value: '重庆',
                    label: '重庆',
                    }],
                    value: ''
                },
                cid:'',
                comp_name:{
                    options: [{
                    value: '北京新东方护理有限公司',
                    label: '北京新东方护理有限公司'
                    }, {
                    value: '北京有诚护理有限公司',
                    label: '北京有诚护理有限公司',
                    }, {
                    value: '北京发发护理有限公司',
                    label: '北京发发护理有限公司',
                    }, {
                    value: '北京展宏护理有限公司',
                    label: '北京展宏护理有限公司',
                    }],
                    value: ''
                },
                site_name:{
                    options: [{
                    value: '北京协和医院',
                    label: '北京协和医院'
                    }, {
                    value: '北京地坛医院',
                    label: '北京地坛医院',
                    }, {
                    value: '北京大学附属医院',
                    label: '北京大学附属医院',
                    }],
                    value: ''
                },
                create_time:'',
                update_time:'',
                degree:{
                    options: [{
                    value: '1',
                    label: '小学'
                    }, {
                    value: '2',
                    label: '初中',
                    }, {
                    value: '3',
                    label: '高中'
                    }, {
                    value: '4',
                    label: '大专',
                    }, {
                    value: '5',
                    label: '大学',
                    }, {
                    value: '6',
                    label: '硕士',
                    }, {
                    value: '7',
                    label: '博士',
                    }],
                    value: ''
                },
                description:'',
                experience:{
                    options: [{
                    value: 1,
                    label: '一年护理经验'
                    }, {
                    value: 2,
                    label: '二年护理经验',
                    }, {
                    value: 3,
                    label: '三年护理经验'
                    }, {
                    value: 4,
                    label: '四年护理经验',
                    }, {
                    value: 5,
                    label: '五年护理经验',
                    }],
                    value: ''
                },
                idNo:'',
                avator:'',
                img_list:'',
                is_valid:'',
                lanage_level:{
                    options: [{
                    value: '一级',
                    label: '一级'
                    }, {
                    value: '二级',
                    label: '二级',
                    }, {
                    value: '三级',
                    label: '三级',
                    }],
                    value: ''
                },
                phone:'',
                point:'',
                refuse_reasion:'',
                sid:'',
                stars:{
                    options: [{
                    value: '1',
                    label: '1星'
                    }, {
                    value: '2',
                    label: '2星',
                    // disabled: true
                    }, {
                    value: '3',
                    label: '3星'
                    }, {
                    value: '4',
                    label: '4星',
                    // disabled: true
                    }, {
                    value: '5',
                    label: '5星',
                    // disabled: true
                    }],
                    value: ''
                },
                status:'',
                unit:'',
                unit_price:'',
                online:'',
                activity:'',
                working:'',
                order_count:'',
                well_rate:'',
                rules: {
                    // name: [
                    //     {required:true, message:"请输入护工姓名", trigger:"blur"}
                    // ],
                    // stars: [
                    //     {required:true, message:"请选择护工等级", trigger:"blur"}
                    // ],
                    // loginAccount: [
                    //     {required:true, message:"请输入登录账号", trigger:"blur"}
                    // ],
                    // hid: [
                    //     {required:true, message:"请输入护工工号", trigger:"blur"}
                    // ],
                    // site_name: [
                    //     {required:true, message:"请选择", trigger:"blur"}
                    // ],                    
                    // phone: [
                    //     {required:true, message:"请输入联系方式", trigger:"blur"}
                    // ]
                },
                imageUrl: '',

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