<template>
  <div class="arrangement-by-row">
    <content-head-top class="router-content-header"></content-head-top>
    <section class="section_container">
        <el-main>
            <el-row style="text-align:left;padding:10px;">
                    <el-breadcrumb style="text-align:left;padding:10px 0 30px 10px;font-size:16px;color:rgb(97, 186, 238)">新增网点</el-breadcrumb>
                    <el-form label-width="100px" :rules="rules">
                        <el-col :span="12">
                            <el-row>
                                <el-form-item label="部门名称:" prop="departmentName">
                                    <el-input v-model="companyInfo.departmentName"></el-input>
                                </el-form-item>
                                <el-form-item label="上级部门:" prop="parentDepartment">
                                    <el-input v-model="companyInfo.parentDepartment"></el-input>
                                </el-form-item>
                            </el-row>
                            <el-row style="text-align:center">
                                <span><el-button size="medium" @click.native ="cancel">取消</el-button><el-button size="medium" type="success">保存</el-button></span>
                            </el-row>
                        </el-col>
                    </el-form>
                </el-row>
            </el-main>
        </section>
  </div>
</template>

<script>
    import ContentHeadTop from '../components/ContentHeadTop'
    export default {
        components: {
    		ContentHeadTop,
		},
		methods: {
            cancel() {
				this.goBack();
            },
            save(){

            },
            
        },
        data () {
            return {
                companyInfo: {
                    departmentName:'',
                    parentDepartment:'',
                    
                                        
                },
                rules: {
                    departmentName: [
                        {required:true, message:"请输入部门名称"}
                    ],
                    parentDepartment: [
                        {required:true, message:"请输入上级部门", trigger:"blur"}
                    ],                    
                },
                imageUrl: '',
                radio2: 3,
                radio: '1',

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