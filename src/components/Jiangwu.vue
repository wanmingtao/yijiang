<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>匠物</li>
					<li><a href=""><i class="iconfont">&#xe634;</i></a></li>
				</ul>
			</div>
			<div class="continer">
				<dl>
					<dt><img src="../../static/img/one7.gif"/></dt>
					<dd>
						<ul>
							<li><img src="../../static/img/jia1.jpg"/><p>真皮</p><p>￥168</p></li>
							<li><img src="../../static/img/jia2.jpg"/><p>真丝</p><p>￥129</p></li>
							<li><img src="../../static/img/jia3.jpg"/><p>真软</p><p>￥130</p></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt><img src="../../static/img/one6.gif"/></dt>
					<dd>
						<ul>
							<li><img src="../../static/img/z1.jpg"/><p>真皮</p><p>￥168</p></li>
							<li><img src="../../static/img/z2.jpg"/><p>真丝</p><p>￥129</p></li>
							<li><img src="../../static/img/z3.jpg"/><p>真软</p><p>￥130</p></li>
						</ul>
					</dd>
				</dl>
				<dl>
					<dt><img src="../../static/img/one5.gif"/></dt>
					<dd>
						<ul>
							<li><img src="../../static/img/j1.jpg"/><p>真皮</p><p>￥168</p></li>
							<li><img src="../../static/img/j2.jpg"/><p>真丝</p><p>￥129</p></li>
							<li><img src="../../static/img/j3.jpg"/><p>真软</p><p>￥130</p></li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
		<NavFooter></NavFooter>
	</div>
</template>

<script>
	import NavFooter from './NavFooter';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'jingxuan',
		components: {
			NavFooter
		},
		data() {
			return {
				msg: '我是匠物页'

			}
		},
		methods: {
			...mapActions([
				'savedata'
			]),
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import"../../static/style/jiangwu.css"

</style>