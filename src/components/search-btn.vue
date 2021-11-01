<!-- 页头组件
入参：title：左侧标题项；subTitle：右侧功能项 -->
<template>
	<view class="searchPicker" @click="handleClick">
		<span class="searchTime">{{title}}</span>
	</view>
</template>

<script>
	export default {
		props: { 
			title: { 
				type: String, 
				default:"搜索时间日期"
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			handleClick(){
				console.log('子组件')
				this.$emit("click")
			}
		}
	}
</script>

<style scoped>
	.searchPicker{
		background-color: #FFFFFF;
		height: 80rpx;
		text-align: center;
		line-height: 80rpx;
		font-size: 24rpx;
		color: #aeaeae;
		margin-bottom: 20rpx;
	}
	.searchTime{
		position: relative;
		
	}
	.searchTime::after{
		content: '';
		position: absolute;
		top: 0;left: -50rpx;
		width: 50rpx;
		height: 50rpx;
		background-image: url(../static/search.png);
		background-size: 100% 100%;
	}
</style>
