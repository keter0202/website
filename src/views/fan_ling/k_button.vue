<template>
  <div class="k-button">
    <div class="item">
      <span>{{message}}</span>
      <span class="arrow">&#62;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'kButton',
  props: {
    message: {
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.k-button{
  width: 100%;
  height: 100%;
  .item{
    position: relative;
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    .arrow{
      position: absolute;
      top: 50%;
      right: 20px;
      display: block;
      width: 10px;
      height: 10px;
      line-height: 10px;
      text-align: center;
      margin-top: -5px;
      opacity: 0;
      transition: all .6s;
      transform: translateX(-10px);
    }
    &:hover{
      text-decoration: underline;
      .arrow{
        opacity: 1;
        transform: translateX(10px);
      }
    }
  }
}
</style>
