<!-- 我的 > 修改密码 -->
<template>
	<view >		
		<u-form :model="form" ref="uForm" class="passForm">
				<u-form-item label="旧密码" label-width="210" :label-style="{color:'#a1a1a1'}" :required="true" prop="old">
					<u-input  v-model="form.old" type="password"  :password-icon="true" />
				</u-form-item>
				<u-form-item label="新密码" label-width="210" :label-style="{color:'#a1a1a1'}" :required="true" prop="new1">
					<u-input v-model="form.new1" type="password" :password-icon="true"/>
				</u-form-item>
				<u-form-item label="再次输入新密码" label-width="210" :label-style="{color:'#a1a1a1'}" :required="true" prop="new2">
					<u-input v-model="form.new2" type="password"  :password-icon="true" />
				</u-form-item>
		</u-form>
		
		<view>
			<u-button :custom-style="buttonStyle" type="primary" @click="submit"  >确认</u-button>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return{
				buttonStyle:{
					position:'fixed',
					bottom:0,
					width:'100%',
					height:'116rpx',
					borderRadius:'unset'
				},
				form:{
					old:'',
					new1:'',
					new2:''
				},
				rules: {
					old: [
						{ 
							required: true, 
							message: '请输入旧密码', 
							trigger: 'blur',
						}
					],
					new1: [
						{ 
							required: true, 
							message: '请输入新密码', 
							trigger: 'blur',
						}
					],
					new2: [
						{ 
							required: true, 
							message: '请再次输入新密码', 
							trigger: 'blur',
						}
					]
				}
			}
		},
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		methods:{
			submit(){
				console.log("提交密码")
			}
		}
	}
</script>

<style scoped>
	page{
		background-color: #FFFFFF;
	}
	.passForm{
		padding-left: 28rpx;
		padding-right: 28rpx;
	}
	.confirmBtn{
		
	}
</style>
