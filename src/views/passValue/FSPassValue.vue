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
    <el-carousel-item>
      <Demo5></Demo5>
    </el-carousel-item>
    <el-carousel-item>
      <Demo6></Demo6>
    </el-carousel-item>
    <el-carousel-item>
      <Demo7></Demo7>
    </el-carousel-item>
    <el-carousel-item>
      <Demo8></Demo8>
    </el-carousel-item>
    <el-carousel-item>
      <Demo9></Demo9>
    </el-carousel-item>
    <el-carousel-item>
      <Demo10></Demo10>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Demo1 from './FScomponents/FatherAndSonDemo1'
import Demo2 from './FScomponents/FatherAndSonDemo2'
import Demo3 from './FScomponents/FatherAndSonDemo2-1'
import Demo4 from './FScomponents/FatherAndSonDemo2-2'
import Demo5 from './FScomponents/FatherAndSonDemo2-3'
import Demo6 from './FScomponents/FatherAndSonDemo3'
import Demo7 from './FScomponents/FatherAndSonDemo3-1'
import Demo8 from './FScomponents/FatherAndSonDemo3-2'
import Demo9 from './FScomponents/FatherAndSonDemo4'
import Demo10 from './FScomponents/FatherAndSonDemo4-1'
export default {
  components: {
    Demo1,
    Demo2,
    Demo3,
    Demo4,
    Demo5,
    Demo6,
    Demo7,
    Demo8,
    Demo9,
    Demo10
  }
}
</script>

<style scoped>
* {
  color: #475669;
  font-size: 16px;
}
</style>
