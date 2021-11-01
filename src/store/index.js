import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
		lablepatrol:{
			a:"巡逻名称",
			b:"车牌号",
			c:"路线",
			d:"开始时间",
			e:"结束时间"
		},
		lableSecurity:"报警类型",
		imgUrl:{
			patrol:"static/u74.png",
			security:"static/u94.png"
		}
    },
    mutations: {
    },
    actions: {

    },
    getters:{
		lablepatrol(state,getters){
			return state.lablepatrol
		},
		lableSecurity(state,getters){
			return state.lableSecurity
		}
    }
})
export default store
