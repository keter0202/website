<template>
  <el-container>
    <el-aside width="200px">
      <vue-scroll :ops="ops">
        <div class="logo">
          <img src="@/assets/logo.png" width="63" height="63" alt="aitelife">
        </div>
        <k-menu/>
      </vue-scroll>
    </el-aside>
    <el-container>
      <el-header>
        <el-row type="flex" justify="space-between" align="middle">
          <el-col :span="12">
            <bread-crumb/>
          </el-col>
          <el-col :span="8" class="text-right">
            <el-button @click="logout" type="text">退出</el-button>
          </el-col>
        </el-row>
      </el-header>
      <vue-scroll :ops="ops">
        <el-main>
          <router-view/>
        </el-main>
      </vue-scroll>
    </el-container>
  </el-container>
</template>

<script>
  import kMenu from '@/components/layout/kMenu'
  import breadCrumb from '@/components/layout/breadCrumb'

  export default {
    name: 'Layout',
    components: {
      // eslint-disable-next-line
      kMenu,
      // eslint-disable-next-line
      breadCrumb
    },
    data () {
      return {
        ops: {
          scrollPanel: {
            scrollingX: false
          },
          rail: {
            vRail: {
              width: '6px',
              opacity: 1,
              background: '#f2f2f2'
            }
          },
          bar: {
            vBar: {
              keepShow: false,
              background: '#c6c6c6'
            }
          }
        }
      }
    },
    methods: {
      // 登出css
      logout () {
        console.log('登出')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-aside {
    height: 100%;
    border-right: solid 1px #e6e9f0;
    background-color: #f5f7fa;
  }

  .logo {
    padding-top: 43px;
    padding-bottom: 34px;
    text-align: center;
  }

  .el-header {
    border-bottom: 1px solid #e6e9f0;
  }

  .el-row {
    height: 60px;
  }

  .user-center li a {
    display: block;
    text-align: center;
    font-size: 16px;
    line-height: 28px;
    &:hover {
      color: $blue;
    }
  }

  .text-right{
    button{
      float: right;
    }
  }

  /deep/ .vuescroll-content{
    width: 100% !important;
    height: 100% !important;
  }
</style>
