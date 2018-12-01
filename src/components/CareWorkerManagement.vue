<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">
			
			<el-row style="padding:10px 10px 0px 10px;display:flex;flex-direction: row-reverse;">				
				<el-button style="flex:0 0 6%;" type="success"  @click.native="addCareWorker">新增</el-button>
				<el-button style="margin-right:5px;flex:0 0 6%;" @click.native="exportCareworkers">导出</el-button>
				<div style="flex:1;display:flex;">
					<el-input 
						size="medium" 
						style="width: 300px;font-size:12px;flex: 0 0 25%;" 
						placeholder="请输入护工姓名/工号/手机号" 
						@change="handleSearchChange"						
						class="input-with-select">    
						<el-button slot="append" icon="el-icon-search" @click.native="searchCareworkers"></el-button>
					</el-input>

					<el-select
						v-model="starsInfo.value"
						@change="handleStarChange"
						size="medium"
						style="margin-left: 20px; width:150px;flex: 0 0 10%;"
						placeholder="护工星级">
						<el-option
							v-for="item in starsInfo.options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select
						v-model="statusInfo.value"
						@change="handleStatusChange"
						size="medium"
						style="margin-left: 20px; width:150px;flex: 0 0 10%;"
						placeholder="护工状态">
						<el-option
							v-for="item in statusInfo.options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
					<el-select
						v-model="typeInfo.value"
						@change="handleTypeChange"
						size="medium"
						style="margin-left: 20px; width:150px;flex: 0 0 10%;"
						placeholder="护工类型">
						<el-option
							v-for="item in typeInfo.options"
							:key="item.value"
							:label="item.label"
							:value="item.value">
						</el-option>
					</el-select>
				</div>
			</el-row>
				
			<div style="margin: 10px;">
				<el-table
					:data="careworkerList"
					border
					max-height="400">
					<el-table-column
					fixed
					prop="hid"
					label="护工号"
					width="150">
					</el-table-column>
					<el-table-column
					prop="name"
					label="护工姓名"
					width="120">
					</el-table-column>
					<el-table-column
					:formatter="formatterGender"
					prop="gender"
					label="性别"
					width="120">
					</el-table-column>
					<el-table-column
					prop="age"
					label="年龄"
					width="120">
					</el-table-column>
					<el-table-column
					:formatter="formaterStar"
					prop="stars"
					label="护工星级"
					width="120">
					</el-table-column>
					<!-- <el-table-column
					prop="address"
					label="位置区域"
					width="300">
					</el-table-column> -->
					<el-table-column
					prop="site_name"
					label="所在医院"
					width="120">
					</el-table-column>
					<el-table-column
					prop="name"
					label="管理员"
					width="120">
					</el-table-column>
					<el-table-column
					prop="phone"
					label="联系方式"
					width="120">
					</el-table-column>
					<el-table-column
					prop="create_time"
					label="创建时间"
					width="120">
					</el-table-column>
					<el-table-column
					:formatter="formatterStatus"
					prop="status"
					label="状态"
					width="100">
					</el-table-column>
					<el-table-column
					fixed="right"
					label="操作"
					width="180">
					<template slot-scope="scope">
						<!-- <el-button @click.native.prevent="statusRow(scope.$index, scope.row)" type="text" size="small">状态</el-button> -->
						<el-button @click.native.prevent="modifyRow(scope.$index, scope.row)" type="text" size="small">修改</el-button>
						<el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">删除</el-button>
					</template>
					</el-table-column>
				</el-table>
			</div> 			
  		</el-row>
		<el-dialog
			title="删除"
			:visible.sync="careworkerDelete.dialogVisible"
			width="30%"
			center>
			<span>确定删除该账号吗？</span>
			<span slot="footer" class="dialog-footer">
				<el-button type="primary" size="mini" @click="deleteCareworkerAccount">确 定</el-button>
			</span>
		</el-dialog>
		
    </div>
</template>

