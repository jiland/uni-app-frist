// router/modules/home.js
const pages = [
	{
		"path": "/pages/work/index", //工作台
		"style":{
			"navigationStyle":"custom"
		}
	},
	{
		"path": "/pages/vehicle/index", //车辆位置
		"style": {}
	},
	{
		"path": "/pages/home/index",   //我的
		"style": {
			"navigationBarTitleText": "我的"
		}
	},
	{
		"path": "/pages/patrol/index",
		"name": "patrol",
		"style": {
			"navigationBarTitleText": "巡逻任务"
		}
	},
	{
		"path": "/pages/security/index",
		"style": {
			"navigationBarTitleText": "安全事件管理"
		}
	},
	{
		"path": "/pages/password/index",
		"style": {
			"navigationBarTitleText": "修改密码"
		}
	},
	{
		"path": "/pages/login/index",
		"style":{
			"navigationStyle":"custom"
		}
	}
]
export default pages