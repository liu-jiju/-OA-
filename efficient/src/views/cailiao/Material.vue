<!-- eslint-disable prettier/prettier -->
<template>
	<div class="role">
		<div class="top">
			<div class="search">材料姓名：<el-input v-model="user" placeholder="请输入材料名称"></el-input></div>
			<div class="but">
				<div class="left">
					<el-button icon="el-icon-edit">搜索</el-button>
					<el-button icon="el-icon-refresh-right">重置</el-button>
				</div>
				<div class="right">
					<el-button icon="el-icon-circle-plus-outline" class="addUser" @click="addMaterial">新增材料</el-button>
				</div>
			</div>
		</div>
		<template>
			<el-table :data="tableData" style="width: 100%" border stripe>
				<el-table-column header-align="center" prop="name" label="id" width="200px"> </el-table-column>
				<el-table-column header-align="center" prop="name" label="材料名称" width="300px"> </el-table-column>
				<el-table-column header-align="center" prop="name" label="材料地址"></el-table-column>
				<el-table-column label="操作" header-align="center">
					<template slot-scope="scope">
						<el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="download">下载</el-button>
						<el-button size="mini" @click="handleDelete(scope.$index, scope.row)" class="del">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="mater">
				<addMaterial v-if="dialogVisible" ref="mater"></addMaterial>
			</div>
		</template>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
import addMaterial from './addMaterial.vue'
export default {
	data() {
		return {
			edit: true,
			user: '',
			dialogVisible: false,
			tableData: [
				{
					name: 1
				},
				{
					name: 2
				}
			],
		}
	},
	components:{
		addMaterial
	},
	methods: {
		handleEdit() {},
		handleDelete() {},
		addMaterial() {
			this.dialogVisible = true
			this.$nextTick(()=>{
				this.$refs.mater.init()
			})
		}
	}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
.metaAddress {
	display: flex;
	align-items: center;
	margin-left: 40px;
	margin-top: 20px;
	.el-button {
		margin-left: 20px;
		background-color: #ccc;
	}
}
.metaName {
	margin-left: 40px;
}
.add {
	width: 350px;
	margin-left: 20px;
}
.top {
	display: flex;
	align-items: center;
}
.search {
	display: flex;
	align-items: center;
	// margin-top: 10px;
	// justify-content: space-around;
	.el-input {
		width: 450px;
		margin-right: 42px;
	}
}
.but {
	display: flex;
	padding-right: 40px;
	margin-top: 20px;
	margin-bottom: 20px;
	.addUser {
		background-color: #c2c2fb;
		color: #fff;
		margin-left: 10px;
	}
}
.download {
	width: 100px;
}
.del {
	width: 100px;
}
</style>
