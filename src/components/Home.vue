<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body bg-light-gray">
					<div style="padding-left: 20px;padding-top: 20px;">
						<el-row :gutter="20" type="flex">
							<el-col :span="6">
								<div class="grid-content card-bg-white">
									<div class="card-header">
										<div>待处理订单（近一年）</div>
									</div>
									<div class="card-block">
										<div>待订单审核</div>
										<div><span>0</span> 笔</div>
									</div>
									<div class="card-block-divider"></div>
									<div class="card-block">
										<div>待退款审核</div>
										<div><span>0</span> 笔</div>
									</div>
									<div class="card-block-divider"></div>
									<div class="card-block"></div>
								
								</div>
							</el-col>
							<el-col :span="6">
								<div class="grid-content card-bg-white">
									<div class="card-header">
										<div>通知公告</div>
									</div>
									<div class="card-block">
										<div>XXXX</div>
										<div>YYY</div>
									</div>
									<div class="card-block-divider"></div>
									<div class="card-block">
										<div>XXXX</div>
										<div>YYY</div>
									</div>
									<div class="card-block-divider"></div>
									<div class="card-block"></div>
								
								</div>
							</el-col>
							<el-col :span="6">
								<div class="grid-content card-bg-white">
									<div class="card-header">
										<div>反馈回复</div>
									</div>
									<div class="card-block">
										<div>XXXX</div>
										<div>YYY</div>
									</div>
									<div class="card-block-divider"></div>
									<div class="card-block">
										<div>XXXX</div>
										<div>YYY</div>
									</div>
									<div class="card-block-divider"></div>
									<div class="card-block"></div>
								
								</div>
							</el-col>
						</el-row>
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

		},
		data() {
			return {
				
			}
		}
    }
</script>


<style lang="less" >
	@import '../style/mixin';

  .card-header{
		flex: 0 0 60px;
		border-bottom: 1px solid #000000;
		line-height: 60px;
		text-align: left;
		padding-left: 10px;
				
	}

	.card-block{
		display: flex;
		justify-content: space-between;
		flex: 0 0 80px;
		line-height: 80px;
		padding-left: 10px;
		padding-right: 10px;
	}

	.card-block-divider{
		border-bottom: 1px solid black;
		margin-left: 10px;
	}
	
		.el-col {
			border-radius: 4px;
		}
		.bg-light-gray {
			background-color: rgb(250, 252, 255);
		}
		.card-bg-white {
			background: #ffffff;
		}
		.grid-content {
			border-radius: 2px;
			border: 1px solid #dcdddd;
			min-height: 360px;
			display: flex;
			flex-direction: column;
		}


</style>
