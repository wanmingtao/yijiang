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
				<div v-for="(item,index) in cart" class="list">
					<div class="l">
						<img :src="'static/img/cart/'+item.img" />
					</div>
					<div class="r">
						<div class="xinxi">
							
							<h4>{{ item.name }}</h4>
							<li>价格：{{ item.price }}</li>
							<li>数量：{{ item.count }}</li>
							<li>小计：{{ item.count*item.price }}</li>
						</div>
						<div class="cao">
							
							<li class="jia" @click="jia(index)">+</li>
							<li class="sanchu" @click="sanchu(item.id)">删除</li>
							<li class="jian" @click="jian(index)">-</li>
						</div>
					</div>
				</div>
			</ul>
		</div>
		<div class="zongjia">
			<span>总价：</span><span>￥{{mony}}</span>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'cart',
		data() {
			return {
				cart: [],
				show: true,
				mony: 100
			}
		},
		mounted: function() {
			this.load();
		},
		watch: {
			cart: {
				handler: function(oldVal) {
					var monyss = 0;
					for(var i = 0; i < oldVal.length; i++) {
						monyss += oldVal[i].count * oldVal[i].price;
					}
					this.mony = monyss;
				},

				deep: true
			}
		},

		methods: {
			...mapActions([

			]),
			sanchu(e) {
				//				console.log(e);
				this.$http.post('/tp/public/api2/shopcart/sanchu', {
					id: e
				}, {
					emulateJSON: true
				}).then(function(res) {
					//					console.log(res)

					this.load();
				}, function(res) {
					//					console.log(res)
				});
			},
			jia: function(e) {
				this.cart[e]['count']++;
				
			},
			jian: function(e) {
				this.cart[e]['count']--;
				if(this.cart[e]['count']<=1){
					this.cart[e]['count']=1
					Toast({
					  message: '最少为一件'
					});
				}
			},
			load: function() {
				var monys = 0;
				this.$http.post('/tp/public/api2/shopcart/gchaxun', {
					emulateJSON: true
				}).then(function(res) {
					this.cart = res.body;
					for(var i = 0; i < res.body.length; i++) {
						monys += res.body[i].count * res.body[i].price;
					}
					console.log(monys)
					this.mony = monys;
					console.log(this.mony)

					if(this.cart.length > 0) {
						this.show = true;
					} else {
						this.show = false;
					}
				}, function(res) {
					console.log(res)
				});

			}

		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/list_public.scss"
</style>