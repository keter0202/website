<template>
  <div class="fan-ling" :style="{width: width, height: height}">
    <!-- 内容 -->
    <el-row v-if="view.viewBool">
      <el-row class="top">
        <el-col :span="12">
          <div class="logo">
            <img src="../../assets/avatar_fl.jpg" @click="changeLogo" :class="{'active': changeLogoBool}">
          </div>
        </el-col>
        <el-col :span="12">
          <div v-if="isBirth" class="title">生日是谁，我不管它快不快乐，我只希望你快乐</div>
          <div v-else class="title">Today is not your birthday~</div>
        </el-col>
      </el-row>
      <el-row class="middle">
        <el-col :span="24" v-if="isBirth">
          <div>哈哈 还是祝你：</div>
          <div class="text-in">越长越帅</div>
          <div class="text-in">像个250</div>
          <div class="text-in">多读书,多看报,少吃零食,多睡觉</div>
          <div class="text-in">幸运常伴你左右</div>
          <div class="text-in">是披荆斩棘的女英雄，也是被人疼爱的小朋友</div>
          <div class="text-in">......</div>
          <div>以上。</div>
        </el-col>
        <el-col :span="24" class="k-content" v-else>期待2011，等待2022北京冬奥会<br >心之所向，梦之所往...</el-col>
      </el-row>
      <el-row class="middle" v-if="isBirth">
        <el-col :span="24">
          <img src="../../assets/birth.png" alt="">
        </el-col>
      </el-row>
    </el-row>
    <!-- 验证密码弹窗 -->
    <el-dialog
      title="请输入密码"
      :visible.sync="view.isShow"
      width="30%">
      <el-input v-model="view.password"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="checkPassword">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import kButton from '@/views/fan_ling/k_button'

export default {
  name: 'fanLing',
  components: {
    // eslint-disable-next-line
    kButton
  },
  data () {
    return {
      view: { // 视图控制
        viewBool: true,
        isShow: false,
        password: ''
      },
      width: null, // 宽度
      height: null, // 高度
      timer: true, // 屏幕高宽控制
      isBirth: false,
      arrList: [],
      changeLogoBool: false
    }
  },
  created () {
    this.getWidthheight()
    this.getDate()
  },
  mounted () {
    // 监听窗口变化
    window.onresize = () => {
      this.getWidthheight()
    }
  },
  methods: {
    // 获取浏览器高度宽度
    getWidthheight () {
      if (this.timer) {
        this.timer = false
        let w = document.querySelector('body').clientWidth
        let h = document.querySelector('body').clientHeight
        this.width = w + 'px'
        this.height = h + 'px'
        setTimeout(() => {
          this.timer = true
        }, 400)
      }
    },
    // 获取时间
    getDate () {
      let date = new Date()
      let m = date.getMonth() + 1 > 10 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
      let d = date.getDate() > 10 ? date.getDate() : '0' + date.getDate()
      let now = m + '-' + d
      if (now === '11-27') {
        this.isBirth = true
      } else {
        this.isBirth = false
      }
    },
    changeLogo () {
      this.changeLogoBool = !this.changeLogoBool
    },
    // 检查密码
    checkPassword () {
      if (this.view.password === 'fl') {
        this.view.isShow = false
        this.view.viewBool = true
      } else {
        this.$message({
          message: '输入错误了哦~',
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fan-ling{
  // width: 100%;
  // height: auto;
  font-size: 14px;
  background-color: #0d3b6c;
  overflow: hidden;
  .top{
    margin-top: 40px;
    .logo{
      width: 80px;
      height: 80px;
      margin: 0 auto;
      border-radius: 50%;
      img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: all .8s;
        cursor: pointer;
        &.active{
          transform: rotateY(180deg);
        }
      }
    }
    .title{
      width: 100%;
      height: 80px;
      // line-height: 80px;
      color: #fff;
      word-wrap: break-word;
    }
  }
  .middle{
    width: 80%;
    margin: 40px auto;
    color: #fff;
    .text-in{
      text-indent: 2em;
      line-height: 30px;
    }
    img{
      display: block;
      width: 100px;
      height: 100px;
      margin: 0 auto;
      animation: birthMOve 3s;
      animation-iteration-count: infinite;
    }
    .k-content{
      line-height: 80px;
    }
  }
}
@keyframes birthMOve {
  0% {transform: translateY(0);}
  50% {transform: translateY(20px);}
  100% {transform: translateY(0);}
}
</style>
