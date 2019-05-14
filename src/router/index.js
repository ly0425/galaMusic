import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import toplist from '@/pages/toplist/toplist'
import toplistDetail from '@/pages/toplist/toplistDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/toplist',
      name: 'toplist',
      component: toplist
    },
    {
      path: '/toplistDetail',
      name: 'toplistDetail',
      component: toplistDetail
    }
  ]
})
