# uni014

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

项目创建方式参考uni-app官网
[uni-app](https://uniapp.dcloud.io/)

1.可视化界面
2.vue-cli命令行

第二种=>vue create -p dcloudio/uni-preset-vue my-project

uview的使用参考[uview](https://www.uviewui.com/)

npm方式安装=>
npm install uview-ui
<!-- 依赖sass -->
npm i node-sass -D
npm i sass-loader -D
注：node & node-sass &sass-loader有版本依赖
例：
node@14.3.0
node-sass@4.14.1
sass-loader@7.3.1

node@16.11.1
node-sass@6.0.1
sass-loader@10.2.0

uView配置
// main.js
import uView from "uview-ui";
Vue.use(uView);
/* uni.scss */
@import 'uview-ui/theme.scss';
<!-- APP.vue -->
<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
</style>
// pages.json
{
	"easycom": {
		"^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
	},
	
	// 此为本身已有的内容
	"pages": [
		// ......
	]
}