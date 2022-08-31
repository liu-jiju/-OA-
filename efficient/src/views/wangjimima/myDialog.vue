<!-- eslint-disable prettier/prettier -->
<template>
	<el-dialog title="忘记密码" :visible.sync="dialogVisible" width="28%">
		<el-form :model="form" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<div class="reset">
				<div class="resetUser">
					<span>用户名:</span>
					<el-input v-model="form.resetUser"></el-input>
				</div>
				<div class="newPass">
					<span>新密码:</span>
					<el-input v-model="form.newPass"></el-input>
				</div>
				<div class="again">
					<span>再次输入:</span>
					<el-input v-model="form.againPass"></el-input>
				</div>
			</div>
		</el-form>
		<div slot="footer" class="dialog-footer">
			<el-button @click="sure" class="sure">确定</el-button>
			<el-button @click="cancel" class="none">取消</el-button>
		</div>
	</el-dialog>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
	props: ['dialogVisible'],
	data() {
		return {
			form: {
				resetUser: '',
				newPass: '',
				alginPass: ''
			},
			rules: {}
		}
	},
	created() {},
	methods: {
		cancel() {
			this.$emit('cancel')
		},
		sure() {
			this.$emit('sure')
		}
	}
}
</script>
<!-- eslint-disable prettier/prettier -->

<style lang="scss" scoped>
.reset {
	padding-left: 30px;
	.el-input {
		width: 300px;
	}
	span {
		margin-left: 30px;
		display: inline-block;
		width: 70px;
		margin-bottom: 30px;
	}
	.el-button {
		width: 80px;
	}
}
</style>
