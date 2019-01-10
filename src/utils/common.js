export default {
  install (Vue) {
    // 提示信息
    Vue.prototype.messageTip = function (obj) {
      this.$message({
        showClose: true, // 是否显示关闭按钮 默认显示
        message: obj.content || '', // 提示信息
        type: obj.type || 'error', // 提示类型 error-错误，warning-警告，success-成功，info-消息
        duration: obj.duration || 3000, // 默认显示时间
        center: obj.center || false, // 是否居中显示 boolean
        onClose: obj.fun || null // 关闭按钮时的回调函数
      })
    }
    // 面包屑
    Vue.prototype.breadcrumb = function (arr) {
      this.$store.state.breadcrumbs = arr
    }
  }
}
