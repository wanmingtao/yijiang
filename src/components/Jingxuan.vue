<template>
	<div class="main">
		<div class="con">
			<div class="header">
				<ul>
					<li>精选</li>
					<li>
						<a href="#/Searche"><i class="iconfont">&#xe634;</i></a>
					</li>
				</ul>
			</div>
			<div class="continer">
				<div id="swiper">
					<div class="swiper-container swiperone">
						<div class="swiper-wrapper">
							<div class="swiper-slide one">
								<img src="../../static/img/s1.jpg" />
							</div>
							<div class="swiper-slide two">
								<img src="../../static/img/s2.jpg" />
							</div>
							<div class="swiper-slide three">
								<img src="../../static/img/s3.jpg" />
							</div>
							<div class="swiper-slide three">
								<img src="../../static/img/s4.jpg" />
							</div>
						</div>
						<div class="swiper-pagination"></div>
					</div>
				</div>
				<div class="daohang">
					<ul>
						<li><img src="../../static/img/sw1.gif" /></li>
						<li><img src="../../static/img/sw2.gif" /></li>
						<li><img src="../../static/img/sw3.gif" /></li>
						<li><img src="../../static/img/sw4.gif" /></li>
						<li><img src="../../static/img/sw5.gif" /></li>
						<li><img src="../../static/img/sw6.gif" /></li>
						<li><img src="../../static/img/sw7.gif" /></li>
						<li><img src="../../static/img/sw8.gif" /></li>
					</ul>
				</div>
				<div class="tuijian">
					<h1>今日推荐</h1>
					<ul class="tu">
						<li><img src="../../static/img/one1.gif" /></li>
						<li><img src="../../static/img/one2.gif" /></li>
						<li><img src="../../static/img/one3.gif" /></li>
						<li><img src="../../static/img/one4.gif" /></li>
						<li><img src="../../static/img/one5.gif" /></li>
					</ul>
					<p>查看往期》》》</p>
				</div>
				<div class="juti">
					<div class="up">
						<img src="../../static/img/one6.gif" />
						<div class="swiper-container swipertwo">
							<div class="swiper-wrapper">
								<div class="swiper-slide one">
									<img src="../../static/img/z1.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/z2.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/z3.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/z4.jpg" />
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
									<img src="../../static/img/j1.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/j2.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/j3.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/j4.jpg" />
								</div>
							</div>
						</div>
					</div>
					
					
					<div class="up">
						<img src="../../static/img/one7.gif" />
						<div class="swiper-container swipertwo">
							<div class="swiper-wrapper">
								<div class="swiper-slide one">
									<img src="../../static/img/jia1.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/jia2.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/jia3.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/jia4.jpg" />
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
									<img src="../../static/img/e1.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/e2.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/e3.jpg" />
								</div>
								<div class="swiper-slide two">
									<img src="../../static/img/e4.jpg" />
								</div>
							</div>
						</div>
					</div>

				</div>

			</div>

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
		mounted: function() {
			var swiper = new Swiper('.swiperone', {
				autoplay: 3000,
				loop: true,
				pagination: '.swiper-pagination',
			});

			var mySwiper = new Swiper('.swipertwo', {
				slidesPerView:2,
//				spaceBetween: 20,
			})
		},

		data() {
			return {
				msg: '我是精选页'

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
	@import"../../static/style/jingxuan.scss"
</style>