<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">
			<div>
				<el-row type="flex" class="finance-summary" justify="space-around">
					<el-col :span="4"><div class="grid-content1 bg-red" style="padding-top: 12px;"><div>0</div><div>今日订单数</div></div></el-col>
					<el-col :span="4"><div class="grid-content1 bg-blue" style="padding-top: 12px;"><div>0</div><div>已结束订单</div></div></el-col>
					<el-col :span="4"><div class="grid-content1 bg-purple" style="padding-top: 12px;"><div>0</div><div>今日订单总金额</div></div></el-col>
					<el-col :span="4"><div class="grid-content1 bg-green" style="padding-top: 12px;"><div>0</div><div>今日退款总金额</div></div></el-col>
				</el-row>

				<el-row :gutter="20" style="background: #dce6fa">
					<el-col :span="16">
						<div class="grid-content2">
							<div style="display:flex; justify-content:space-around; font-size:14px;padding-top:16px;">
								<div>平台总金额：<span>1000</span></div>
								<div>今日总收入:<span>1000</span></div>
								<div>今日提现金额：<span>1000</span></div>
								<div>今日退款金额:<span>1000</span></div>
							</div>
						</div>
					</el-col>

					<el-col :span="7">
						<!-- <div class="grid-content2 bg-purple"> -->
							<el-row type="flex" class="row-bg" justify="space-around">
								<el-button size="small" style="flex: 0 0 40px;">提现申请</el-button>
								<el-button size="small" style="flex: 0 0 40px;">退款确认</el-button>
								<el-button size="small" style="flex: 0 0 40px;">账户管理</el-button>
							</el-row>
						<!-- </div> -->
					</el-col>					
				</el-row>			

			</div>
			<div style="display:flex;padding: 20px;">账单明细</div>
			<el-row style="padding:10px;display:flex;">
				<el-select
					v-model="value11"
					multiple
					collapse-tags
					size="small"
					style="margin-left: 5px; flex: 0 0 10%;"
					placeholder="全部明细">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
				<el-select
					v-model="value11"
					multiple
					collapse-tags
					size="small"
					style="margin-left: 5px; flex: 0 0 10%;"
					placeholder="费用类型">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					</el-option>
				</el-select>

				<div class="block">
					<!-- <span class="demonstration">带快捷选项</span> -->
					<el-date-picker
					v-model="value7"
					type="daterange"
					align="right"
					size="small"
					style="margin-left: 10px;"
					unlink-panels
					range-separator="~"
					start-placeholder="开始日期"
					end-placeholder="结束日期"
					:picker-options="pickerOptions2">
					</el-date-picker>
				</div>
				
				
				<el-breadcrumb-item style="flex: 0 0 5%"></el-breadcrumb-item>
			
				<el-button type="primary" size="small" style="flex: 0 0 5%" @click.native="searchBills">查询</el-button>
				<el-button type="success" size="small" style="flex: 0 0 5%">导出</el-button>

			</el-row>
				
			<div style="margin: 10px;">
				<el-table
						ref="multipleTable"
						:data="tableData4"
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
					label="单号"
					width="180">
					<template slot-scope="scope">{{ scope.row.orderNumber }}</template>
					</el-table-column>
					<el-table-column
					prop="customerName"
					label="客户名称"
					width="120">
					</el-table-column>
					<el-table-column
					prop="contactNumber"
					label="联系电话"
					width="150"
					show-overflow-tooltip>
					</el-table-column>
					<el-table-column
					prop="paymentAmount"
					label="支付金额(元)"
					width="120">
					</el-table-column>
					<el-table-column
					prop="paymentBy"
					label="支付方式"
					width="120">
					</el-table-column>
					<el-table-column
					prop="paymentAccount"
					label="支付账号"
					width="200">
					</el-table-column>
					<el-table-column
					prop="feeReason"
					label="费用名目"
					width="200">
					</el-table-column>
					<el-table-column
					prop="feeType"
					label="费用类型"
					width="120">
					</el-table-column>
					<el-table-column
					prop="remarks"
					label="备注"
					width="200">
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
		methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
			},
			searchBills() {
				this.$http.get("http://jsonplaceholder.typicode.com/users")
				.then((data) => {
					//   console.log(data);
					this.billingList = data.body;
				})
			}
    },
    data() {
      return {
				billingList:[],
        tableData4: [{
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
					
        }, {
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
        }, {
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
        }, {
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
        }, {
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
        }, {
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
        }, {
          orderNumber: '54343143435',
          customerName: '王小虎',
          contactNumber: '075528765768',
          paymentAmount: '2810',
          paymentBy: '微信支付',
					paymentAccount: 235236253354,
					feeReason:'用户下单收入',
					feeType:'收入',
					remarks:'备注'
		}],
		pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value6: '',
        value7: ''
      }
    }
    }
</script>


<style lang="less">
	@import '../style/mixin';

.finance-summary {
	margin: 20px;    
	&:first-child {
      margin-left: 20;
	}
	&:last-child {
      margin-right: 20;
	}
  }
  .el-col {
    border-radius: 4px;
  }

  .bg-red {
    background: #dd334f;
  }
  .bg-blue {
    background: #1abbec;
  }
  .bg-purple {
    background: #c64ce4;
  }
  .bg-green {
    background: #119e68;
  }


  .grid-content1 {
    border-radius: 2px;
    min-height: 60px;
  }
  .grid-content2 {
    border-radius: 2px;
    min-height: 48px;
  }
    .grid-content3 {
    border-radius: 2px;
    min-height: 30px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #dce6fa;
  }
</style>
