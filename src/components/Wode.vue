<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>我的</li>
					<li><a href=""><i class="iconfont">&#xe628;</i></a></li>
				</ul>
			</div>
			<div class="continer">
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
				<h1>编辑区</h1>
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