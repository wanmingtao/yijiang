<template>
	<div>
		<div class="header">
			<a href="/regest"><img src="../../static/img/jiantou.gif" /></a>
			<div>
				<span class="one">注册</span>
				
			</div>
		</div>
		<div class="login">
			<i class="iconfont">&#xe600;</i><input type="text" placeholder="Username/phone" ref="username" /><br/>
			<i class="iconfont">&#xe60a;</i><input type="password" placeholder="Password" ref="psw" /><br/>
			<button @click="regest">注册</button>
			<p><span></span><span></span><span></span></p>
			<!--<div v-show="$store.state.waiting">正在提交数据，请稍后......</div>-->
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'regest',
		data() {
			return {

			}
		},
		methods: {

			...mapActions([
				//    'updateWaitingFlag'
			]),
			regest: function() {
				var that = this;
				// 显示waiting
				// that.updateWaitingFlag(true);
				// ajax
				that.$http.post('/tp/public/api1/user/regest', {
					username: that.$refs.username.value,
					psw: that.$refs.psw.value
				}, {
					emulateJSON: true
				}).then(function(response) {
					console.log(1);
					console.log(response);
					// 关闭waiting
					that.updateWaitingFlag(false);
					console.log(2);

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