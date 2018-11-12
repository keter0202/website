<template>
  <div class="myself" :style="{width: width, height: height}">
    <el-row>
      <el-col :span="12">
        <div class="logo">
          <img src="@/assets/avatar_lh.jpg" alt="">
        </div>
        <div class="message">
          变强<br >
          寻找灵性
        </div>
      </el-col>
      <el-col :span="12">
        <div class="all-music-logo">
          <img src="@/assets/music-1.png" :class="{'active-1': animateBool}">
          <img src="@/assets/music-2.png" :class="{'active-2': animateBool}">
          <img src="@/assets/music-1.png" :class="{'active-1': animateBool}">
          <img src="@/assets/music-2.png" :class="{'active-2': animateBool}">
          <img src="@/assets/music-1.png" :class="{'active-1': animateBool}">
          <img src="@/assets/music-2.png" :class="{'active-2': animateBool}">
        </div>
        <div class="all-button">
          <img src="@/assets/play.png" alt="播放" @click="play">
          <img src="@/assets/stop.png" alt="暂停" @click="pause">
          <img src="@/assets/reset.png" alt="暂停" @click="reset">
        </div>
      </el-col>
    </el-row>
    <audio ref="xznl" v-show="false">
      <source src="@/assets/xinzhinilin.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'myself',
  data () {
    return {
      width: null, // 宽度
      height: null, // 高度
      timer: true, // 屏幕高宽控制
      animateBool: false
    }
  },
  created () {
    this.getWidthheight()
  },
  mounted () {
    // 监听窗口变化
    window.onresize = () => {
      this.getWidthheight()
    }
  },
  methods: {
    // 播放
    play () {
      this.$refs.xznl.play()
      this.animateBool = true
    },
    // 暂停
    pause () {
      this.$refs.xznl.pause()
      this.animateBool = false
    },
    // 重置
    reset () {
      this.$refs.xznl.currentTime = 0
      this.$refs.xznl.play()
      this.animateBool = true

    },
    // 获取浏览器高度宽度
    getWidthheight () {
      if (this.timer) {
        this.timer = false
        let w = window.innerWidth
        let h = window.innerHeight
        this.width = w + 'px'
        this.height = h + 'px'
        setTimeout(() => {
          this.timer = true
        }, 400)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.myself{
  // width: 100%;
  // height: auto;
  font-size: 14px;
  background-color: #0d3b6c;
  overflow: hidden;
  .logo{
    width: 80px;
    height: 80px;
    margin: 20% auto 0;
    border-radius: 50%;
    img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
  }
  .message{
    width: 100px;
    margin: 20px auto;
    line-height: 40px;
    text-align: center;
    color: #fff;
  }
  .all-music-logo{
    width: 50%;
    margin: 30% 0 0;
    img{
      width: 25px;
      height: 25px;
      display: inline-block;
      transition: all .5s;
      margin-right: 5px;
      &:nth-child(2n){
        transform: translateY(10px);
      }
      &.active-1{
        animation: myfirst 2s;
        animation-iteration-count: infinite;
      }
      &.active-2{
        animation: mysecond 2s;
        animation-iteration-count: infinite;
      }
    }
  }
  .all-button{
    width: 50%;
    margin: 10% 0 0;
    img{
      width: 25px;
      height: 25px;
      display: inline-block;
      margin-right: 50px;
      cursor: pointer;
      border-radius: 50%;
      &:hover{
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
  }
}
@keyframes myfirst {
  0% {transform: translateY(0);}
  50% {transform: translateY(10px);}
  100% {transform: translateY(0);}
}
@keyframes mysecond {
  0% {transform: translateY(10px);}
  50% {transform: translateY(0);}
  100% {transform: translateY(10px);}
}
</style>
