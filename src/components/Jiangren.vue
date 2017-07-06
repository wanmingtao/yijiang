<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>匠人</li>
					<li>
						<a href=""><i class="iconfont">&#xe634;</i></a>
					</li>
				</ul>
			</div>
			
			<div class="continer">
				<div class="nav">
					<ul>
						<li><img src="../../static/img/jiangren/n1.gif" /><span>迷原创首饰</span></li>
						<li><img src="../../static/img/jiangren/n2.gif" /><span>塑造</span></li>
						<li><img src="../../static/img/jiangren/n3.gif" /><span>汉子365</span></li>
						<li><img src="../../static/img/jiangren/n4.gif" /><span>手艺陈</span></li>
						<li><img src="../../static/img/jiangren/n5.gif" /><span>彩彩李慈义</span></li>
						<li><img src="../../static/img/jiangren/n6.gif" /><span>九瓷烧</span></li>
						<li><img src="../../static/img/jiangren/n7.gif" /><span>方晓琪</span></li>
						<li><img src="../../static/img/jiangren/n8.gif" /><span>迷你</span></li>
					</ul>
				</div>
				<div class="con">

					<dl>
						<dt><img src="../../static/img/jiangren/two1.gif"/></dt>
						<dd>饰品匠人</dd>
					</dl>
					<dl>
						<dt><img src="../../static/img/jiangren/two2.gif"/></dt>
						<dd>饰品匠人</dd>
					</dl>
					<dl>
						<dt><img src="../../static/img/jiangren/two3.gif"/></dt>
						<dd>饰品匠人</dd>
					</dl>
					<dl>
						<dt><img src="../../static/img/jiangren/two4.gif"/></dt>
						<dd>饰品匠人</dd>
					</dl>
					<dl>
						<dt><img src="../../static/img/jiangren/two5.gif"/></dt>
						<dd>饰品匠人</dd>
					</dl>
					<dl>
						<dt><img src="../../static/img/jiangren/two6.gif"/></dt>
						<dd>饰品匠人</dd>
					</dl>
				</div>

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
				msg: '我是匠人页',

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
	@import"../../static/style/jiangren.scss"
</style>