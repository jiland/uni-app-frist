<template>
	<view>
		<view class="user">
			<view class="user-icon"></view>
			ADMIN123
		</view>
		<button class="user-option" @click="aboutHandle">关于</button>
		<button class="user-option" @click="passChange">修改密码</button>
		<button class="user-option" @click="logout">退出登录</button>
	</view>
</template>
<script>
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			aboutHandle(){
				
			},
			passChange(){
				uni.navigateTo({
					url:('/pages/password/index')
				})
			},
			logout(){
				uni.removeStorageSync('id');
				uni.navigateTo({
					url:('/pages/login/index')
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.user{
		height: 178rpx;
		line-height: 178rpx;
		position: relative;
		background-color: #FFFFFF;
		text-align: center;
		font-family: '苹方 粗体', '苹方 中等', '苹方';
		font-weight: 700;
		font-style: normal;
		font-size: 34rpx;
		color: #6B6B6B;
		.user-icon{
			width: 139rpx;
			height: 139rpx;
			top: 20rpx;left: 20rpx;
			position: absolute;
			background-image: url(../../static/user.png);
			background-size:  100% 100%;
		}
	}
	.user-option{
		width: 698rpx;
		height: 95rpx;
		line-height: 95rpx;
		margin: 28rpx auto 28rpx;
		background-color: #FFFFFF;
		font-family: '苹方 中等', '苹方';
		font-weight: 400;
		font-style: normal;
		font-size: 26rpx;
		color: #0066CC;
	}
</style>
