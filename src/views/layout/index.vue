<template>
  <el-container class="wrapper">
    <el-header class="header">
      <span>前端</span>
    </el-header>
    <el-container>
      <!-- 导航 -->
      <el-aside width="200px">
        <el-menu router unique-opened :default-active="$route.path.substring(1)">
          <el-submenu index="轮播图">
            <template slot="title">
              <i class="el-icon-film"></i><span>轮播图</span>
            </template>
            <el-menu-item index="myCarousel">自己实现</el-menu-item>
            <el-menu-item index="elementCarousel">element组件</el-menu-item>
          </el-submenu>
          <el-submenu index="组件传值">
            <template slot="title">
              <i class="el-icon-sort"></i><span>组件传值</span>
            </template>
            <el-menu-item index="fsPassValue">父子组件</el-menu-item>
            <el-menu-item index="1-4">非父子组件</el-menu-item>
          </el-submenu>
          <el-submenu index="表格应用">
            <template slot="title">
              <i class="el-icon-s-grid"></i><span>表格应用</span>
            </template>
            <el-menu-item index="mutipleColumnSort">多列排序</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 路由 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutIndex'
}
</script>

<style scoped>
.wrapper {
  width: 1200px;
  height: 730px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  text-align: center;
  line-height: 1.5;
  font-size: 30px;
  border-bottom: 1px solid #ccc;
}
</style>
