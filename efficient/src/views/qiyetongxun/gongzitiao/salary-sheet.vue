// 企业通讯-->工资条
<template>
	<div>
		<div class="top">
			<el-form class="top1" ref="form" :model="form" label-width="80px">
				<div>
					<el-form-item label="姓名：">
						<el-input placeholder="请输入姓名" v-model="form.name"></el-input>
					</el-form-item>
				</div>
				<div>
					<el-form-item label="账号：">
						<el-input
							placeholder="请输入账号"
							v-model="form.username"
						></el-input>
					</el-form-item>
				</div>
				<div>
					<el-form-item label="手机号：">
						<el-input placeholder="请输入账号" v-model="form.mobile"></el-input>
					</el-form-item>
				</div>
			</el-form>
			<div class="top2">
				<div class="left">
					<el-button
						icon="el-icon-search"
						style="background: white; color: black"
						>查询</el-button
					>
					<el-button
						icon="el-icon-refresh-right"
						style="background: white; color: black"
						>重置</el-button
					>
					<el-button style="background: #a4adb3; color: white"
						>下载工资条模板</el-button
					>
					<el-button style="background: white; color: black">上传</el-button>
				</div>
				<el-button
					icon="el-icon-circle-plus-outline"
					type="primary"
					style="color: white"
					@click="flag=true"
					>新增工资条</el-button
				>
			</div>
			<!-- 新增模态框 -->
			<xinzen :dialogFormVisible='flag' @close="flag=false"/>

			<!-- 表格 -->
			<el-table :data="tableData.slice((pagenum-1)*pagesize,pagenum*pagesize)" stripe style="width: 100%">
				<el-table-column prop="id" label="id"> </el-table-column>
				<el-table-column prop="name" label="姓名">
				</el-table-column>
				<el-table-column prop="name" label="出勤">
				</el-table-column>
				<el-table-column prop="name" label="旷工">
				</el-table-column>
				<el-table-column prop="name" label="请假">
				</el-table-column>
				<el-table-column prop="name" label="基本工资">
				</el-table-column>
				<el-table-column prop="name" label="岗位工资">
				</el-table-column>
				<el-table-column label="操作"  width="180">
					<template slot-scope="scope">
        <el-button
				icon="el-icon-edit" size="mini" style="background: #7aabf6; color: white"
          @click="handleEdit(scope.$index, scope.row)">修改</el-button>
        <el-button
				icon="el-icon-delete" size="mini" style="background: red; color: white"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>

				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<el-pagination
			style="float: right;"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-sizes="[1, 2, 3, 6]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>

		<!-- 修改模态框 -->
		<xiugai :dialogFormVisible1='flag1'   ref="xiugai" @close1="flag1=false"/>
		</div>
	</div>
</template>

<script>
import xinzen from './xinzen.vue'
import xiugai from './xiugai.vue'
export default {
	components:{
		xinzen,xiugai
	},
	data() {
		return {
			flag1: false,
			flag:false,
			form: {
				name: '',
				username: '',
				mobile: ''
			},
			tableData: [
				{
					id: 1,
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				},
				{
					id: 2,
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1517 弄'
				},
				{
					id: 3,
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1519 弄'
				},
				{
					id: 4,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				},
				{
					id: 5,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				},
				{
					id: 6,
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}
			],
			pagenum:1,
			pagesize:3,

		}
	},

	mounted() {},

	methods: {
		handleSizeChange(val) {
			console.log(`每页 ${val} 条`);
			this.pagesize=val
		},
		handleCurrentChange(val) {
			console.log(`当前页: ${val}`);
			this.pagenum=val
		},
		handleEdit(index, row) {
        console.log(index, row);
				this.$nextTick(()=>{
					this.$refs.xiugai.init(row)
				})
				this.flag1=true
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
	}
}
</script>

<style lang="scss" scoped>
.el-input {
	width: 400px;
}
.top1 {
	display: flex;
	justify-content: space-around;
}
.top2 {
	display: flex;
	justify-content: space-between;
}
</style>
