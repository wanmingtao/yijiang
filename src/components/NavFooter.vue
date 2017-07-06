<template>
	<div class="nav">
		<router-link to="/" active-class="active" exact><i class="iconfont">&#xe501;</i><span>精选</span></router-link>
		<router-link to="/jiangren" active-class="active" exact><i class="iconfont">&#xe502;</i><span>匠人</span></router-link>
		<router-link to="/jiangwu" active-class="active" exact><i class="iconfont">&#xe88b;</i><span>匠物</span></router-link>
		<router-link to="/wode" active-class="active" exact><i class="iconfont">&#xe62f;</i><span>我的</span></router-link>
		
		
		
		<!--<a href="#/" class="active" v-if="$store.state.index == 1" @click="change(1)"><i class="iconfont">&#xe501;</i><span>精选</span></a>
		<a href="#/" v-else @click="change(1)"><i class="iconfont">&#xe501;</i><span>精选</span></a>
		
		<a href="#/jiangren" class="active" v-if="$store.state.index == 2" @click="change(2)"><i class="iconfont">&#xe502;</i><span>匠人</span></a>
		<a href="#/jiangren" v-else @click="change(2)"><i class="iconfont">&#xe502;</i><span>匠人</span></a>
		
		<a href="#/jiangwu" class="active" v-if="$store.state.index == 3" @click="change(3)"><i class="iconfont">&#xe88b;</i><span>匠物</span></a>
		<a href="#/jiangwu" v-else @click="change(3)"><i class="iconfont">&#xe88b;</i><span>匠物</span></a>
		
		<a href="#/wode" class="active" v-if="$store.state.index == 4" @click="change(4)"><i class="iconfont">&#xe62f;</i><span>我的</span></a>
		<a href="#/wode" v-else @click="change(4)"><i class="iconfont">&#xe62f;</i><span>我的</span></a>-->
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'nav',
		data() {
			return {
				msg: '我是导航页',
				index: 1

			}
		},
		methods: {

			...mapActions([
				'changecolor'
			]),
			change: function(index) {
				this.index = index;
				this.changecolor(index);
			}
		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"../../static/style/navfooter.scss"
</style>