<template>
	<ul class="card-img" >
		<li class="card-img-term" v-for="(item,index) in data" :key="index">
			<view class="card-img-icon" :style="backgroundDiv"></view>
			<view class="card-img-bottom">
				<view>
					{{labelFn(0)}}{{item.a}}
				</view>
				<view v-if="Array.isArray(label) && label.length>3">
					{{labelFn(1)}}{{item.a}}
				</view>
			</view>
			<view class="card-img-bottom">
				<view>
					{{labelFn(2)}} {{item.b}}
				</view>
				<view>
					{{labelFn(3)}}{{item.c}}
				</view>
			</view>
		</li>
	</ul>
</template>

<script>
	export default {
		props: { 
			label: { 
				type: [String,Array]
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
			labelFn(i){
				if(typeof(this.label)=='string' && i==2){
					return `${this.label}:`
				}else if(typeof(this.label)!='string'){
					return `${this.label[i]}:`
				}
			}
		}
	}
</script>

<style scoped>
	ul,li{ padding:0;margin:0;list-style:none}
	.card-img-term{
		position: relative;
		text-align: left;
		padding-left: 80rpx;
		background-color: #ffffff;
		margin: 5rpx;
		/* padding: 5rpx; */
	}
	.card-img-icon{
		position: absolute;
		top: 10rpx;left: 20rpx;
		width: 50rpx;
		height: 50rpx;
		background-size:100% 100%;  
	}
	.card-img-bottom{
		display: flex;
		justify-content: space-between;
	}
</style>
