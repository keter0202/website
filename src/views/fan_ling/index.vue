<template>
  <div class="fan-ling" :style="{width: width, height: height}">
    <!-- 内容 -->
    <el-row v-if="view.viewBool">
      <el-row class="top">
        <el-col :span="12">
          <el-row>
            <el-col :span="24">
              <div class="logo">
                <img src="../../assets/avatar_fl.jpg">
              </div>
              <p class="title">期待2022北京冬奥会</p>
              <div class="all-button">
                <k-button message="photos"></k-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="12">
          <el-row v-if="isBirth">
            生日快乐
          </el-row>
          <el-row v-else>
            aaaaaa
          </el-row>
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
      isBirth: false
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
        let w = window.innerWidth
        let h = window.innerHeight
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
      background-color: rgba(255, 255, 255, 0.3);
      padding: 4px;
      border-radius: 50%;
      img{
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        transition: all .8s;
        cursor: pointer;
        &:hover{
          transform: rotateY(180deg);
        }
      }
    }
    .title{
      margin: 0;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #fff;
    }
    .all-button{
      width: 100px;
      height: auto;
      margin: 0 auto;
    }
  }
}
</style>
