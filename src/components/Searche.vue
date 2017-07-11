<template>
	<div class="searche">
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="static/img/jiantou.gif"/></a>
			<div>
				<input type="text" placeholder="搜你喜欢的匠物"/>
			    <span><i class="iconfont">&#xe6e4;</i></a></span>	
			</div>
		</div>
		<div class="continer">
			<h1>热门标签</h1>
			<ul>
				<li>耳钉</li>
				<li>胸针</li>
				<li>对戒</li>
				<li>吊坠</li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'searche',
		data() {
			return {

			}
		},
		methods: {
			...mapActions([
				
			]),
			
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/searche.scss"
</style>