<script>
	import ContentHeadTop from '../components/ContentHeadTop'
    export default {
    	components: {
    		ContentHeadTop,
		},
		created() {
			this.searchCareworkers();
		},
		methods: {
			formatterGender(row, column) {
				var gender;
				switch(row.gender){
					case '01':
						gender = '男';
						break;
					case '02':
						gender = '女';
						break;
				}
				return gender;
			},
			formaterStar(row, column) {
				var star;
				switch(row.stars) {
					case '1':
						star = '1星';
						break;
					case '2':
						star = '2星';
						break;
					case '3':
						star = '3星';
						break;
					case '4':
						star = '4星';
						break;			
					case '5':
						star = '5星';
						break;			
				}
				return star;
			},
			formatterStatus(row, column) {
				var status;
				switch(row.status) {
					case '0':
						status = '状态0';
						break;
					case '1':
						status = '状态1';
						break;
					case '2':
						status = '状态2';
						break;
					case '3':
						status = '状态3';
						break;
					case '4':
						status = '状态4';
						break;			
					case '5':
						status = '状态5';
						break;			
				}
				return status;			
			},

      		statusRow(index, row) {
				//no need this status
			},
			modifyRow(index, row) {
				console.log(row);
				sessionStorage.setItem('careworker_detail',JSON.stringify(row));
				this.$router.push('addCareWorker');
			},
			deleteRow(index, row) {
				this.careworkerDelete.dialogVisible = true;
				this.careworkerDelete.rowInfo = row;
				this.careworkerDelete.index = index;
				console.log('index=' + index);
			},
			addCareWorker() {
				sessionStorage.setItem('careworker_detail', null);
				this.$router.push('addCareWorker');
			},
			cancel() {
				this.goBack();
			},
			deleteCareworkerAccount() {
				this.careworkerDelete.dialogVisible = false;
				var rowInfo = this.careworkerDelete.rowInfo;
				console.log(rowInfo['hid']);

				this.$http({
                    method: 'POST',
                    url: '/hugongljb/delete_careworker_account',
                    data: {
						hid: rowInfo['hid'],
                    }
                    
                }).then((response) => {
					  console.log(response);
					  console.log(response.status);
					  if(response.status == 200) {
						  this.careworkerList.splice(this.careworkerDelete.index, 1);
					  }
				});
			},			
			async searchCareworkers() {
				this.$http({
					method:'POST',
					url:'/hugongljb/get_hugongs',
					data:{
						hid:this.hid,
						name:this.name,
						phone:this.phone,
						stars:this.stars,
						status:this.status,
						type:this.type,
					}
				}).then((response) => {
					this.careworkerList = response.data.data.list;
				})
			},

			handleSearchChange(content) {
				this.hid = content;
				this.name = content;
				this.phone = content;
			},
			handleStarChange() {
				this.stars = this.starsInfo.value;

			},
			handleStatusChange() {
				this.status = this.statusInfo.value;

			},
			handleTypeChange() {
				this.type = this.typeInfo.value;

			}
    },
    data() {
      return {

		hid:'',
        name:'',
        phone:'',
        stars:'',
        status:'',
        type:'',
		careworkerList:[],
		careworkerDelete:{
			rowInfo:'',
			index:'',
			dialogVisible:false,
		},
		inputContent:'',
		statusInfo:{
			options: [{
			value: 1,
			label: '在线护工'
			}, {
			value: 2,
			label: '下线护工',
			}, {
			value: 3,
			label: '在岗护工'
			}, {
			value: 4,
			label: '下岗护工',
			}, {
			value: 0,
			label: '所有状态',
			}],
			value: ''
		},
		starsInfo:{
			options: [{
			value: 1,
			label: '1星'
			}, {
			value: 2,
			label: '2星',
			}, {
			value: 3,
			label: '3星'
			}, {
			value: 4,
			label: '4星',
			}, {
			value: 5,
			label: '5星',
			}, {
			value: 0,
			label: '所有星级',
			}],
			value: ''
		},
		typeInfo:{
			options: [{
			value: 1,
			label: '平台'
			}, {
			value: 2,
			label: '公司',
			}, {
			value: 0,
			label: '所有类型',
			}],
			value: ''
		},
		
      }
    }
    }
</script>


<style lang="less">
	@import '../style/mixin';

	.el-table th, .el-table td{
		text-align:center;
	}
	.el-dialog--center .el-dialog__body {
    	text-align: center;
	}

</style>
