<template>
  <div class="arrangement-by-row">
      <content-head-top class="router-content-header"></content-head-top>
       <el-main>           
           <el-row style="text-align:left;padding:10px;">
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">基础信息</el-breadcrumb>
                <el-form label-width="100px" :rules="rules">
                  <el-col :span="18">
                    <el-row>
                      <el-form-item label="登录账号:" prop="username">
                          <el-input v-model="username"></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-form-item label="密码:" prop="password">
                          <el-input v-model="password"></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-form-item label="确认密码:" prop="password_confirm">
                          <el-input v-model="password_confirm"></el-input>
                      </el-form-item>
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="姓名:" prop="admin_name">
                          <el-input v-model="admin_name"></el-input>
                      </el-form-item>

                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="手机号:" prop="phone">
                          <el-input v-model="phone"></el-input>
                      </el-form-item>

                      </el-col>
                      
                    </el-row>
                    <el-row>
                      <el-col :span="12">
                        <el-form-item label="邮箱:" prop="email">
                          <el-input v-model="email"></el-input>
                      </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="微信号:" prop="webchat">
                          <el-input v-model="webchat"></el-input>
                      </el-form-item>

                      </el-col>

                    </el-row>
                    <el-row>
                        <el-col :span="12">
                            <el-form-item label="部门:" prop="department.value">
                                <el-select
                                    v-model="department.value"
                                    size="medium"
                                    style="width:100%;"
                                    placeholder="请选择">
                                    <el-option
                                        v-for="item in department.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </el-form-item>                        
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="职位:" prop="position">
                          <el-input v-model="position"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="12">
                        <el-form-item label="公司:" prop="comp_name">
                          <el-input v-model="comp_name"></el-input>
                      </el-form-item>
                      </el-col>

                      <el-col :span="12">
                        <el-form-item label="网点:" prop="site_name">
                          <el-input v-model="site_name"></el-input>
                        </el-form-item>
                      </el-col>
                    </el-row>

                    <el-row>
                      <el-form-item label="部门负责人:" prop="is_dept_principal">
                          <!-- <el-radio v-model="isPrincipal" label="1">是</el-radio>
                          <el-radio v-model="isPrincipal" label="2">否</el-radio> -->
                          <el-col :span="4">
                              <template>
                                <el-radio v-model="is_dept_principal" label='1'>是</el-radio>
                                <el-radio v-model="is_dept_principal" label='0'>否</el-radio>
                              </template>
                          </el-col>                          
                      </el-form-item>                      
                    </el-row>
                  </el-col>  
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
                </el-row>                
            </el-row>

            <el-row style="text-align:left;padding:10px;">
                <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">权限设置</el-breadcrumb>
                <el-form label-width="100px" :rules="rules">
                    <el-row>
                        <el-form-item label="账号权限:" prop="accountPermission">
                            <el-col :span="18">
                                <el-col :span="4"><el-checkbox v-model="accountPermission.is_sys_administrator">系统管理员</el-checkbox></el-col>
                                <el-col :span="4"><el-checkbox v-model="accountPermission.is_dept_principal">部门负责人</el-checkbox></el-col>
                                <el-col :span="4"><el-checkbox v-model="accountPermission.is_dept_administrator">部门管理员</el-checkbox></el-col>
                                <el-col :span="4"><el-checkbox v-model="accountPermission.is_dept_auditor">部门审核员</el-checkbox></el-col>
                                <el-col :span="4"><el-checkbox v-model="accountPermission.is_user_defined_role">自定义角色</el-checkbox></el-col>
                            
                            </el-col>
                          
                        </el-form-item>
                        <el-col :span="12">
                            
                        </el-col>
                        <el-col :span="12">                            
                            
                        </el-col>
                    </el-row>                      
                </el-form>                
            </el-row>
       </el-main>
       <div style="padding-top:10px;padding-bottom:10px;">
             <span><el-button @click.native ="cancel">取消</el-button><el-button type="success" @click.native ="saveEmployee">保存</el-button></span>
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
            var item = sessionStorage.getItem('employee_detail');
            console.log("item:" + item);
            if(item != null) {
                var obj = JSON.parse(item);
                if(obj.aid == null) {
                    console.log("obj.aid == null");
                    return;
                }
                this.aid = obj.aid;
                this.cid = obj.cid;
                this.sid = obj.sid;
                this.comp_name = obj.comp_name;
                this.department = obj.department;
                this.site_name = obj.site_name;
                this.username = obj.username;
                this.password = obj.password;
                this.password_confirm = obj.password_confirm;
                this.admin_name = obj.admin_name;

                this.phone = obj.phone;
                this.email = obj.email;
                this.webchat = obj.webchat;
                this.position = obj.position;
                this.is_dept_principal = obj.is_dept_principal==1?'1':'0';//for position
                this.accountPermission.is_dept_principal = obj.is_dept_principal==1?true:false;//for permission
                this.accountPermission.is_dept_administrator = obj.is_dept_administrator==1?true:false;
                this.accountPermission.is_dept_auditor = obj.is_dept_auditor==1?true:false;
                this.accountPermission.is_user_defined_role = obj.is_user_defined_role==1?true:false;
                this.accountPermission.is_sys_administrator = obj.is_sys_administrator==1?true:false;               

            }
        },
		methods: {
            cancel() {
				this.goBack();
            },
            saveEmployee(){

                this.$http({
                    method: 'POST',
                    url: '/hugongljb/post_employee_info',
                    data: {              
                        aid: this.aid,
                        cid: this.cid,
                        sid: this.sid,
                        comp_name: this.comp_name,
                        department:this.department,
                        site_name: this.site_name,
                        username: this.username,
                        password: this.password,
                        password_confirm: this.password_confirm,
                        admin_name: this.admin_name,
                        phone:this.phone,
                        email: this.email,
                        webchat: this.webchat,
                        position: this.position,
                        is_dept_principal: this.is_dept_principal?1:0,//default give him permission of dept_principal if he is is_dept_principal
                        is_dept_administrator: this.accountPermission.is_dept_administrator?1:0,
                        is_dept_auditor: this.accountPermission.is_dept_auditor?1:0,
                        is_user_defined_role: this.accountPermission.is_user_defined_role?1:0,
                        is_sys_administrator: this.accountPermission.is_sys_administrator?1:0,

                        
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
                aid:'',
                cid:'',
                sid:'',
                comp_name:'',
                department:'',
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
                site_name:'',
                username:'',
                password:'',
                password_confirm:'',
                admin_name:'',
                phone:'',
                email:'',
                webchat:'',
                position:'',
                is_dept_principal:'0',                
                accountPermission:{
                    is_dept_administrator:'0',
                    is_dept_principal:'0',
                    is_dept_auditor:'0',
                    is_sys_administrator:'0',
                    is_user_defined_role:'0',
                },              
                rules: {
                    username: [
                        {required:true, message:"请输入登录账号", trigger:"blur"}
                    ],
                    password: [
                        {required:true, message:"请输入密码", trigger:"blur"}
                    ],
                    password_confirm: [
                        {required:true, message:"请确认密码", trigger:"blur"}
                    ],
                    admin_name: [
                        {required:true, message:"请输入姓名", trigger:"blur"}
                    ],
                    phone: [
                        {required:true, message:"请输入手机号", trigger:"blur"}
                    ],                    
                    email: [
                        {required:true, message:"请输入邮箱", trigger:"blur"}
                    ],
                    webchat: [
                        {required:true, message:"请输入微信号", trigger:"blur"}
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