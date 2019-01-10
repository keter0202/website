import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import common from './utils/common'
import './plugins/element.js'

import './assets/reset.scss'

import vuescroll from 'vuescroll'

Vue.use(common)
Vue.use(vuescroll)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let arr = store.state.meauMainPathArr // 左侧导航栏路由
  for (let i in arr) {
    // 如果跳转的路由地址等于左侧导航栏的某一地址
    if (to.path === arr[i]) {
      store.state.meauActiveName = arr[i] // 更改vuex中的值，以便监听变化
      sessionStorage.setItem('menuActive', arr[i]) // 更新session中存的路径
      break
    }
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
