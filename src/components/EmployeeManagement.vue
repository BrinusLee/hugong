<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">
			<el-tabs type="border-card" style="padding:10px;">
				<el-tab-pane label="员工账号">
					<el-row style="padding:10px 0 10px 0;display:flex;flex-direction: row-reverse;">
						<el-button type="success"  @click.native="addEmployee">新增账号</el-button>
						<div style="flex:1;display:flex;">
							<el-input 
							size="medium" 
							style="width: 300px;font-size:12px;" 
							placeholder="请输入员工姓名/员工账号/手机号" 
							@change="handleSearchChange"
							class="input-with-select">    
								<el-button slot="append" icon="el-icon-search" @click.native="searchEmployees"></el-button>
							</el-input>

							<el-select
								v-model="departmentInfo.value"
								@change="handleDepartmentChange"								
								size="medium"
								style="margin-left: 20px; width:150px;flex: 0 0 10%;"
								placeholder="所属部门">
								<el-option
									v-for="item in departmentInfo.options"
									:key="item.value"
									:label="item.label"
									:value="item.value">
								</el-option>
							</el-select>
						</div>
					</el-row>

					<el-table
					:data="employeeList"
					border
					max-height="400">
					<el-table-column
					fixed
					prop="aid"
					label="员工账号"
					width="150">
					</el-table-column>
					<el-table-column
					prop="admin_name"
					label="姓名"
					width="120">
					</el-table-column>
					<el-table-column
					prop="position"
					label="职位"
					width="120">
					</el-table-column>
					<el-table-column
					prop="department"
					label="部门"
					width="200">
					</el-table-column>
					<el-table-column
					prop="comp_name"
					label="所属公司"
					width="200">
					</el-table-column>
					<el-table-column
					prop="webchat"
					label="微信号"
					width="150">
					</el-table-column>
					<el-table-column
					prop="phone"
					label="手机号"
					width="120">
					</el-table-column>
					<el-table-column
					prop="email"
					label="邮箱"
					width="250">
					</el-table-column>
					<el-table-column
					fixed="right"
					label="操作"
					width="150">
					<template slot-scope="scope">
						<el-button @click.native.prevent="modifyRow(scope.$index, scope.row)" type="text" size="small">修改</el-button>
						<el-button @click.native.prevent="disableRow(scope.$index, scope.row)" type="text" size="small">禁用</el-button>
					</template>
					</el-table-column>
				</el-table>

				</el-tab-pane>
				<el-tab-pane label="部门设置">					
					<div class="block">
						<div style="text-align:right;margin-bottom: 10px;">
							<el-button type="success" @click.native="addDepartment">新增部门</el-button>
						</div>
						
						<el-tree
						:style="hover"
							:data="data5"
							node-key="id"
							default-expand-all
							:expand-on-click-node="true">
							<span  class="custom-tree-node" slot-scope="{ node, data }">
								<span><i :class="node.icon"></i>{{ node.label }}</span>
								<span>
									<el-button
										type="text"
										size="mini"
										@click="() => append(data)">
										<i class="el-icon-plus"></i>
										添加子部门
									</el-button>
									<el-button
										type="text"
										size="mini"
										@click="() => remove(node, data)">
										<i class="el-icon-edit"></i>
										修改
									</el-button>
									<el-button
										type="text"
										size="mini"
										@click="() => remove(node, data)">
										<i class="el-icon-sort-up"></i>
										置顶
									</el-button>
									<el-button
										type="text"
										size="mini"
										@click="() => remove(node, data)">
										<i class="el-icon-delete"></i>
										删除
									</el-button>
								</span>
							</span>
						</el-tree>
					</div>	
				</el-tab-pane>				
				</el-tabs>  			
  		</el-row>
			<el-dialog
				title="禁用"
				:visible.sync="employeeDisable.dialogVisible"
				width="30%"
				center>
				<span>确定禁用该账号{{this.employeeDisable.rowInfo.aid}}吗？</span>
				<span slot="footer" class="dialog-footer">
					<el-button type="primary" size="mini" @click="disableEmployeeAccount">确 定</el-button>
				</span>
		  </el-dialog>
    </div>
</template>

