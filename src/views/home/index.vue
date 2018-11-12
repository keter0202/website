<template>
  <div class="home">
    {{note}}
  </div>
</template>

<script>
export default {
  name: 'Home',
  inject: ['reload'], // 注入依赖，刷新当前页面
  data () {
    return {
      note: '那美好的仗我已经打完了，应行的路我已行尽了，当守的道我守住了。从此以后，有公义的冠冕为你留存'
    }
  }
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: auto;
}
</style>
