<!-- eslint-disable prettier/prettier -->
<template>
	<el-drawer title="审批流程!" :visible.sync="dialogVisible" direction="rtl" size="50%">
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="审批流程" prop="region">
				<el-select v-model="ruleForm.region" class="select">
					<el-option label="区域一" value="shanghai"></el-option>
					<el-option label="区域二" value="beijing"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="状态" prop="resource">
				<el-radio-group v-model="ruleForm.resource">
					<el-radio label="启用"></el-radio>
					<el-radio label="禁用"></el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="活动形式" prop="desc">
				<el-input type="textarea" v-model="ruleForm.desc" class="text"></el-input>
			</el-form-item>
			<el-form-item label="审批流程" prop="desc" class="formBox">
				<el-form-item label="第一级审批" prop="region" class="form">
					<el-select v-model="ruleForm.region">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="第二级审批" prop="region" class="form">
					<el-select v-model="ruleForm.region">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="第三级审批" prop="region" class="form">
					<el-select v-model="ruleForm.region">
						<el-option label="区域一" value="shanghai"></el-option>
						<el-option label="区域二" value="beijing"></el-option>
					</el-select>
				</el-form-item>
				<el-button class="addHierarchy" icon="el-icon-plus">添加审批层级</el-button>
			</el-form-item>
			<div class="demo-drawer__footer">
				<el-button class="yes">立即创建</el-button>
				<el-button class="no">取消</el-button>
			</div>
		</el-form>
	</el-drawer>
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
<style lang="scss" scoped>
.text {
	width: 650px;
}
.form {
	margin-top: 20px;
}
.addHierarchy {
	margin-left: 20px;
	margin-top: 30px;
	background-color: rgba(184, 134, 248, 100);
	color: #fff;
}
.demo-drawer__footer {
	margin-left: 150px;
	margin-top: 100px;
	.yes {
		width: 150px;
		background-color: rgba(184, 134, 248, 100);
		color: #fff;
	}
	.no {
		width: 120px;
	}
}
</style>
