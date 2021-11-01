<template>
	<view class="loginPage">
		<view class="title">
			<view >XX市</view>
			<view >XXXX车辆智能监控系统</view>	
		</view>
		
		
		<view class="label">账号</view>
		<u-input v-model="account" type="text"  placeholder="请输入账号" :custom-style='inputStyle' height="97"/>
		<view class="label">密码</view>
		<u-input v-model="password" type="password"  placeholder="请输入密码" :custom-style='inputStyle' height="97" clearable :password-icon="false"/>
		
		<u-button type="primary" class="btn" @click="login">登录</u-button>
	</view>
	
</template>

<script>
	export default {
		data(){
			return{
				account:'',
				password:'',
				inputStyle:{
					backgroundColor:'rgba(255,255,255,0.2)',
					borderRadius:"10rpx",
					
					paddingLeft: "28rpx"
				}
			}
		},
		created(){
			let id = uni.getStorageSync('id')
			if(id){
				this.account = id
			}
		},
		methods:{
			login(){
				console.log("login")
				
				if(this.account && this.password){
					uni.setStorageSync('id', this.account);
					uni.switchTab({
						url:"/pages/work/index"
					})
				}
				
				
				
			}
		}
	}
</script>

<style scoped>
	page{
		width: 100%;
		height: 100%;
	}
	
	.loginPage{
		background-image: url(../../static/login.png);
		background-size: 100% 100%;
		width: 100%;
		height: 100%;
		padding-left: 48rpx;
		padding-right: 48rpx;
	}
	.title{
		padding-top: 220rpx;
		padding-bottom: 220rpx;
		font-family: '微软雅黑 Bold', '微软雅黑';
		font-weight: 700;
		font-style: normal;
		font-size: 50rpx;
		color: #FFFFFF;
	}
	.label{
		font-size: 24rpx;
		color: #cfd9ee;
		padding-bottom: 12rpx;
	}
	.btn{
		margin-top: 105rpx;
		height: 86rpx;
	}
</style>
