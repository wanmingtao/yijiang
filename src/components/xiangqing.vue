<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<a href="javascript:history.go(-1)"><img src="static/img/jiantou.gif" /></a>
				<div>
					<span class="one">详情</span>
				</div>
			</div>
			<div class="continer">
				<img :src="'static/img/xiangqing/'+ximg" />
			</div>
			<div class="footer">
				<div class="left">
					<span><i class="iconfont">&#xe680;</i></span>
				</div>
				<div class="center">
					总金额：￥<span>10000</span>
				</div>
				<div class="right">
					
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'jingxuan',
		components: {

		},
		data() {
			return {
				xid: '',
				ximg:''

			}
		},
		mounted: function() {
			
			var id=location.hash;
			id= id.split('?');
			for (var i=0;i<id.length;i++) {
				this.xid=id[1].substr(3);	
			}
			console.log(this.xid);
			
			this.$http.post('/tp/public/api2/product/info', {
				xid:this.xid
			}, {
				emulateJSON: true
			}).then(function(response) {
				console.log(response);
				this.ximg=response.body[0].ximg;
			}, function(response) {
				// error callback

			});
		},
		methods: {
			...mapActions([
				'savedata'
			]),

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/xiangqing.scss"
</style>