<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="../../static/img/jiantou.gif" /></a>
			<div>
				<span class="one">登录及注册</span>
				<span class="two">短信登录</span>
			</div>
		</div>
		<div class="login">
			<i class="iconfont">&#xe600;</i><input type="text" placeholder="Username/phone" ref="username" /><br/>
			<i class="iconfont">&#xe60a;</i><input type="password" placeholder="Password" ref="psw" /><br/>
			<button @click="login">登录</button>
			<p><span>忘记密码</span><span>没有账号？</span><span @click="regests">注册</span></p>
			<!--<div v-show="$store.state.waiting">正在提交数据，请稍后......</div>-->
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'login',
		data() {
			return {

			}
		},
		methods: {

			...mapActions([
//				checkuser
			]),
			regests: function() {
				location.hash = "#/regest"

			},

			login: function() {
				var that = this;
				// 显示waiting
				//    that.updateWaitingFlag(true);
				console.log(that.$store.state);
				// ajax
				that.$http.post('/tp/public/api2/user/login', {
					username: that.$refs.username.value,
					psw: that.$refs.psw.value
				}, {
					emulateJSON: true
				}).then(function(response) {
					
					//that.updateWaitingFlag(false);
//					console.log(that.$store.state);
					console.log(response.body);
					if(response.body.msg == 1) {
//						this.$router.push({ //你需要接受路由的参数再跳转
//							path: '/wode'
//						});
						location.href='javascript:history.go(-1)';
					}
					//	alert(that.$cookie.get('name'))
					if(response.body.msg == 0) {
						Toast({
							message: '登陆失败',
							position: 'bottom',
							duration: 5000
						})
					}

					// 关闭waiting

				}, function(response) {

					// error callback
				});
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"../../static/style/login.css"
</style>