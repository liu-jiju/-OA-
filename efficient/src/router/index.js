import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		redirect: 'home',
		children: [
			/**首页 */
			{
				path: '/home',
				name: 'home',
				component: () => import('../views/shouye/IndexView.vue')
			},
			/**用户管理 */
			{
				path: '/user',
				name: 'user',
				component: () => import('../views/yonghu/user.vue')
			},
			/**角色管理 */
			{
				path: '/role',
				name: 'role',
				component: () => import('../views/juese/role.vue')
			},
			/**菜单管理 */
			{
				path: '/menus',
				name: 'menus',
				component: () => import('../views/caidan/menus.vue')
			},
			/**职级管理 */
			{
				path: '/rank',
				name: 'rank',
				component: () => import('../views/zhiji/rank.vue')
			},
			/**岗位管理 */
			{
				path: '/job',
				name: 'job',
				component: () => import('../views/gangwei/job.vue')
			},
			/**操作日志 */
			{
				path: '/oper',
				name: 'oper',
				component: () => import('../views/caozuo/oper.vue')
			},
			/**登录日志 */
			{
				path: '/login-oper',
				name: 'login-oper',
				component: () => import('../views/denglurizi/login-oper.vue')
			},
			/**部门管理 */
			{
				path: '/divisional',
				name: 'divisional',
				component: () => import('../views/guanli/divisional.vue')
			},
			/**配置审批流程 */
			{
				path: '/approval',
				name: 'approval',
				component: () => import('../views/gongzuoliu/shenpiliucheng/Approval.vue')
			},
			/**配置审批类型 */
			{
				path: '/approval-types',
				name: 'approval-types',
				component: () => import('../views/gongzuoliu/shenpileixing/approval-types.vue')
			},
			/**材料管理 */
			{
				path: '/material-ment',
				name: 'material-ment',
				component: () => import('../views/cailiao/Material.vue')
			},
			/**企业通信 */
			{
				path: '/firm-comm',
				name: 'firm-comm',
				component: () => import('../views/qiyetongxun/qiyetongxin/firm-comm.vue')
			},
			/**工资条录入 */

			{
				path: '/salary-sheet',
				name: 'salary-sheet',
				component: () => import('../views/qiyetongxun/gongzitiao/salary-sheet.vue')
			},
			/**待办事项 */
			{
				path: '/backlog',
				name: 'backlog',
				component: () => import('../views/OAshenpi/daiban/agency.vue')
			},
			/**已办事项 */
			{
				path: '/finished',
				name: 'finished',
				component: () => import('../views/OAshenpi/yiban/finished.vue')
			},
			/**我发起的 */
			{
				path: '/started',
				name: 'started',
				component: () => import('../views/OAshenpi/wofaqi/started.vue')
			}
		]
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/denglu/LoginView.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
