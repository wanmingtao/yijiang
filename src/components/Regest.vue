
<template>
  <div class="regest">
     姓名：<input type="text" ref="username" /><br/> 
     密码：<input type="text" ref="psw" /><br/> 
     <button @click="regest">注册</button>
     <div v-show="$store.state.waiting">正在提交数据，请稍后......</div>
  </div>
</template>

<script>
import { mapGetters,mapActions} from 'vuex'
export default {
  name: 'regest',
  data () {
    return {
     
    }
  },
  methods:{
    
    ...mapActions([
      'updateWaitingFlag'
      ]),
    regest:function(){
      var that = this;
      // 显示waiting
      that.updateWaitingFlag(true);
      setTimeout(function(){
           // ajax
        that.$http.post('/tp/public/api1/user/regest', {
          username: that.$refs.username.value,
          psw: that.$refs.psw.value
        },{
            emulateJSON: true
          }).then(function(response){
            console.log(1);
          console.log(response);
          // 关闭waiting
          that.updateWaitingFlag(false);
          console.log(2);
          
        }, function(response){
          // error callback
        });

      },2000)

     
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
