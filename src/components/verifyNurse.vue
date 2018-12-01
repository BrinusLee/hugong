<template>
  <div class="arrangement-by-row">
      <content-head-top class="router-content-header"></content-head-top>
       <el-main>           
           <el-row class="cluster-level-one">
                <el-breadcrumb class="cluster-group-title">护士审核信息</el-breadcrumb>
                <div class="cluster-level-two">
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>护士编号: </label>{{nid}}</span>
                        </el-col>                                                
                    </el-row>                    
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>护士姓名: </label>{{name}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>身份证号: </label>{{idNo}}</span>                            
                        </el-col>
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>联系方式: </label>{{phone}}</span>                            
                        </el-col>
                        
                    </el-row>
                    
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>网点名称: </label>{{site_name}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>网点编号: </label>{{sid}}</span>                            
                        </el-col>                      
                    </el-row>

                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>科室: </label>{{department}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>职位: </label>{{job}}</span>                            
                        </el-col>                      
                    </el-row>

                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>头像列表:</label>{{img_list}}</span>                            
                        </el-col>
                                         
                    </el-row>
                    
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>创建时间: </label>{{create_time}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>修改时间: </label>{{update_time}}</span>                            
                        </el-col>
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>是否有效: </label>{{is_valid}}</span>
                        </el-col>
                       
                    </el-row>
                </div>                
            </el-row>
        
       </el-main>
       <div class="cluster-bottom">
             <span><el-button @click.native ="cancel">返回</el-button></span>             
             <span><el-button type="primary" @click.native ="verifyFailed" icon="el-icon-close" >审核不通过</el-button></span>
             <span><el-button type="success" @click.native ="verifySuccess" icon="el-icon-check" >审核通过</el-button></span>
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
            var item = sessionStorage.getItem('nurse_detail');
            console.log("item:" + item);
            if(item != null) {
                var obj = JSON.parse(item);
                
                this.nid = obj.nid;
                this.name = obj.name;
                this.idNo = obj.idNo;
                this.phone = obj.phone;
                this.site_name = obj.site_name;
                this.sid = obj.sid;
                this.department = obj.department;
                this.job = obj.job;
                this.img_list = obj.img_list;                
                this.create_time = obj.create_time;
                this.update_time = obj.update_time;
                this.is_valid = obj.is_valid;
                
            }
        },
		methods: {
            cancel() {
				this.goBack();
            },
            verifySuccess() {

                this.is_valid = '01'

                this.$http({
                    method: 'POST',
                    url: '/hugongljb/client_verify_nurse_info',
                    data: {
                        nid: this.nid,
                        is_valid: this.is_valid,
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
            verifyFailed() {

                this.is_valid = '00'

                this.$http({
                    method: 'POST',
                    url: '/hugongljb/client_verify_nurse_info',
                    data: {
                        nid: this.nid,
                        is_valid: this.is_valid,
                    }
                    
                }).then((response) => {
                    // if(response.data)
					  console.log(response);
                      console.log(response.status);
                      
                      if(response.status == 200) {
                          this.goBack();
                      }
                });

            }
        },
        data () {
            return {
                name:'',
                idNo:'',
                phone:'',
                site_name:'',
                department:'',
                job:'',
                img_list:'',
                sid:'',
                nid:'',
                create_time:'',
                update_time:'',
                is_valid:'',
            }
        },
              


}
</script>

<style  lang="less">
    @import '../style/mixin';
        
    .arrangement-by-row{
        display: flex;
        flex-direction: column;
		height: 100%;
		width: 100%;
		
    }

    .cluster-level-one {
        text-align:left;
        padding:10px;
    }

    .cluster-group-title {
        text-align:left;
        padding:10px 0 10px 10px;
        font-size:16px;
        color:rgb(97, 186, 238);
    }
    
    .cluster-level-two{
        padding:0px 40px 0px 40px;font-size:16px;
    }
    .cluster-level-two .sub-line {
        padding:10px 0px 10px 0px;
    }

    .cluster-bottom {
        padding-top:10px;
        padding-bottom:10px;
    }
    
</style>