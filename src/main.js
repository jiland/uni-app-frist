import Vue from 'vue'
import App from './App'
import store from 'store'
import uView from "uview-ui";
import router from './router'
import { RouterMount } from 'uni-simple-router'
Vue.use(uView);

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'



const app = new Vue({
  ...App,
  store
})

// #ifdef H5
	RouterMount(app,'#app');
// #endif
app.$mount()
