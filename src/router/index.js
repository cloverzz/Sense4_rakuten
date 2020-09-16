import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Home from '../views/Home.vue'
import Scafold from '../components/scafold'

Vue.use(VueRouter)
Vue.use(ElementUI);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/scafold',
    name: 'scafold',
    component: Scafold
  }
]

const router = new VueRouter({
  routes
})

export default router
