<!-- 背景图加table卡片组 -->

<template>
	<view class="card-main" >
		<view v-for="(item,index) in data" :key="index" class="card-each">
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
			}
		},
		data(){
			return{
				
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
		padding: 10rpx;
		padding-left: 200rpx;
		margin-bottom: 10rpx;
	}
	.card-each td{
		padding: 10rpx;
		text-align: left;
	}
</style>
