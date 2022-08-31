<!-- eslint-disable prettier/prettier -->
<template>
	<div class="approval">
		<div class="top">
			<el-button class="addApproval" icon="el-icon-plus" @click="addApproval">添加类型</el-button>
		</div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column prop="name" label="id" width="200px"> </el-table-column>
			<el-table-column prop="name" label="类型名称" width="300px"> </el-table-column>
			<el-table-column prop="name" label="最后修改人" width="300px"> </el-table-column>
			<el-table-column prop="name" label="最后修改时间" width="600px"> </el-table-column>
			<el-table-column label="操作" header-align="center">
				<template slot-scope="scope">
					<el-button size="mini" type="primary" icon="el-icon-edit">编辑</el-button>
					<el-button size="mini" type="danger" icon="el-icon-delete">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<page class="page"></page>
		<approvalDialog ref="approval" v-if="dialogVisible"></approvalDialog>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import page from '../../../components/page.vue'
import approvalDialog from './approvalDialog.vue'
export default {
	components: { page ,approvalDialog},
	data() {
		return {
			tableData: [
				{
					name: 123
				},
				{
					name: 123
				},
				{
					name: 123
				},
				{
					name: 123
				},
				{
					name: 123
				}
			],
			dialogVisible: false,
		}
	},
	methods: {
		addApproval() {
			this.dialogVisible=true
			this.$nextTick(()=>{
				this.$refs.approval.init()
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
	height: 400px;
	.el-input {
		width: 400px;
	}
}
.page {
	margin-top: 20px;
	float: right;
	margin-right: 30px;
}
</style>
