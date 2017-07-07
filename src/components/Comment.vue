<template>
	<div class="header">
		<img src="../../static/img/zuo.png" />
		<span>评价</span>
		<span> </span>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'comment',
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
	@import"../../static/style/list_public.scss"
</style>