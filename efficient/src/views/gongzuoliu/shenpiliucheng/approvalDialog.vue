<!-- eslint-disable prettier/prettier -->
<template>
	<div>
		<el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
		<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="类型名称" prop="age">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
		</el-form>
		<span slot="footer" class="dialog-footer">
			<el-button>取 消</el-button>
			<el-button type="primary">确 定</el-button>
		</span>
	</el-dialog>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
		data() {
		return {
			ruleForm: {
				name: ''
			},
			dialogVisible:false,
			rules: {}
		}
	},
	methods:{
		init(){
			this.dialogVisible=true
		}
	}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style lang=""></style>
