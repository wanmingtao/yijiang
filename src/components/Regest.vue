<template>
	<div>
		<div class="header">
			<router-link to="/login"><img src="static/img/jiantou.gif" /></router-link>
			<div>
				<span class="one">注册</span>

			</div>
		</div>
		<div class="login">
			<i class="iconfont">&#xe600;</i><input v-on:blur="check" type="text" placeholder="Username/phone" v-model="username" /><br/>
			<i class="iconfont">&#xe60a;</i><input type="password" placeholder="Password" v-model="psw" /><br/>
			<button @click="regest">注册</button>
			<p><span></span><span></span><span></span></p>
			<!--<div v-show="$store.state.waiting">正在提交数据，请稍后......</div>-->
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'regest',
		data() {
			return {
				username: '',
				psw: '',
				checks: false,
				checks2: false
			}
		},
		methods: {

			...mapActions([
				//    'updateWaitingFlag'
			]),
			check: function() {
//				var reg = /^1[3|4|5|7|8][0-9]{9}$/;
				if(this.username.length>=5) {
					console.log('通过');
					
					this.checks2 = true;
				} else {
					console.log('长度需5位以上');
					this.checks2 = false;
					Toast({
						message: '用户名长度需5位以上',
						position: 'bottom',
						duration: 3000
					})
				}

				if(this.checks2 == true) {

					this.$http.post('/tp/public/api2/user/checkname', {
						username: this.username,
					}, {
						emulateJSON: true
					}).then(function(response) {
						console.log(response)
						if(response.body.msg == 0) {
							this.checks = true;
						} else {
							this.checks = false;
							this.username = '';
							Toast({
								message: '用户名已存在',
								position: 'bottom',
								duration: 3000
							});
							this.checks = false;
						}
					}, function(response) {
						// error callback
					});

				}
			},
			regest: function() {
				if((this.checks === true) && (this.checks2 === true)) {
					this.$http.post('/tp/public/api2/user/regest', {
						username: this.username,
						psw: this.psw
					}, {
						emulateJSON: true
					}).then(function(response) {
						this.$router.push({ //你需要接受路由的参数再跳转
							path: '/login'
						});
					}, function(response) {
						// error callback
					});
				} else {
					Toast({
						message: '请安要求注册',
						position: 'bottom',
						duration: 3000
					});
				}

			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/login.scss"
</style>