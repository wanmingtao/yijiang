<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>我的</li>
					<li>
						<span @click="tuichu">退出</span>
					</li>
				</ul>
			</div>
			<div class="continer">
				<div class="continer_log">
					<div class="tou"><img src="static/img/cart/ssw3.png" /></div>
					<div>{{msg}}登录</div>
					<div><span>签到</span></div>
				</div>
				<ul class="continer_nav">
					<li @click="check(1)"><i class="iconfont">&#xe680;</i>购物车
						<div></div>
					</li>
					<li @click="check(2)"><i class="iconfont">&#xe604;</i>我的订单
						<div></div>
					</li>
					<li @click="check(3)"><i class="iconfont">&#xe810;</i>待评价
						<div></div>
					</li>
					<li @click="check(4)"><i class="iconfont">&#xe61d;</i>优惠券
						<div></div>
					</li>
				</ul>
				<ul class="continer_menu">
					<li><i class="iconfont">&#xe61f;</i>我的消息</li>
					<li><i class="iconfont">&#xe6c2;</i>我的咨询</li>
					<li><i class="iconfont">&#xe657;</i>打小报告<span>></span></li>
					<li><i class="iconfont">&#xe60b;</i>我的收藏<span>></span></li>
					<li><i class="iconfont">&#xe601;</i>用户福利<span>></span></li>
					<li><i class="iconfont">&#xe620;</i>星币商城<span>></span></li>
					<li><i class="iconfont">&#xe60d;</i>申请入驻<span>></span></li>
				</ul>
			</div>
		</div>
		<NavFooter></NavFooter>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex';
	import NavFooter from './NavFooter';
	export default {
		name: 'jingxuan',
		components: {
			NavFooter
		},
		data() {
			return {
				msg: ''

			}
		},
		mounted: function() {
			this.jiance();
		},
		methods: {
			...mapActions([
				'savedata'
			]),
			tuichu: function() {
				this.$cookie.delete('name');
				Toast({
					message: '退出成功',
					position: 'bottom',
					duration: 3000
				});
				this.jiance();
			},
			jiance: function() {
				var name = this.$cookie.get('name');
				if(name == null) {
					this.msg = '尚未'
				} else {
					this.msg = name;
				}
			},
			check: function(e) {

				if(this.$cookie.get('name')) {
					if(e == 1) {
						this.$router.push({ //你需要接受路由的参数再跳转
							path: '/cart'
						});
					}
					if(e == 2) {
						this.$router.push({ //你需要接受路由的参数再跳转
							path: '/order'
						});
					}
					if(e == 3) {
						this.$router.push({ //你需要接受路由的参数再跳转
							path: '/comment'
						});
					}
					if(e == 4) {
						this.$router.push({ //你需要接受路由的参数再跳转
							path: '/coupon'
						});
					}

				} else {
					this.$router.push({ //你需要接受路由的参数再跳转
						path: '/login'
					});

				}

			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/wode.scss"
</style>