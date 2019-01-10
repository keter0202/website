import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    defaultImg: require('@/assets/default.png'), // 无上传图片时的默认路径
    /**
     * 面包屑
     * 为一个数组例子如下
     * [{
     *  name: ''       各级面包屑名称
     *  icon: ''       图标，一级才写
     *  path: ''       各级面包屑跳转地址，最后一级不写；
     *                  path可为字符串，表示跳转路径
     *                  path可为负数，number，如path: -1；表示history.go( 负数 ) 跳转；
     *                  path可为函数
     *  type: ''        类型为query或params两种, 有参数时才写，不传或传空默认query
     *  params: {}      跳转地址所带参数，有参数才写
     *  routeName: ''   路由名称，type为params时才传
     * }]
     */
    breadcrumbs: [],
    meauActiveName: '', // 菜单导航高亮
    meauMainPathArr: [], // 菜单路径数组
  },
  mutations: {

  },
  actions: {

  }
})
