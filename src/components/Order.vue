<template>
	<div>
		<div class="header">
			<a href="#Wode"><img src="static/img/zuo.png" /></a>
			<span>订单</span>
			<span> </span>
		</div>
		<img class="kong" src="static/img/kong.png" />
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'order',
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
	@import"static/style/list_public.scss"
</style>