<template>
  <div class="login-content-box">
    <!-- 登录内容 -->
    <div class="login-content">
      <div class="login-logo">
        <img src="@/assets/logo.png" alt="vue">
      </div>
      <p>后台管理系统</p>
      <!-- 密码输入框 -->
      <div class="login-input-wrap" style="margin-bottom: 60px;">
        <span :class="{'input-title': focusStatus === '0'}" v-if="isShowNameTitle">账号</span>
        <br>
        <input v-model="name" :class="{'input-txt': focusStatus === '0'}" @keyup.enter="login" type="text" maxlength="11" @focus="inputFocus('0')" @blur="inputBlur('0')">
      </div>
      <div class="login-input-wrap">
        <span :class="{'input-title': focusStatus === '1'}" v-if="isShowPwdTitle">密码</span>
        <br>
        <input v-model="password" :class="{'input-txt': focusStatus === '1'}" @keyup.enter="login" type="password" @focus="inputFocus('1')" @blur="inputBlur('1')">
      </div>
      <!-- 登录按钮 -->
      <el-button type="primary" plain :loading="isLoading" @click="login" style="margin-top: 60px;">登录</el-button>
      <br>
    </div>
  </div>
</template>

<script>
  import {
    goLogin
  } from '@/api/login/index' // 登录请求接口
  let messageObj // 提示信息

  export default {
    name: 'Login',
    data () {
      return {
        'Base64': require('js-base64').Base64, // Base64 加密
        name: '', // 账户
        password: '', // 密码
        focusStatus: '', // 聚焦
        isShowNameTitle: true, // 是否显示电话标题
        isShowPwdTitle: true, // 是否显示密码标题
        isLoading: false, // 登录loading
        dialogVisible: false // 是否显示错误弹窗
      }
    },
    created () {
      sessionStorage.clear()
    },
    methods: {
      // 登录
      login () {
        if (this.name === '' || this.name === undefined) {
          // 验证账号是否未填写
          messageObj = {
            content: '请输入账号'
          }
          this.messageTip(messageObj)
          return
        }
        if (this.password === '' || this.password === undefined) {
          // 验证密码是否未填写
          messageObj = {
            content: '请输入密码'
          }
          this.messageTip(messageObj)
          return
        }
        this.isLoading = true // 开启加载状态
        goLogin(this.name, this.password).then(res => {
          console.log(res, '登录')
          if (res.code === 200) {
            let saveToken = res.data.token
            sessionStorage.setItem('tokenId', saveToken)
            this.$router.replace({path: '/'})
          } else {
            this.messageTip({
              content: res.msg
            })
            this.isLoading = false // 关闭加载状态
          }
        })
      },
      /**
       * 输入框聚焦
       * @param type 0为账号输入框，1为密码输入框
       */
      inputFocus (type) {
        this.focusStatus = type
        type === '0' && this.password.length > 0 ? this.isShowPwdTitle = false : this.isShowPwdTitle = true
        type === '1' && this.name.length > 0 ? this.isShowNameTitle = false : this.isShowNameTitle = true
      },
      /**
       * 输入框失去焦点
       * @param type 0为手机号输入框，1为密码输入框
       */
      inputBlur (type) {
        this.focusStatus = ''
        if (this.name.length > 0 && type === '0') {
          this.isShowNameTitle = false
        }
        if (this.password.length > 0 && type === '1') {
          this.isShowPwdTitle = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-content-box {
    position: relative;
    text-align: center;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background: url('../../assets/logo_bg.png') no-repeat;
    -webkit-background-size: auto 100%;
    background-size: auto 100%;
    background-attachment: fixed;
    .login-content {
      width: 344px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .login-logo img {
        width: 35px;
      }
      > p {
        -webkit-margin-before: 0;
        -webkit-margin-after: 0;
        margin-top: 14px;
        font-size: 20px;
        color: rgba(34, 34, 34, 1);
        font-weight: bold;
        margin-bottom: 90px;
      }
    }
    .login-input-wrap {
      width: 100%;
      text-align: left;
      > span {
        font-size: 14px;
        color: rgba(153, 153, 153, 1);
        position: relative;
        top: 20px;
        left: 5px;
        z-index: -1;
      }
      > input {
        width: inherit;
        border: none;
        outline: none;
        border-bottom: 1px solid rgba(216, 216, 216, 1);
        padding: 0 0 14px 5px;
        color: rgba(153, 153, 153, 1);
        background: rgba(255, 255, 255, 0);
      }
    }
  }

  /* 提示框标题 */
  .el-dialog__title {
    font-size: 24px;
  }

  /* 输入框聚焦 start */
  .input-title {
    transition: all 0.2s linear;
    color: rgba(64, 148, 246, 1) !important;
    top: -14px !important;
  }

  .input-txt {
    transition: all 0.2s linear;
    color: rgba(64, 148, 246, 1) !important;
    border-bottom: 1px solid rgba(64, 148, 246, 1) !important;
  }
  /* 输入框聚焦 end */

  /* button start */
  .el-button--primary.is-plain {
    color: rgba(255, 255, 255, 1);
    background: rgba(64, 148, 246, 0.54);
    width: 192px;
    height: 48px;
    border-radius: 100px;
    margin-bottom: 36px;
    border: none;
    outline: none;
  }

  .el-button--primary.is-plain:hover {
    background: rgba(64, 148, 246, 1);
  }
  /* button end */
</style>
