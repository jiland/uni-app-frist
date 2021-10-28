<!-- 页头组件
入参：title：左侧标题项；subTitle：右侧功能项 -->
<template>
	<view class="header-Bar">
		<view class="header-title">{{title}}</view>
		<view class="header-btn" @click="subHandle">{{subTitle}}</view>
	</view>
</template>

<script>
	export default {
		props: { 
			title: { 
				type: String, 
				default:"标题"
			} ,
			subTitle:{
				type: String,
				default:"更多"
			}
		},
		data(){
			return{
				
			}
		},
		methods:{
			subHandle(){
				console.log('子组件')
				this.$emit("subClick")
			}
		}
	}
</script>

<style scoped>
	.header-Bar{
		display: flex;
		justify-content: space-between;
	}
	.header-title,.header-btn{
		padding: 10rpx;
	}
</style>
