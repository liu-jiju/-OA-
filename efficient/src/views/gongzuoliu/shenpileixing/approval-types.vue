<!-- eslint-disable prettier/prettier -->
<template>
	<div class="approval">
		<div class="top">
			<el-button class="addApproval" icon="el-icon-plus" @click="addApprovalProcess">添加审批流程</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="name" label="id" width="200px"> </el-table-column>
			<el-table-column prop="name" label="流程名称" width="300px"> </el-table-column>
			<el-table-column prop="name" label="流程状态" width="300px">
				<template slot-scope="scope">
					<el-tag type="closable" v-if="scope.row.status === 0">启用</el-tag>
					<el-tag type="danger" v-else>禁用</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="最后修改人" width="600px"> </el-table-column>
			<el-table-column label="操作" header-align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
					<el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<page class="page"></page>
		<right v-if="dialogVisible" ref="app"></right>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import page from '../../../components/page.vue'
import right from './right.vue'
export default {
	components: { page ,right},
	data() {
		return {
			tableData: [
				{
					name: 123,
					status: 0
				},
				{
					status: 1,
					name: 123
				},
				{
					status: 1,
					name: 123
				},
				{
					status: 1,
					name: 123
				},
				{
					status: 0,
					name: 123
				}
			],
			dialogVisible: false,
			
		}
	},
	methods: {
		addApprovalProcess() {
			this.dialogVisible=true
			this.$nextTick(()=>{
				this.$refs.app.init()
			})
		}

	}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
.addApproval {
	width: 200px;
	margin-top: 20px;
	background-color: rgba(184, 134, 248, 100);
	color: #fff;
}
.el-table {
	margin-top: 30px;
}
.el-form-item {
	.select {
		width: 600px;
	}
}
.page {
	margin-top: 20px;
	float: right;
	margin-right: 30px;
}
</style>
