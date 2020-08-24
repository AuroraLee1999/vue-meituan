import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'
import goodList from '@/pages/goodList'
import Index from '@/pages/index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: DefaultPage,
      children: [{
        path: 's/:name',
        name: 'goods',
        component: goodList
      }, {
        path: '/index',
        name: 'index',
        component: Index
      }]
    }, {
      path: '/blank',
      name: 'blank',
      component: BlankPage
    }
  ]
})
