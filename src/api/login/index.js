import Axios from '@/api/index'

// 登录
function goLogin (name, pswd) {
  let obj = {
    username: name,
    password: pswd
  }
  return Axios({
    url: '/ajaxLogin',
    method: 'post',
    data: obj
  })
}

// 登出
function loginOut () {
  return Axios({
    url: '/logout',
    method: 'get'
  })
}

export {
  goLogin,
  loginOut
}
