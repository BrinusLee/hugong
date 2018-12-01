<template>
  <div class="arrangement-by-row">
      <content-head-top class="router-content-header"></content-head-top>
       <el-main>           
           <el-row class="cluster-level-one">
                <el-breadcrumb class="cluster-group-title">订单信息</el-breadcrumb>
                <div class="cluster-level-two">
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>订单号:</label>{{order_id}}</span>                            
                        </el-col>                                                
                    </el-row>                    
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>客户名称:</label>{{customer}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>联系方式:</label>{{cust_phone}}</span>                            
                        </el-col>
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>开始时间:</label>{{start_time}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>结束时间:</label>{{end_time}}</span>                            
                        </el-col>
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>服务天数:</label>{{}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>付款方式:</label>{{}}</span>                            
                        </el-col>                      
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>订单单价:</label>{{unit_price}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>订单金额:</label>{{order_price}}</span>                            
                        </el-col>                 
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>剩余款数:</label>{{}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>订单状态:</label>{{status}}</span>                            
                        </el-col>
                    </el-row>
                </div>                
            </el-row>

            <el-row class="cluster-level-one">
                <el-breadcrumb class="cluster-group-title">被护理人信息</el-breadcrumb>
                <div class="cluster-level-two">
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>被护理人:</label>{{}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>性别:</label>{{}}</span>
                        </el-col>                        
                    </el-row>                    
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>年龄:</label>{{}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>双方关系:</label>{{relation}}</span>                            
                        </el-col>
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>身份证号:</label>{{id}}</span>                            
                        </el-col>
                        
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>护理医院:</label>{{site_name}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>护理科室:</label>{{keshi}}</span>                            
                        </el-col>                      
                    </el-row>
                    
                </div>     
            </el-row>

            <el-row class="cluster-level-one">
                <el-breadcrumb class="cluster-group-title">被护理人信息</el-breadcrumb>
                <div class="cluster-level-two">
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>护工姓名:</label>{{hugong_name}}</span>                            
                        </el-col>
                        <el-col :span="6">
                            <span><label>护工工号:</label>{{hid}}</span>
                        </el-col>                        
                    </el-row>                    
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>联系电话:</label>{{hugong_phone}}</span>                            
                        </el-col>                        
                    </el-row>
                    <el-row class="sub-line">
                        <el-col :span="6">
                            <span><label>管理员:</label>{{administrator}}</span>
                        </el-col>
                        <el-col :span="6">
                            <span><label>医院网点:</label>{{site_name}}</span>                            
                        </el-col>
                    </el-row>                    
                </div>     
            </el-row>            
       </el-main>
       <div class="cluster-bottom">
             <span><el-button @click.native ="cancel">返回</el-button></span>
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
            var item = sessionStorage.getItem('order_detail');
            console.log("item:" + item);
            if(item != null) {
                var obj = JSON.parse(item);
                
                this.administrator = obj.administrator;
                this.admin_phone = obj.admin_phone;
                this.contect_name = obj.contect_name;
                this.contect_phone = obj.contect_phone;
                this.create_openid = obj.create_openid;
                this.create_time = obj.create_time;
                this.customer = obj.customer;
                this.cust_no = obj.cust_no;
                this.cust_phone = obj.cust_phone;
                this.end_time = obj.end_time;
                this.hid = obj.hid;
                this.hugong_name = obj.hugong_name;
                this.hugong_phone = obj.hugong_phone;
                this.id = obj.id;
                this.keshi = obj.keshi;
                this.order_id = obj.order_id;
                this.order_price = obj.order_price;
                this.parent_order_id = obj.parent_order_id;
                this.pay_openid = obj.pay_openid;
                this.pay_time = obj.pay_time;
                this.real_price = obj.real_price;
                this.relation = obj.relation;
                this.remark = obj.remark;
                this.service_dept_bedno = obj.service_dept_bedno;
                this.site_name = obj.site_name;
                this.start_time = obj.start_time;
                this.status = obj.status;
                this.trade_id = obj.trade_id;
                this.unit_num = obj.unit_num;
                this.unit_price = obj.unit_price;
            }
        },
		methods: {
            cancel() {
				this.goBack();
            },            
        },
        data () {
            return {
                administrator:'',
                admin_phone:'',
                contect_name:'',
                contect_phone:'',
                create_openid:'',
                create_time:'',
                customer:'',
                cust_no:'',
                cust_phone:'',
                end_time:'',
                hid:'',
                hugong_name:'',
                hugong_phone:'',
                id:'',
                keshi:'',
                order_id:'',
                order_price:'',
                parent_order_id:'',
                pay_openid:'',
                pay_time:'',
                real_price:'',
                relation:'',
                remark:'',
                service_dept_bedno:'',
                site_name:'',
                start_time:'',
                status:'',
                trade_id:'',
                unit_num:'',
                unit_price:'',
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