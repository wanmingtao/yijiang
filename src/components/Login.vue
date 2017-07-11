<template>
	<div>
		<div class="header">
			<a href="javascript:history.go(-1)"><img src="static/img/jiantou.gif" /></a>
			<div>
				<span class="one">登录及注册</span>
				<span class="two">短信登录</span>
			</div>
		</div>
		<!--<div class="login">
			<i class="iconfont">&#xe600;</i><input type="text" placeholder="Username/phone" ref="username" /><br/>
			<i class="iconfont">&#xe60a;</i><input type="password" placeholder="Password" ref="psw" /><br/>
			<button @click="login">登录</button>
			<p><span>忘记密码</span><span>没有账号？</span><span @click="regests">注册</span></p>
			
		</div>-->
		<div class="login">
			<i class="iconfont">&#xe600;</i><input type="text" placeholder="Username/phone" ref="username" maxlength="10" onkeyup="value=value.replace(/[\W]/g,'') " onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^\d]/g,''))" /><br/>
			<i class="iconfont">&#xe60a;</i><input type="password" placeholder="Password" ref="psw" maxlength="16" onkeyup="value=value.replace(/[/W]/g,'')" onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^/d]/g,''))" /><br/>
			<form id="form1" runat="server" onsubmit="validateCode()">
				<div>
					<table border="0" cellspacing="5" cellpadding="5">

						<tr>
							<td>
								<div class="code" id="checkCode" @click="createCode()"></div>
							</td>
							<td>
								<a @click="createCode()">看不清换一张</a>
							</td>
						</tr>

						<tr>
							<td><img src="../../static/img/yzm.png" /></td>
							<td><input style="float:left;" type="text" id="inputCode" ref="inputCode" @blur="validateCode" /></td>
							<td><input id="Button1" @click="validateCode();" type="button" /></td>
						</tr>

					</table>
				</div>
			</form>
			<button @click="login">登录</button>
			<p><span>忘记密码</span><span>没有账号？</span><span @click="regests">注册</span></p>
			<!--<div v-show="$store.state.waiting">正在提交数据，请稍后......</div>-->

		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { mapGetters, mapActions } from 'vuex'
	export default {
		name: 'login',
		data() {
			return {
				s:1,
				code:''
			}
		},
		mounted:function(){
			
		},
		methods: {

			...mapActions([
				//				checkuser
			]),
			regests: function() {
				location.hash = "#/regest"
			},
			createCode: function(){
				var code = "";
				var codeLength = 4; //验证码的长度
				var checkCode = document.getElementById("checkCode");
				var codeChars = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 
				'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'); //所有候选组成验证码的字符，当然也可以用中文的
				for(var i = 0; i < codeLength; i++) {
				var charNum = Math.floor(Math.random() * 52);
					code += codeChars[charNum];
				}
				if(checkCode) {
					checkCode.className = "code";
					checkCode.innerHTML = code;
					this.code=code;
				}
			},

			 validateCode: function () {
			// 	this.addTodo(this.$refs.inputCode.value);

				var inputCode=document.getElementById("inputCode").value;
				if(inputCode.length <= 0) {
					
					Toast({
					  message: '请输入验证码'
					});
				} else if(inputCode.toUpperCase() != this.code.toUpperCase()) {
					this.s=1;
					console.log(this.s);
					Toast({
					  message: '验证码有误'
					});
					this.createCode();
				} else  {
					this.s=2;
					
				}    
			} ,

			login: function() {
				var that = this;
				console.log(that.$store.state);
				that.$http.post('/tp/public/api2/user/login', {
					username: that.$refs.username.value,
					psw: that.$refs.psw.value
				}, {
					emulateJSON: true
				}).then(function(response) {
					console.log(response.body);
					if((response.body.msg == 1)&&(this.s==2)) {
						
						this.$router.push({ //你需要接受路由的参数再跳转
							path: '/wode'
						});
					}else{
						
					}
					//	alert(that.$cookie.get('name'))
					if(response.body.msg == 0) {
						Toast({
							message: '登陆失败',
							position: 'bottom',
							duration: 3000
						})
					}
				}, function(response) {

				});
			}
		},
		mounted(){
		    this.createCode()
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	@import"static/style/login.scss"
</style>