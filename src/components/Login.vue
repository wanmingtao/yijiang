<template>
  <div class="regest">
     姓名：<input type="text" ref="username" /><br/> 
     密码：<input type="text" ref="psw" /><br/> 
     <button @click="login">登录</button>
     <div v-show="$store.state.waiting">正在提交数据，请稍后......</div>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {
  name: 'login',
  data () {
    return {
     
    }
  },
  methods:{
    
    ...mapActions([
//    'updateWaitingFlag'
      ]),
    login:function(){
      var that = this;
      // 显示waiting
//    that.updateWaitingFlag(true);
      console.log(that.$store.state);
         // ajax
          that.$http.post('/tp/public/api1/user/login', {
            username: that.$refs.username.value,
            psw: that.$refs.psw.value
          },{
            emulateJSON: true
          }).then(function(response){
           
//          that.updateWaitingFlag(false);
            console.log(that.$store.state);
            console.log(response.body);
            
            // 关闭waiting

          }, function(response) {
            // error callback
          });
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  color: #42b983;
}
</style>
