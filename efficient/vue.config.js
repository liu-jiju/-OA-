const { defineConfig } = require('@vue/cli-service')
let port = 8089
let target = process.env.VUE_APP_MOCK_ENABLE === 'true' ? `http://localhost:8089` : process.env.VUE_APP_CONSOLE_URL
// console.log(target, 'target')
module.exports = defineConfig({
	//第三方依赖是否需要转移,避免出现第三方的转移
	transpileDependencies: true,
	//是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
	lintOnSave: false,
	//代理端口配置
	devServer: {
		// 代理的地址
		port,
		proxy: {
			[process.env.VUE_APP_API]: {
				target,
				changeOrigin: true,
				pathRewrite: {
					['^' + process.env.VUE_APP_API]: ''
				}
			}
		}
	}
})
