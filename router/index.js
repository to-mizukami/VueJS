import Vue from 'vue'
import Router from 'vue-router'

import linkmenu from '@/components/LinkMenu'
import first from '@/components/first'
import second from '@/components/second'
import third from '@/components/third'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: linkmenu
    },
    {
      path: '/first',
      component: first
    },
    {
      path: '/second',
      component: second
    },
    {
      path: '/third',
      component: third
    }
  ]
})
