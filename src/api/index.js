import axios from 'axios'
import qs from 'qs'
import {Message} from 'element-ui'
import router from '../router'

// 创建实例
const Axios = axios.create({
  timeout: 0,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 添加请求拦截器
Axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.data = qs.stringify(config.data)
    }
    const token = sessionStorage.getItem('tokenId') // 写死一个token，获取登录请求的
    if (token) {
      // 赋值给headers的key值：Authorization
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
Axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      if (response.data.code === 401) {
        Message.error(response.data.msg)
        router.replace('/login')
      }

      return response.data
    }
  },
  error => {
    if (error.response.status === 500) {
      return {
        code: 500,
        msg: '内部服务器错误'
      }
    }
    return Promise.resolve(error.response)
  }
)

export default Axios
