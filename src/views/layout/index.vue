<template>
  <el-container class="wrapper" :style="{width: devicePixelRatio === '2' ? PEWidth : PCWidth}">
    <el-header class="header">
      <span>前端</span>
    </el-header>
    <el-container>
      <!-- 导航 -->
      <el-aside :width="devicePixelRatio === '2' ? PESideWidth : PCSideWidth">
        <el-menu router unique-opened :default-active="$route.path.substring(1)" :collapse="devicePixelRatio === '2' ? true : false">
          <el-submenu v-if="devicePixelRatio !== '2' ? true : false" index="轮播图">
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
            <el-menu-item index="adPassValue">祖孙组件</el-menu-item>
            <el-menu-item index="nfsPassValue">非父子组件</el-menu-item>
          </el-submenu>
          <el-submenu index="ElementUI应用">
            <template slot="title">
              <i class="el-icon-eleme"></i><span>ElementUI应用</span>
            </template>
            <el-menu-item index="mutipleColumnSort">表格多列排序</el-menu-item>
            <el-menu-item index="datePicker">日期选择器限制</el-menu-item>
          </el-submenu>
          <el-menu-item index="lazyLoad">
            <i class="el-icon-smoking"></i>
            <span slot="title">图片懒加载</span>
          </el-menu-item>
          <el-submenu index="其它">
            <template slot="title">
              <i class="el-icon-s-order"></i><span>其它</span>
            </template>
            <el-menu-item index="magicCube">魔方</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 路由 -->
      <el-main>
        <keep-alive><router-view></router-view></keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'LayoutIndex',
  provide () {
    return {
      devicePixelRatio: this.devicePixelRatio
    }
  },
  data () {
    return {
      devicePixelRatio: '',
      PCSideWidth: '16%',
      PESideWidth: '18%',
      PCWidth: '1200px',
      PEWidth: '95%'
    }
  },
  created () {
    this.devicePixelRatio = window.devicePixelRatio.toFixed(0)
  }
}
</script>

<style scoped>
.wrapper {
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
