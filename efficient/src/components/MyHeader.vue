<!-- eslint-disable prettier/prettier -->
<template>
	<div class="my-header">
		<div class="left">
			<i class="el-icon-s-fold" @click="isCollapse"></i>
		</div>
		<div class="header-right">
			<div class="header-icon">
				<span class="one">1</span>
				<i class="el-icon-s-flag"></i>
			</div>
			<div class="header-icon">
				<span class="two">1</span>
				<i class="el-icon-message-solid"></i>
			</div>
			<div class="header-icon">
				<span class="three">1</span>
				<i class="el-icon-message"></i>
			</div>
			<i class="el-icon-full-screen" @click="toggle"></i>
			<div class="superAdmin"><i class="el-icon-user-solid"></i>超级管理员</div>
		</div>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
	data() {
		return {}
	},
	methods: {
		isCollapse() {
			this.$emit('isCollapse')
		},
		toggle() {
			this.$emit('toggle')
		}
	}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
i:hover {
	cursor: pointer;
}
.my-header {
	// width: 1120px;
	height: 60px;
	display: flex;
	padding-right: 30px;
	justify-content: space-between;
	.left {
		i {
			font-size: 30px;
			color: #9a9a9a;
		}
	}
	.header-right {
		height: 60px;
		display: flex;
		align-items: center;
		.header-icon {
			position: relative;
			span {
				position: absolute;
				top: 0;
				right: 0;
				padding: 2px 5px;
				border-radius: 5px;
				text-align: center;
				line-height: 15px;
				color: #fff;
			}
			.one {
				background-color: #f77d6c;
			}
			.two {
				background-color: #f4c438;
			}
			.three {
				background-color: #c2c2fb;
			}
		}
		color: #cecece;
		display: flex;
		.item {
			margin: 0 10px;
		}
		.superAdmin {
			display: inline-block;
			font-size: 14px;
		}
		i {
			font-size: 23px;
			margin: 0 10px;
		}
	}
}
</style>
