<!-- 工作台>更多巡逻任务 -->
<template>
	<view>
		<u-calendar v-model="showCalendar" mode="date"  @change="handleDate"></u-calendar>
		<SearchBtn @click="showCalendar = true"/>
		<CardTable :data="data" :label="store.lablepatrol"  :imageSrc="store.imgUrl.patrol"/>
	</view>
</template>

<script>
	import CardTable from "components/card-table.vue"
	import SearchBtn from "components/search-btn.vue"
	export default{
		components:{CardTable,SearchBtn},
		data(){
			return{
				store:{...this.$store.state},
				showCalendar: false,
				data:[
					{
						a:"巡逻路线00101",
						b:"粤A12345",
						c:"路线001",
						d:"2012/10/25 18:18:18",
						e:"2021/05/25 19:19:19"
					},
					{
						a:"巡逻路线00102",
						b:"粤A12345",
						c:"路线001",
						d:"2012/10/25 18:18:18",
						e:"2021/05/25 19:19:19"
					},
					{
						a:"巡逻路线00103",
						b:"粤A12345",
						c:"路线001",
						d:"2012/10/25 18:18:18",
						e:"2021/05/25 19:19:19"
					}
				]
			}
		},
		onLoad(){
			console.log(this.$Route,'r')
		},
		methods:{
			handleDate(e){
				console.log(e,'e')
				// 请求数据
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>
