<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app'
	}
</script>

<style lang="scss">
	@charset "utf-8";
	$countPerpage:20;
	$designWidth:1080px;
	@function R($px) {
		//width*countPerpage/designWidth
		@return ($px*$countPerpage/$designWidth)*1rem;
	}
	
	* {
		font-family: "微软雅黑";
		padding: 0;
		margin: 0;
	}
	
	html,
	body {
		background: #e4e4e4;
		height: 100%;
		width: 100%;
	}
	
	ul {
		list-style: none;
	}
	
	a {
		text-decoration: none;
		color: #3e3e3e;
	}
	
	#app {
		overflow: hidden;
		height: 100%;
		width: 100%;
		.main {
			height: 100%;
			width: 100%;
			display: flex;
			flex-direction: column;
			.con {
				flex: 1;
				overflow-y: auto;
				.header {
					z-index: 10000;
					background: white;
					font-size: R(70px);
					margin-bottom: R(169px);
					position: fixed;
					height: R(169px);
					width: 100%;
					line-height: R(169px);
					ul {
						height: 100%;
						width: 100%;
						display: flex;
						flex-direction: row;
						li:first-child {
							text-align: center;
							text-indent: 2em;
							flex: 1;
						}
						li:nth-of-type(2) {
							text-align: center;
							width: R(145px);
						}
					}
				}
				.continer {
					margin-top: R(169px);
				}
			}
		}
	}
</style>