<template>
  <el-menu :default-active="menu.active" active-text-color="#3f94f6" router unique-opened @select="selectMenu" @open="openSubMenu">
    <div v-for="(item, index) in menuList" :key="index">
      <el-submenu v-if="item.submenu" :index="item.index">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item v-for="(obj, index) in item.submenu" :key="index" :index="obj.index">{{obj.name}}</el-menu-item>
      </el-submenu>
      <el-menu-item v-else :index="item.index">
        <i class="el-icon-document"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script>
  export default {
    name: 'kMenu',
    data () {
      return {
        menuList: [{
          name: '首页',
          index: '/home'
        }, {
          name: 'test1',
          index: '/home',
          submenu: [
            {index: '/home', name: 'test1-1'},
            {index: '/home', name: 'test1-2'},
          ]
        }, {
          name: 'test2',
          index: '/home'
        }],
        menu: {
          active: '' // 默认首页
        }
      }
    },
    computed: {
      meauActiveName () {
        return this.$store.state.meauActiveName
      }
    },
    watch: {
      // 监听vuex中值的变化
      meauActiveName: function (val) {
        this.menu.active = val
      }
    },
    created () {
      let arr = []
      for (let i of this.menuList) {
        if (i.submenu) {
          for (let j of i.submenu) {
            arr.push(j.index)
          }
        } else {
          arr.push(i.index)
        }
      }
      this.$store.state.meauMainPathArr = arr

      this.menu.active = this.$route.path
      if (sessionStorage.getItem('menuActive')) {
        this.menu.active = sessionStorage.getItem('menuActive')
      }
    },
    methods: {
      // 打开子菜单
      openSubMenu (index) {
        this.selectMenu(index)
        this.$router.push(index)
      },
      // 菜单激活回调
      selectMenu (index) {
        this.menu.active = index
        sessionStorage.setItem('menuActive', index)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .el-menu {
    border-right: none;
    background-color: transparent;
  }

  .el-menu-item:hover,
  .el-menu-item:focus {
    background-color: #e6e9f0;
  }
</style>
