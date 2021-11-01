<template>
	<view class="content">
		<view>
		  	<view class="topBar">
				<view class="topBar-position">
					<view class="topBar-position-city">广州</view>
					<view class="topBar-position-weather">多云29°</view>
				</view>
				<view class="topBar-title">xx智能监控系统</view>
			</view>
			<!-- 巡逻任务 -->
			<CardHeader title="巡逻任务" @subClick="patrolMore"></CardHeader>
			<!-- 巡逻任务卡片 -->
			<CardTable :label="store.lablepatrol" :data="data1" :imageSrc="store.imgUrl.patrol"/>
			<!-- 巡逻任务 -->
			<CardHeader title="安全事件" @subClick="securityMore"/>
			<CardImg :data="data2" :lable="store.lableSecurity" label="报警类型" :imageSrc="store.imgUrl.security"/>
		<!-- 	<ul class="securityCard" >
				<li class="securityCard-term" v-for="(item,index) in data2" :key="index">
					<icon class="securityIcon" type="warn" size="26"/>
					<view>
						{{item.a}}
					</view>
					<view class="securityCard-alarm">
						<view>
						报警类型：{{item.b}}
						</view>
						<view>
							{{item.c}}
						</view>
					</view>
				</li>
			</ul> -->
		</view>
	</view>
</template>

<script>
	import CardHeader from "components/card-header.vue";
	import CardTable from "components/card-table.vue";
	import CardImg from "components/card-img.vue"
	export default {
		components:{CardHeader,CardTable,CardImg},
		data() {
			return {
				// Lablepatrol:{
				// 	a:"巡逻名称",
				// 	b:"车牌号",
				// 	c:"路线",
				// 	d:"开始时间",
				// 	e:"结束时间"
				// },
				store:{...this.$store.state},
				patrol:{
					
				},
				title: 'Hello',
				data2:[
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
				data1:[
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
		onLoad() {

		},
		methods: {
			patrolMore(){
				console.log("更多巡逻任务",this.$store.state.lablepatrol)
				uni.navigateTo({
					url:"/pages/patrol/index"
				})
			},
			securityMore(){
				console.log("更多安全事件")
				uni.navigateTo({
					url:"/pages/security/index"
				})
			},
		}
	}
</script>

<style lang="scss">
	.content {
		text-align: center;
		height: 400upx;
		/* margin-top: 200upx; */
		margin-bottom: 200rpx;
		.topBar{
			height: 100rpx;
			position: relative;
			background-color: #0066cc;
			color: #FFFFFF;
			.topBar-position{
				position: absolute;
				top: 0;bottom: 0;left: 10rpx;
				text-align: left;
				view{
					height: 50rpx;
					line-height: 50rpx;
				}
				.topBar-position-weather{
					color: #d7d7d7;
				}
			}
			.topBar-title{
				line-height: 100rpx;
			}
		}
		.patrolBar{
			display: flex;
			justify-content: space-between;
			view{
				padding: 10rpx;
			}
		}
		.patrolCard{
			background-color: #007AFF;
			border-radius: 20rpx;
			color: #FFFFFF;
			padding: 10rpx;
			padding-left: 200rpx;
			margin-bottom: 10rpx;
			td{
				padding: 10rpx;
				text-align: left;
			}
		}
		.securityBar{
			display: flex;
			justify-content: space-between;
			view{
				padding: 10rpx;
			}
		}
		.securityCard{
			.securityCard-term{
				position: relative;
				text-align: left;
				padding-left: 100rpx;
				.securityIcon{
					position: absolute;
					top: 0;left: 0;
				}
				.securityCard-alarm{
					display: flex;
					justify-content: space-between;
				}
			}
			
		}
	}
	
</style>
