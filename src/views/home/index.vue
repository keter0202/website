<template>
  <div class="home">
    <p>
      {{note1}}
    </p>
    <p>
      {{note2}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  inject: ['reload'], // 注入依赖，刷新当前页面
  data () {
    return {
      note1: '那美好的仗我已经打完了，应行的路我已行尽了，当守的道我守住了',
      note2: '从此以后，有公义的冠冕为你留存'
    }
  },
  created () {
    let arr = []
    arr = [
      {
        name: '首页',
        link: '/home'
      }
    ]
    this.breadcrumb(arr)
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: auto;
  p{
    margin: 50px auto;
    width: 400px;
    height: auto;
    line-height: 30px;
    text-indent: 2em;
  }
}
</style>
