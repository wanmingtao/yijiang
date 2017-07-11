import Vue from 'vue'
import Router from 'vue-router'
import Jingxuan from '@/components/Jingxuan'
import Regest from '@/components/Regest'
import Login from '@/components/Login'
import Jiangren from '@/components/Jiangren'
import Jiangwu from '@/components/Jiangwu'
import Wode from '@/components/Wode'
import xiangqing from '@/components/xiangqing'
import Searche from '@/components/Searche'
import Cart from '@/components/Cart'
import Order from '@/components/Order'
import Comment from '@/components/Comment'
import Coupon from '@/components/Coupon'
import Shezhi from '@/components/shezhi'
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
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/coupon',
      name: 'Coupon',
      component: Coupon
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/shezhi',
      name: 'Shezhi',
      component: Shezhi
    }
  ]
})
