
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vueresource from 'vue-resource'
import { Popup } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { Loadmore } from 'mint-ui';
Vue.component(Loadmore.name, Loadmore);
//import VueCookie from './vue-cookie'
var VueCookie = require('vue-cookie');
Vue.component(Popup.name, Popup);
// Tell Vue to use the plugin 
Vue.use(VueCookie);
Vue.use(Vueresource);
Vue.config.productionTip = false;
//Vue.component(Popup.name, Popup);

    


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
