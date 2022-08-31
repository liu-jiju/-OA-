<template>
	<div class="login">
		<div class="box">
			<p class="title">OV系统登录</p>
			<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item prop="userName">
					<el-input v-model="ruleForm.userName" autocomplete="off" placeholder="请输入用户名">
						<i slot="prefix" class="el-input__icon el-icon-user-solid"></i
					></el-input>
				</el-form-item>
				<el-form-item prop="passWord">
					<el-input
						type="password"
						v-model="ruleForm.passWord"
						autocomplete="off"
						class="iptTwo"
						placeholder="请输入密码"
					>
						<i slot="prefix" class="el-input__icon el-icon-lock"></i
					></el-input>
				</el-form-item>
				<p class="passNone" @click="Forgot">忘记密码?</p>
				<div class="verificationCode">
					<el-input
						type="password"
						v-model="ruleForm.pass"
						autocomplete="off"
						class="verification"
						placeholder="验证码"
					></el-input>
					<el-input
						type="password"
						v-model="ruleForm.pass"
						autocomplete="off"
						class="getVerification"
						placeholder="验证码图片"
					></el-input>
				</div>
				<el-form-item>
					<el-button @click="submitForm" class="but">登录</el-button>
				</el-form-item>
			</el-form>
			<myDialog :dialogVisible="dialogVisible" @cancel="cancel" @sure="sure"></myDialog>
		</div>
	</div>
</template>
<script>
import myDialog from '../wangjimima/myDialog.vue'
// import { setToken } from '../../untils/auth.js'
import axios from 'axios'
export default {
	data() {
		var userName = (rule, value, callback) => {
			let user = /^[a-zA-Z]\w{5,17}$/
			if (!value) {
				return callback(new Error('账号不能为空'))
			} else {
				if (!user.test(value)) {
					return callback(new Error('账号只能以字母开头，并且要6-18位'))
				}
				callback()
			}
		}
		var passWord = (rule, value, callback) => {
			let user = /^[a-zA-Z]\w{5,17}$/
			if (!value) {
				return callback(new Error('密码不能为空'))
			} else {
				if (!user.test(value)) {
					return callback(new Error('密码只能以字母开头，并且要6-18位'))
				}
				callback()
			}
		}
		return {
			ruleForm: {
				userName: '',
				passWord: ''
			},
			dialogVisible: false,
			input: '',
			rules: {
				userName: [{ validator: userName, trigger: 'blur' }],
				passWord: [{ validator: passWord, trigger: 'blur' }]
			}
		}
	},
	components: {
		myDialog
	},
	methods: {
		Forgot() {
			this.dialogVisible = true
		},
		cancel() {
			this.dialogVisible = false
		},
		sure() {
			this.dialogVisible = false
		},
		submitForm() {
			this.$router.push('/')
		}
	},
	created() {}
}
</script>
<style lang="scss" scoped>
.login {
	width: 100%;
	height: 1000px;
	background-image: url('../../../public/imgae/login.png');
	padding-top: 105px;
}
.box {
	width: 500px;
	margin: 0 auto;
	height: 470px;
	// background-color: red;
	border-radius: 20px;
	padding-top: 30px;
	background-color: #fff;
	.title {
		text-align: center;
		font-size: 28px;
		font-family: 方正兰亭黑-标准;
		margin-bottom: 41px;
	}
	.passNone {
		margin-left: 376px;
		margin-top: -18px;
		color: #f4c438;
	}
	.iptTwo {
		margin-top: 10px;
		// border-radius: 50px;
	}
	.el-input--prefix {
		width: 390px;
		margin-left: -40px;
		// border-radius: 16px;
	}
	.but {
		width: 332px;
		height: 52px;
		line-height: 29px;
		border-radius: 10px;
		background-color: rgba(184, 134, 248, 53);
		color: rgba(16, 16, 16, 100);
		font-size: 20px;
		text-align: center;
		font-family: Roboto;
		border: 1px solid rgba(187, 187, 187, 100);
		margin-left: -14px;
		margin-top: 40px;
	}
	.verification {
		margin-left: 10px;
		width: 248px;
		height: 46px;
		line-height: 20px;
		border-radius: 16px;
		background-color: rgba(255, 255, 255, 100);
		color: rgba(206, 206, 206, 100);
		font-size: 14px;
		text-align: center;
		font-family: Roboto;
	}
	.getVerification {
		margin-left: 20px;
		width: 119px;
		height: 46px;
		line-height: 20px;
		border-radius: 16px;
		background-color: rgba(255, 255, 255, 100);
		color: rgba(16, 16, 16, 100);
		font-size: 14px;
		text-align: center;
		font-family: Roboto;
	}
	.verificationCode {
		padding-top: 20px;
		width: 80%;
		margin: 0 auto;
	}
	i {
		margin-left: 10px;
	}
}
</style>
