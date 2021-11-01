<!-- 工作台>更多告警信息 -->

<template>
	<view>
		<u-calendar v-model="showCalendar" mode="date"  @change="handleDate"></u-calendar>
		<SearchBtn @click="showCalendar = true"/>
		
		<CardImg :data="data" :lable="store.lableSecurity" label="报警类型" :imageSrc="store.imgUrl.security"/>
	</view>
</template>

<script>
	import CardImg from "components/card-img.vue"
	import SearchBtn from "components/search-btn.vue"
	export default{
		components:{CardImg,SearchBtn},
		data(){
			return{
				store:{...this.$store.state},
				showCalendar: false,
				data:[
					{
						a:"粤A12345",
						b:"进入违禁区域1",
						c:"2012/10/25 18:18:18"
					},
					{
						a:"粤A12345",
						b:"进入违禁区域2",
						c:"2012/10/25 18:18:18"
					},
					{
						a:"粤A12345",
						b:"进入违禁区域3",
						c:"2012/10/25 18:18:18"
					}
				],
			}
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
