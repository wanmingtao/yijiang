<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>精选</li>
					<li>
						<router-link to="/Searche"><i class="iconfont">&#xe6e4;</i></router-link>
					</li>
				</ul>
			</div>
			<mt-loadmore :top-method="loadTop" topLoadingText='玩命加载中。。。' :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">

				<div class="continer">
					<div id="swiper">
						<div class="swiper-container swiperone">
							<div class="swiper-wrapper">
								<div class="swiper-slide one" v-for="item in lunlist">
									<a :href="'#/xiangqing?id='+item.pid"><img :src="'static/img/'+item.img" /></a>
								</div>
							</div>
							<div class="swiper-pagination"></div>
						</div>
					</div>
					<div class="daohang">
						<ul>
							<li v-for="item in list">
								<a :href="'#/xiangqing?id='+item.pid"><img :src="'static/img/'+item.img" /></a>
							</li>
						</ul>
					</div>
					<div class="tuijian">
						<h1>今日推荐</h1>
						<ul class="tu">
							<li v-for="item in list3">
								<a :href="'#/xiangqing?id='+item.pid"><img :src="'static/img/'+item.img" /></a>
							</li>
						</ul>
						<p>查看往期》》》</p>
					</div>
					<div class="juti">
						<div class="up">
							<img src="static/img/one6.gif" />
							<div class="swiper-container swipertwo">
								<div class="swiper-wrapper">
									<div class="swiper-slide one">
										<img src="static/img/z1.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/z2.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/z3.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/z4.jpg" />
									</div>
								</div>
							</div>
						</div>
						<div class="down">
							<div class="done">
								<h1>永远爱你|小承诺</h1>
								<p>属于爱情的甜蜜微笑</p>
							</div>
							<div class="swiper-container swipertwo">
								<div class="swiper-wrapper">
									<div class="swiper-slide one">
										<img src="static/img/j1.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/j2.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/j3.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/j4.jpg" />
									</div>
								</div>
							</div>
						</div>

						<div class="up">
							<img src="static/img/one7.gif" />
							<div class="swiper-container swipertwo">
								<div class="swiper-wrapper">
									<div class="swiper-slide one">
										<img src="static/img/jia1.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/jia2.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/jia3.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/jia4.jpg" />
									</div>
								</div>
							</div>
						</div>
						<div class="down">
							<div class="done">
								<h1>耳环设计</h1>
								<p>装点双耳的艺术饰品</p>
							</div>
							<div class="swiper-container swipertwo">
								<div class="swiper-wrapper">
									<div class="swiper-slide one">
										<img src="static/img/e1.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/e2.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/e3.jpg" />
									</div>
									<div class="swiper-slide two">
										<img src="static/img/e4.jpg" />
									</div>
								</div>
							</div>
						</div>

					</div>

				</div>
			</mt-loadmore>

		</div>
		<NavFooter></NavFooter>

	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import NavFooter from './NavFooter'
	export default {
		name: 'jingxuan',
		components: {
			NavFooter
		},
		beforeMount:function(){
			
		},
		mounted: function() {
			var that=this;
			this.load();
			setTimeout(function() {
				var swiper = new Swiper('.swiperone', {
					autoplay: 3000,
					loop: true,
					pagination: '.swiper-pagination',
				});

			}, 500)

			var mySwiper = new Swiper('.swipertwo', {
				slidesPerView: 2,
				//spaceBetween: 20,
			});

		},

		data() {
			return {
				list: [],
				lunlist: [],
				list3: [],
				allLoaded: false,
				msg:'玩命加载中。。。',
				loadmore:false
			}
		},
		methods: {
			...mapActions([
				'savedata'
			]),
			loadTop() {
				   var that=this;
				
					that.load();
					that.$refs.loadmore.onTopLoaded();
			    
			},
			loadBottom() {
				this.load();
				this.allLoaded = true; // if all data are loaded
				this.$refs.loadmore.onBottomLoaded();
			},
			load:function() {
				this.$http.post('/tp/public/api2/product/pchaxun', {
				}, {
					emulateJSON: true
				}).then(function(response) {
					this.loadmore=true;
					for(var i = 0; i < response.body.length; i++) {
						if(response.body[i].type == "2") {
							this.list.push(response.body[i]);
						}
						if(response.body[i].type == "3") {
							this.list3.push(response.body[i]);
						}
						if(response.body[i].type == "1") {
							this.lunlist.push(response.body[i]);
						}
					}
					console.log(this.list3);
				}, function(response) {

				});

			}

		},
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/jingxuan.scss"
</style>