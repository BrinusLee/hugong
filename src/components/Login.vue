/* eslint-disable */
<template>
  <div class="login_page fillcontain">
    <transition>
        <section class="form_contianer" v-show="loginShow">
            <div class="login_title">
                <p>Nursing management platform</p>
            </div>
            <el-form label-width="80px" ref="loginForm" :model="loginForm" :rules="rules">
                <el-row>
                    <el-form-item label="Username:" prop="username">
                        <el-input v-model="loginForm.username"></el-input>
                    </el-form-item>
                </el-row>
                <el-form-item label="Password:" prop="password">
                    <el-input v-model="loginForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-checkbox>Remember user name and password</el-checkbox>
                </el-form-item>
                <el-form-item>
                    <el-button class="submit_btn" v-on:click="submitFrom('loginForm')">Login</el-button>
                </el-form-item>

                <!-- <el-form-item label="活动区域">
                        <el-select placeholder="请选择活动区域">
                            <el-option label="区域一" value="shanghai"></el-option>
                            <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item> -->
            </el-form>
        </section>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'login_page',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      checked:false,
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loginShow: true
    }
  },

  methods: {
    async submitFrom (formName) {
    //   this.$router.push('management')
      this.$router.push('management')
      this.loginShow = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="less" scoped>
    @import '../style/mixin';

    .login_title{
        text-align: center;
    }
	.login_page{
		background-color:#000;
	}
    .form_contianer{
        .wh(520px, 310px);
		.ctp(520px, 310px);
		padding: 25px;
        border-radius: 2px;
        border: 20px solid;
        border-color: rgb(80, 199, 214);
		// text-align: center;
        background-color:lightcyan;
    }
    .submit_btn{
            width: 100%;
            color: lightseagreen;
            font-size: 16px;
            align-items: center;
		}
    
</style>
