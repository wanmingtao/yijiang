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
				<img :src="'static/img/xiangqing/'+ximg.ximg" />
			</div>
			<div class="footer">
				<div class="left">
					<span><i class="iconfont" :class="color">&#xe680;</i></span>
				</div>
				<div class="center">
					总金额：￥<span>{{num*ximg.price}}</span>
				</div>
				<div class="right" @click="pops">
					加入购物车
				</div>
			</div>
			<mt-popup class="pop" v-model="popupVisible" position="bottom">
				<dl>
					<dt><img :src="'static/img/cart/'+ximg.simg" /></dt>
					<dd>
						<p>￥{{ximg.price}}</p>
					</dd>
				</dl>
				<p>购买数量<span @click="jian">-</span><input type="number" v-model="num" /><span @click="jia">+</span></p>
				<button @click="sure">确定</button>
			</mt-popup>
		</div>
	</div>
</template>

<script>
	//	import {  } from 'mint-ui';
	import { Indicator, Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex';
	export default {
		name: 'jingxuan',
		components: {

		},
		data() {
			return {
				xid: '',
				ximg: '',
				popupVisible: false,
				num: 0,
				color: 'gry'
			}
		},
		beforeMount: function() {
			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
		},
		mounted: function() {

			//			Indicator.open();

			var id = location.hash;
			id = id.split('?');
			for(var i = 0; i < id.length; i++) {
				this.xid = id[1].substr(3);
			}
			//				console.log(this.xid);

			this.$http.post('/tp/public/api2/product/info', {
				xid: this.xid
			}, {
				emulateJSON: true
			}).then(function(response) {
				console.log(response);
				this.ximg = response.body[0];
				Indicator.close();

			}, function(response) {
				// error callback

			});

			//			setTimeout(function(){
			//				
			//				Indicator.close();
			//			},1000)

		},
		methods: {
			...mapActions([
				//				'savedata'
			]),
			pops: function() {
				var name = this.$cookie.get('name')

				if(name === null) {
					this.$router.push({ //你需要接受路由的参数再跳转
						path: '/login'
					});
				} else {
					this.popupVisible = true;
				}
			},
			jian: function() {
				if(this.num <= 0) {
					this.num = 0;
				} else {
					this.num--;
				}
				if(this.num != 0) {
					this.color = "dgry"
				} else {
					this.color = "gry"
				}
			},
			jia: function() {
				if(this.num >= 100) {
					this.num = 100;
				} else {
					this.num++;
				}
				if(this.num != 0) {
					this.color = "dgry"
				} else {
					this.color = "gry"
				}
			},
			sure: function() {
				if(this.num === 0) {
					Toast({
						message: '请选择数量',
						position: 'center',
						duration: 5000
					})
					return;

				} else {
					this.$http.post('/tp/public/api2/shopcart/scharu', {
						pid: this.ximg.xid,
						price: this.ximg.price,
						img: this.ximg.simg,
						count: this.num,
						name:this.ximg.name

					}, {
						emulateJSON: true
					}).then(function(res) {
						console.log(res)
						
							this.$router.push({ //你需要接受路由的参数再跳转
								path: '/cart'
							});
					}, function(res) {
						console.log(res)
					})

				}

			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/xiangqing.scss"
</style>