<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>匠人</li>
					<li>
						<router-link to="/Searche"><i class="iconfont">&#xe6e4;</i></router-link>
					</li>
				</ul>
			</div>
			
			<div class="continer">
				<div class="nav">
					<ul>
						<li><img src="static/img/jiangren/n1.gif" /><span>迷原创首饰</span></li>
						<li><img src="static/img/jiangren/n2.gif" /><span>塑造</span></li>
						<li><img src="static/img/jiangren/n3.gif" /><span>汉子365</span></li>
						<li><img src="static/img/jiangren/n4.gif" /><span>手艺陈</span></li>
						<li><img src="static/img/jiangren/n5.gif" /><span>彩彩李慈义</span></li>
						<li><img src="static/img/jiangren/n6.gif" /><span>九瓷烧</span></li>
						<li><img src="static/img/jiangren/n7.gif" /><span>方晓琪</span></li>
						<li><img src="static/img/jiangren/n8.gif" /><span>迷你</span></li>
					</ul>
				</div>
				<div class="con">

					<dl v-for="item in tlist">
						<dt><a :href="'#/xiangqing?id='+item.pid"><img :src="'static/img/jiangren/'+item.img"/></a></dt>
						<dd class="t">{{item.dir}}</dd>
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
				tlist: [],

			}
		},
		mounted:function(){
			this.$http.post('/tp/public/api2/product/pchaxun', {
				emulateJSON: true
			}).then(function(response) {
				for(var i = 0;i<response.body.length;i++){
					if(response.body[i].type=="4"){
						this.tlist.push(response.body[i]);
					}
					
				}
				
			}, function(response) {

			});
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
	@import"static/style/jiangren.scss"
</style>