<script>
	import ContentHeadTop from '../components/ContentHeadTop'
	let id = 1000;
    export default {
    	components: {
    		ContentHeadTop,
		},
		created() {
			this.searchEmployees();
			this.searchRegion();
		},
		methods: {
      modifyRow(index, row) {
				sessionStorage.setItem("employee_detail", JSON.stringify(row));
				this.$router.push("addEmployee");
			},
			disableRow(index, row) {
        this.employeeDisable.dialogVisible = true;
				this.employeeDisable.rowInfo = row;
				console.log('index=' + index);
			},
			disableEmployeeAccount() {
				this.employeeDisable.dialogVisible = false;
				var rowInfo = this.employeeDisable.rowInfo;
				console.log(rowInfo['aid']);

				this.$http({
						method: 'POST',
						url: '/hugongljb/disable_employee_account',
						data: {
						aid: rowInfo['aid'],
						employee_status: '已停用',
          }
                    
        }).then((response) => {
					  console.log(response);
					  console.log(response.status); 
				});
			},
			append(data) {
        const newChild = { id: id++, label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
			},
			addEmployee() {
				sessionStorage.setItem("employee_detail", null);
				this.$router.push('addEmployee');
			},
			addDepartment() {
				this.$router.push('addDepartment');
			},
		  async searchEmployees() {
				console.log("this.aid:" + this.aid);
				console.log("this.phone:" + this.phone);
				console.log("this.admin_name:" + this.admin_name);
				console.log("this.department:" + this.department);
				this.$http({
					method:'POST',
					url:'/hugongljb/get_operators',
					data:{
						aid:this.aid,
						admin_name:this.admin_name,
						phone:this.phone,
						department:this.department,
					}
				}).then((response) => {
					console.log(response);
					this.employeeList = response.data.data.list;
					// console.log(this.employeeList);
				})
			},

			async searchRegion() {
				this.$http.get("/hugong/get_sub_address")
				.then((response) => {
					console.log("response:");
					console.log(response);
            var list = response.data.data;                 
				})
			},
			handleSearchChange(content) {
				this.aid = content;
				this.admin_name = content;
				this.phone = content;
				console.log('content:' + content);
			},
			handleDepartmentChange() {
				this.department = this.departmentInfo.value;
				console.log('this.department:' + this.department);
			}

    },
    data() {
			const data = [{
				id: 1,
				icon:"el-icon-nurse-directory",
        label: '一级 1',
        children: [{
					id: 4,
					icon:"el-icon-nurse-directory",
          label: '二级 1-1',
          children: [{
						id: 9,
						icon:"el-icon-nurse-directory",
            label: '三级 1-1-1'
          }, {
						id: 10,
						icon:"el-icon-nurse-directory",
            label: '三级 1-1-2'
          }]
        }]
      }, {
				id: 2,
				icon:"el-icon-nurse-directory",
        label: '一级 2',
        children: [{
					id: 5,
					icon:"el-icon-nurse-directory",
          label: '二级 2-1'
        }, {
					id: 6,
					icon:"el-icon-nurse-directory",
          label: '二级 2-2'
        }]
      }, {
				id: 3,
				icon:"el-icon-nurse-directory",
        label: '一级 3',
        children: [{
					id: 7,
					icon:"el-icon-nurse-directory",
          label: '二级 3-1'
        }, {
					id: 8,
					icon:"el-icon-nurse-directory",
          label: '二级 3-2'
        }]
      }];
      return {
				aid:'',
				admin_name:'',
				phone:'',
				department:'',
				employeeList:[],        
				data4: JSON.parse(JSON.stringify(data)),
				data5: JSON.parse(JSON.stringify(data)),
				employeeDisable:{
					rowInfo:'',
					dialogVisible:false,
				},
				departmentInfo:{
					options: [{
					value: '市场部',
					label: '市场部'
					}, {
					value: '公关部',
					label: '公关部',
					}, {
					value: 0,
					label: '所有部门',
					}],
					value: ''
				},
      }
    }
  }
</script>


<style lang="less">
	@import '../style/mixin';

  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
		padding-right: 20px;

	}
	.el-tree{
		border-top: 1px solid rgba(218, 216, 216, 0.808);
	}
	.el-tree-node{
		background: rgb(250, 251, 252);
	}

	.el-table th{
			text-align:center;/** 设置水平方向居中 */
			vertical-align:middle/** 设置垂直方向居中 */
	}
	td{
		text-align:center;
	}

	.el-tree-node__content{
		background: rgb(241, 242, 245);
		border-left: 1px solid rgba(218, 216, 216, 0.808);
		border-bottom: 1px solid rgba(218, 216, 216, 0.808);
		border-right: 1px solid rgba(218, 216, 216, 0.808);
		padding:10px;
	}

	.el-tree-node__content:hover{
		background-color: rgb(197, 242, 253);
	}


</style>

