<template>
    <div class="router-content">
     	<content-head-top class="router-content-header"></content-head-top>
        <el-row class="router-content-body">

            <el-row style="padding:10px;display:flex;flex-direction: row-reverse;">
                <el-button  @click.native="exportNurse">导出</el-button>
                <div style="flex:1;display:flex;">
                    <el-input 
					size="medium" 
					style="width: 300px;font-size:12px;" 
					placeholder="请输入护士姓名/护士编号/手机号" 
					@change="handleSearchChange"
					class="input-with-select">    
                        <el-button slot="append" icon="el-icon-search" @click.native="searchNurses"></el-button>
                    </el-input>

                    <el-select
                        v-model="siteInfo.value"
                        @change="handleHospitalChange"
                        size="medium"
                        style="margin-left: 20px; width:150px;"
                        placeholder="所在医院">
                        <el-option
                            v-for="item in siteInfo.options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-row>
				
			<div style="margin: 10px;">
				<el-table
					:data="nurseList"
					border
					max-height="400">
					<el-table-column
					fixed
					prop="nid"
					label="护士号"
					width="150">
					</el-table-column>
					<el-table-column
					prop="name"
					label="护士姓名"
					width="120">
					</el-table-column>
					<el-table-column
					prop="site_name"
					label="所在医院"
					width="120">
					</el-table-column>
                    <el-table-column
					prop="department"
					label="所在部门"
					width="120">
					</el-table-column>
					<el-table-column
					:formatter="formatterJob"
					prop="job"
					label="职位"
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
					prop="update_time"
					label="修改时间"
					width="120">
					</el-table-column>
					<el-table-column
					:formatter="formatterValid"
					prop="is_valid"
					label="是否有效"
					width="120">
					</el-table-column>
					<el-table-column
					fixed="right"
					label="操作"
					width="180">
					<template slot-scope="scope">
						<!-- <el-button @click.native.prevent="statusRow(scope.$index, scope.row)" type="text" size="small">状态</el-button> -->
						<el-button @click.native.prevent="verifyRow(scope.$index, scope.row)" type="text" size="small">审核</el-button>
						<!-- <el-button @click.native.prevent="deleteRow(scope.$index, scope.row)" type="text" size="small">删除</el-button> -->
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
			this.searchNurses();
		},
		methods: {
			formatterJob(row, column) {
				var job;
				switch(row.job) {
					case '1':
						job = '护士';
						break;	
					case '2':
						job = '护士长';
						break;						
				}
				return job;			
			},
			formatterValid(row, column) {
				var valid;
				switch(row.is_valid) {
					case '0':
						valid = '无效';
						break;	
					case '1':
						valid = '有效';
						break;						
				}
				return valid;			
			},
            exportNurse() {
                //todo export nurse info
            },
      		// statusRow(index, rows) {
			// 	// rows.splice(index, 1);
			// },
			verifyRow(index, row) {
                sessionStorage.setItem('nurse_detail',JSON.stringify(row));
				this.$router.push('verifyNurse');
			},
			// deleteRow(index, rows) {
			// 	rows.splice(index, 1);
			// },
			cancel() {
				this.goBack();
			},
			async searchNurses() {				
				this.$http({
					method:'POST',
					url:'/hugongljb/get_nurses',
					data:{
						nid:this.nid,
						name:this.name,
						phone:this.phone,
					}
				}).then((response) => {
					this.nurseList = response.data.data.list;
				})
			},
			handleSearchChange(content) {
				this.nid = content;
				this.name = content;
				this.phone = content;
			},
			handleHospitalChange() {
				// this.site_name = 
			}
    },
    data() {
      return {
		nid:'',
        name:'',
        phone:'',
        site_name:'',  
		nurseList:[],
		siteInfo:{
			options:[],
			value:'',
		}
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
