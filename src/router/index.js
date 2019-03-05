import Vue from 'vue'
import Router from 'vue-router'

import layout from '@/components/layout/index'

import home from '@/views/home/index' // 首页
import login from '@/views/login/index' // 登录
import test from '@/views/test/classify'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: layout,
      redirect: 'home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: home
        }
      ]
    }, {
      path: '/login',
      name: 'login',
      component: login
    }, {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
