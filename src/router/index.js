import Vue from 'vue'
import Router from 'vue-router'
import Scafold from '@/components/scafold'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'scafold',
      component: Scafold
    }
  ]
})
