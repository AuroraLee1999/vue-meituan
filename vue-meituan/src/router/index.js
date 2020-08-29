import Vue from 'vue'
import Router from 'vue-router'
import DefaultPage from '@/layout/default'
import BlankPage from '@/layout/blank'
import goodList from '@/pages/goodList'
import Index from '@/pages/index'
import changeCity from '@/pages/changeCity'
import Login from '@/pages/login'
import Register from '@/pages/register'
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
      }, {
        path: '/changeCity',
        name: 'changeCity',
        component: changeCity
      }]
    }, {
      path: '/blank',
      name: 'blank',
      component: BlankPage,
      children: [{
        path: 'login',
        name: 'login',
        component: Login
      }, {
          path: 'register',
          name: 'register',
        component: Register
      }]
    }
  ]
})
