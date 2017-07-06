import Vue from 'vue'
import Router from 'vue-router'
import Jingxuan from '@/components/Jingxuan'
import Regest from '@/components/Regest'
import Login from '@/components/Login'
import Jiangren from '@/components/Jiangren'
import Jiangwu from '@/components/Jiangwu'
import Wode from '@/components/Wode'
import Searche from '@/components/Searche'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Jingxuan',
      component: Jingxuan
    },
    {
      path: '/regest',
      name: 'Regest',
      component: Regest
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/jiangren',
      name: 'Jiangren',
      component: Jiangren
    },
    {
      path: '/jiangwu',
      name: 'Jiangwu',
      component: Jiangwu
    },
    {
      path: '/wode',
      name: 'Wode',
      component: Wode
    },
    {
      path: '/searche',
      name: 'Searche',
      component: Searche
    }
  ]
})
