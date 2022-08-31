<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	list-style: none;
	box-sizing: border-box;
}
.login {
	.el-input__inner {
		border-radius: 12px;
		padding-left: 40px;
	}
}
.verificationCode {
	.el-input__inner {
		padding-left: 28px;
		// text-align: center;
	}
}
.reset {
	.el-input__inner {
		padding-left: 10px;
		border-radius: 6px;
		// text-align: center;
	}
}
.dialog-footer {
	.el-button {
		width: 80px;
		height: 30px;
		line-height: 0px;
		border-radius: 4px;
		background-color: rgba(184, 134, 248, 100);
		color: rgba(255, 255, 255, 100);
		font-size: 14px;
		text-align: center;
		font-family: Microsoft Yahei;
		border: 1px solid rgba(187, 187, 187, 100);
	}
	.none {
		background-color: #fff;
		color: #bbbbbb;
	}
}
.cell {
	text-align: center;
}
.el-drawer__header {
	font-size: 20px !important;
}

.el-dialog__body {
	height: 500px !important;
}
</style>
