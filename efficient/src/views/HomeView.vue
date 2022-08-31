<template>
	<div class="home">
		<fullscreen :fullscreen.sync="fullscreen">
			<el-container>
				<el-aside :width="logoFlag ? '60px' : '200px'">
					<MyMenu :logoFlag="logoFlag"></MyMenu>
				</el-aside>
				<el-container>
					<el-header>
						<MyHeader @isCollapse="isCollapse" @toggle="toggle"></MyHeader>
					</el-header>
					<el-main>
						<Main></Main>
					</el-main>
				</el-container>
			</el-container>
		</fullscreen>
	</div>
</template>

<script>
import MyMenu from '../components/MyMenu.vue'
import MyHeader from '../components/MyHeader.vue'
import Main from '../components/Main.vue'
export default {
	data() {
		return {
			logoFlag: false,
			fullscreen: false
		}
	},
	methods: {
		isCollapse() {
			this.logoFlag = !this.logoFlag
		},
		toggle() {
			this.fullscreen = !this.fullscreen
		}
	},
	components: {
		MyMenu,
		MyHeader,
		Main
	}
}
</script>
<style lang="scss" scoped>
.fullscreen {
	background-color: #fff;
}
.el-header {
	color: #333;
	line-height: 60px;
	border-bottom: 1px solid #101010;
	border-top: 1px solid #101010;
	// border-right: 1px solid #101010;
}
.el-aside {
	color: #fff;
	// text-align: center;
	background-color: rgba(70, 139, 243, 72);
}
.el-main {
height: 90vh;
}
</style>
