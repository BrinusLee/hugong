<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">
			
			<el-row style="padding:10px;display:flex;flex-direction: row-reverse;">
                <el-button  @click.native="exportOrders">导出</el-button>
                <div style="flex:1;display:flex;">
                    <el-input 
						size="small" 
						style="width: 300px;font-size:12px;" 
						placeholder="请输入客户/联系电话/订单号"
						@change="handleSearchChange"
						class="input-with-select">    
                        <el-button slot="append" icon="el-icon-search" @click.native="searchOrders"></el-button>
                    </el-input>

                    <el-date-picker
						v-model="value1"
						size="small"
						style="width:150px; flex: 0 0 10%;margin-left: 5px;"
						type="datetime"
						value-format=""
						@change="handleCreateTimeChange"
						placeholder="下单日期">
					</el-date-picker>
					<el-date-picker
						v-model="value1"
						size="small"
						style="width:150px; flex: 0 0 10%;"
						type="datetime"
						value-format=""
						@change="handleEndTimeChange"
						placeholder="截止日期">
					</el-date-picker>
					<el-select
						v-model="value11"
						size="small"
						style="margin-left: 5px; flex: 0 0 10%;"
						placeholder="全部网点">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select
						v-model="value11"
						size="small"
						style="margin-left: 5px; flex: 0 0 10%;"
						placeholder="订单状态">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select
						v-model="value11"
						size="small"
						style="margin-left: 5px; flex: 0 0 10%;"
						placeholder="收款状态">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				<!-- <el-autocomplete
						popper-class="my-autocomplete"
						v-model="state3"
						style="width:140px;margin-left: 5px;"
						size="small"
						:fetch-suggestions="querySearch"
						placeholder="选择护工"
						@select="handleSelect">
						<i
							class="el-icon-edit el-input__icon"
							slot="prefix"
							@click="handleIconClick">
						</i>
						<template slot-scope="{ item }">
							<div class="name">{{ item.value }}</div>
							<span class="addr">{{ item.address }}</span>
						</template>
					</el-autocomplete> -->
                </div>
            </el-row>
				
			<div style="margin: 10px;">
				<el-table
						ref="multipleTable"
						:data="orderList"
						tooltip-effect="dark"
						align="center"
						border
						height="400"
						@selection-change="handleSelectionChange">
					<el-table-column
					type="selection"
					fixed
					width="55">
					</el-table-column>
					<el-table-column
					fixed
					prop="order_id"
					label="订单号"
					width="200">
					<!-- <template slot-scope="scope">{{ scope.row.orderNumber }}</template> -->
					</el-table-column>
					<el-table-column
					prop="customer"
					label="客户"
					width="150"
					show-overflow-tooltip>
					</el-table-column>
					<el-table-column
					prop="cust_phone"
					label="联系方式"
					width="180">
					</el-table-column>
					<el-table-column
					prop="create_time"
					label="下单时间"
					width="150">
					</el-table-column>
					<el-table-column
					prop="end_time"
					label="截止时间"
					width="120">
					</el-table-column>
					<el-table-column
					prop="order_price"
					label="订单金额"
					width="120">
					</el-table-column>
					<el-table-column
					prop="real_price"
					label="收款金额"
					width="120">
					</el-table-column>
					<el-table-column
					prop="days_left"
					label="剩余天数"
					width="120">
					</el-table-column>
					<el-table-column
					prop="site_name"
					label="网点名称"
					width="200">
					</el-table-column>
					<el-table-column
					prop="service_dept_bedno"
					label="服务科室及床号"
					width="200">
					</el-table-column>
					<el-table-column
					prop="hugong_name"
					label="护工名称"
					width="120">
					</el-table-column>
					<el-table-column
					prop="hugong_phone"
					label="护工联系方式"
					width="120">
					</el-table-column>
					<el-table-column
					prop="administrator"
					label="管理员"
					width="120">
					</el-table-column>
					<el-table-column
					prop="admin_phone"
					label="管理员联系方式"
					width="120">
					</el-table-column>
					<el-table-column
					:formatter="formatterStatus"
					prop="status"
					label="订单状态"
					width="120">
					</el-table-column>
					<el-table-column
					prop="collectionStatus"
					label="收款状态"
					width="120">
					</el-table-column>
					<el-table-column
					fixed="right"
					label="操作"
					width="120">
					<template slot-scope="scope">
						<el-button	@click.native.prevent="viewRow(scope.$index, scope.row)" type="text" size="small">查看</el-button>
					</template>
					</el-table-column>
				</el-table>
			</div>
			
  			
  		</el-row>
    </div>
</template>

<script>
	import ContentHeadTop from '../components/ContentHeadTop'
    export default {
    	components: {
    		ContentHeadTop,
		},
		created() {
			this.searchOrders();
		},
		methods: {
			formatterStatus(row, column) {
				var status;
				switch(row.status) {
					case 'I':
						status = '已创建,未支付';
						break;	
					case 'S':
						status = '已支付,未开始';
						break;
					case 'A':
						status = '护工已接单';
						break;
					case 'F':
						status = '服务中';
						break;
					case 'P':
						status = '已退款';
						break;
					case 'C':
						status = '已完成';
						break;					
					case 'Z':
						status = '有争议的异常单';
						break;						
					case 'UCP':
						status = '状态UCP';
						break;			
				}
				return status;			
			},
			viewRow(index, row) {
				console.log(row);
				sessionStorage.setItem('order_detail',JSON.stringify(row));
				this.$router.push('viewOrder');
			},

			toggleSelection(rows) {
				if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
				} else {
				this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			//SELECT * FROM `hugong_orders` WHERE (customer LIKE '%许凤莉%' OR cust_phone LIKE '%许凤莉%' OR order_id LIKE '%许凤莉%') AND status = 'S' AND true 
			async searchOrders() {				
				this.$http({
					method:'POST',
					url:'/hugongljb/get_orders',
					data:{
						order_id:this.order_id,
						customer:this.customer,
						cust_phone:this.cust_phone,
					}
				}).then((response) => {
					this.orderList = response.data.data.list;
				})
			},
			handleSearchChange(content) {
				this.order_id = content;
				this.customer = content;
				this.cust_phone = content;
			},
			handleCreateTimeChange() {

			},
			handleEndTimeChange() {

			}
    	},
    data() {
      return {
		    orderList:[],
		    order_id:'',
			customer:'',
			cust_phone:'',
			create_time:'',
			end_time:'',
			site_name:'',
			status:'',
			invoice_status:'',        
      }
    }
    }
</script>


<style lang="less">
	@import '../style/mixin';

	.el-table th, .el-table td{
		text-align:center;
	}

</style>
