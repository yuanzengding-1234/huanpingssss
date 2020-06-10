import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'

Vue.use(Router)

export default new Router({
  linkActiveClass:'router-link-active',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/*',
      name: 'home',
      component: home
    }
  ]
})
