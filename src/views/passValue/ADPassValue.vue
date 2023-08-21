<template>
  <el-carousel height="600px" indicator-position="none" :autoplay="false">
    <el-carousel-item>
      <Demo1></Demo1>
    </el-carousel-item>
    <el-carousel-item>
      <Demo2></Demo2>
    </el-carousel-item>
    <el-carousel-item>
      <Demo3></Demo3>
    </el-carousel-item>
    <el-carousel-item>
      <Demo4></Demo4>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Demo1 from './ADcomponents/AscendantAndDescendantDemo1'
import Demo2 from './ADcomponents/AscendantAndDescendantDemo2'
import Demo3 from './ADcomponents/AscendantAndDescendantDemo2-1'
import Demo4 from './ADcomponents/AscendantAndDescendantDemo2-2'
export default {
  components: {
    Demo1,
    Demo2,
    Demo3,
    Demo4
  }
}
</script>

<style scoped>
* {
  color: #475669;
  font-size: 16px;
}
</style>
