<!-- eslint-disable prettier/prettier -->
<template>
	<div class="my-menu">
		<div class="top">
			<div class="logo"><img src="../../public/imgae/logo.jpg" alt="" /></div>
			<p v-if="!logoFlag">OA管理系统</p>
		</div>
		<el-menu
			collapse-transition
			text-color="#fff"
			class="el-menu-vertical-demo"
			@open="handleOpen"
			@close="handleClose"
			:collapse="logoFlag"
			background-color="rgba(70, 139, 243, 72)"
			active-text-color="#fff"
			router
			unique-opened
		>
		<el-menu-item v-for="item in jequlist" :key="item.id" :index="item.path" :class="{ active: curIndex == '/index' }">
						<i :class="item.icon"></i>
						<span slot="title">{{ item.name }}</span>
					</el-menu-item>
					<el-submenu v-for="item in dataList" :key="item.id" :index="item.path">
						<template slot="title">
							<i :class="item.icon"></i>
							<span>{{ item.name }}</span>
						</template>
						<el-menu-item-group v-for="item1 in item.children" :key="item1.id">
							<el-menu-item :index="item1.path"  @click="rout(item1.path)">{{ item1.name }}</el-menu-item>
						</el-menu-item-group>
					</el-submenu>
				</el-menu>
	</div>
</template>
<!-- eslint-disable prettier/prettier -->
<script>
export default {
	props: ['logoFlag'],
	data() {
		return {
			/**侧边栏数据 */
			sidebar: [],
			/**截取的首页 */
			jequlist: [],
			/**截取剩下的所有的数据 */
			dataList: [],
			curIndex: '/index',
		}
	},
	methods: {
		handleClose() {
		},
		handleOpen() {
		},
		rout(a){
			this.curIndex=a
		}
	},
	created(){
		this.$axios.get('/efficient/user/menubars').then((res) => {
			this.sidebar = res.data.data.data
			this.jequlist = this.sidebar.slice(0, 1)
			this.dataList = this.sidebar.slice(1)
		})
	}
}
</script>
<!-- eslint-disable prettier/prettier -->
<style lang="scss" scoped>
	.el-menu {
  border-right: 0;
  .active {
    background-color: #f4c438 !important;
  }
  .el-menu-item.is-active {
    background-color: #f4c438 !important;
  }
  i {
    color: white !important;
  }
}
.top {
	display: flex;
	align-items: center;
	color: rgba(255, 255, 255, 100);
	font-size: 17px;
	text-align: left;
	font-family: SourceHanSansSC-regular;
	.logo {
		margin-left: 10px;
		margin-right: 4px;
		width: 36px;
		height: 36px;
		img {
			width: 100%;
			height: 100%;
		}
	}
}

.el-menu {
	width: 200px;
	height: 100vh;
	line-height: 20px;
	background-color: rgba(70, 139, 243, 72);
	// text-align: center;
	// border: 1px solid rgba(187, 187, 187, 100);
	i{
		margin-right: 10px;
	}
}
</style>
