<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="(item, index) in breadcrumbList" :key="index" :class="{'breadcrumb-box': item.path}">
        <i v-if="item.icon" class="iconfont" :class="item.icon"></i>
        <span @click="goLink(item, index, breadcrumbList.length)">{{item.name}}</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
  export default {
    name: 'breadCrumb',
    data () {
      return {}
    },
    computed: {
      breadcrumbList () {
        return this.$store.state.breadcrumbs
      }
    },
    methods: {
      /**
       * 点击面包屑
       * @param item   当前点击数据
       * @param index  当前对象的下标
       * @param length 数组长度
       */
      goLink (item, index, length) {
        if (typeof item.path === 'number') {
          this.$router.go(item.path)
        } else if (typeof item.path === 'function') {
          item.path()
        } else {
          if (item.params) {
            if (item.type === 'query' || item.type === undefined || item.type === '') {
              this.$router.push({path: item.path, query: item.params})
            } else if (item.type === 'params') {
              this.$router.push({name: item.routeName, params: item.params})
            }
          } else {
            // 如果当前点击的不是面包屑最后一个
            if (index < length - 1) {
              this.$router.push({path: item.path})
            }
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-breadcrumb {
    line-height: 60px;
  }
  /deep/ .breadcrumb-box .el-breadcrumb__inner {
    font-weight: bold;
  }
  /deep/ .breadcrumb-box .el-breadcrumb__inner:hover{
    color: #409eff;
    font-weight: bold;
    cursor: pointer;
  }
</style>
