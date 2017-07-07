<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>我的</li>
					<li><a href=""><i class="iconfont">&#xe616;</i></a></li>
				</ul>
			</div>
			<div class="continer">
				<div class="continer_log">
					<div></div>
					<div>尚未登录</div>
					<div><span>签到</span></div>
				</div>
				<ul class="continer_nav">
					<li><i class="iconfont">&#xe680;</i>购物车<div></div></li>
					<li><i class="iconfont">&#xe604;</i>我的订单<div></div></li>
					<li><i class="iconfont">&#xe810;</i>待评价<div></div></li>
					<li><i class="iconfont">&#xe61d;</i>优惠券<div></div></li>
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
	import { mapGetters, mapActions } from 'vuex';
	import NavFooter from './NavFooter';
	export default {
		name: 'jingxuan',
		components: {
			NavFooter
		},
		data() {
			return {
				msg: '我是我的页'

			}
		},
//		mounted:function(){
//		this.$router.push({//你需要接受路由的参数再跳转
//                          path:'/regest'
//                        });
//			
//		},
		methods: {
			...mapActions([
				'savedata'
			]),
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import"../../static/style/wode.scss"

</style>