<!-- 背景图加table卡片组 -->

<template>
	<view class="card-main" >
		<view v-for="(item,index) in data" :key="index" class="card-each" :style="backgroundDiv">
			<table>
				<tr v-for="(subItem,subKey,subIndex) in label" :key="subIndex">
					<td>{{subItem}}</td>
					<td>{{item[subKey]}}</td>
				</tr>
			</table>
		</view>
	</view>
</template>

<script>
	export default {
		props: { 
			label: { 
				type: Object, 
				default:{
					key1:"value1",
					key2:"value2",
				}
			} ,
			data:{
				type: Array,
				default:[]
			},
			imageSrc:{
				
			}
		},
		data(){
			return{
				backgroundDiv: {
					backgroundImage: 'url(' + this.imageSrc + ')'
				}
			}
		},
		methods:{
			// subHandle(){
			// 	console.log('子组件')
			// 	this.$emit("subClick")
			// }
		}
	}
</script>

<style scoped>
	.card-each{
		background-color: #007AFF;
		border-radius: 20rpx;
		color: #FFFFFF;
		/* padding: 10rpx; */
		padding-left: 250rpx;
		/* margin-bottom: 10rpx; */
		background-size: 100% 100%;
		
		width: 715rpx;
		height: 195rpx;
		margin: auto;
		margin-top: 13rpx;
		margin-bottom: 13rpx;
	}
	table{
		padding-top: 7rpx;
	}
	.card-each td{
		/* padding: 2rpx; */
	/* 	text-align: left;
		font-size: 18rpx */
		height: 28rpx;
		line-height: 28rpx;
		text-align: left;
		padding: 3rpx 24rpx 3rpx 0  ;
		
		font-size: 18rpx
	}
</style>
