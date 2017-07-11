<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="static/img/zuo.png" /></a>
			<span>购物车</span>
			<span> </span>
		</div>
		<img v-if="show===false" class="kong" src="static/img/kong.png" />
		<div v-else class="xin">
			<ul id="cartlist">
				<div v-for="item in cart" class="list">
					<div class="l">
						<img :src="'static/img/cart/'+item.img" />
					</div>
					<div class="r">
						<h4>{{ item.name }}</h4>
						<li>价格：{{ item.price }}</li>
						<li>数量：{{ item.count }}</li>
						<li>小计：{{ item.count*item.price }}</li>
					</div>

				</div>

			</ul>
		</div>
		<!--<div class="zongjia">
			<span>总价：</span><span>1000</span>
		</div>-->
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'cart',
		data() {
			return {
				cart: [],
				show: true,

			}
		},
		mounted: function() {

			this.$http.post('/tp/public/api2/shopcart/gchaxun', {
				emulateJSON: true
			}).then(function(res) {
				console.log(res)
				this.cart = res.body;
				console.log(this.cart.length)

				if(this.cart.length > 0) {
					this.show = true;
				} else {
					this.show = false;
				}
			}, function(res) {
				console.log(res)
			});

			//					if(this.cart.length>0){
			//						console.log(1);
			//					}

		},
		methods: {
			...mapActions([

			]),

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/list_public.scss"
</style>