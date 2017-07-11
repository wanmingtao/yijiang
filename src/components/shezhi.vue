<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="static/img/zuo.png" /></a>
			<span>系统设置</span>
			<span></span>
		</div>
		<div class="shezhi">
			
		</div>
		
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'shezhi',
		data() {
			return {
				cart: [],
				show: true,
				
			}
		},
		mounted: function() {

			

		},
		methods: {
			...mapActions([

			]),

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"../../static/style/shezhi.scss"
</style>