// router/index.js

import modules from './modules'
import Vue from 'vue'
//这里仅示范npm安装方式的引入，其它方式引入请看最上面【安装】部分
import Router from 'uni-simple-router'

Vue.use(Router)
//初始化
const router = new Router({
    routes: [...modules]//路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	if (!uni.getStorageSync("id")) {
	    if (to.path !== '/pages/login/index') {
			console.log(to,'to')
	        return next({
	           path:'/pages/login/index',
	           NAVTYPE:'push',
			   
			   // url:to.path
	          });
	    }
	    next()
	}else{
		next()
	}
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})
export default router;