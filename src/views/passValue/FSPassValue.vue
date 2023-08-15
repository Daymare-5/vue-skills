<template>
  <el-carousel height="600px" indicator-position="none" :autoplay="autoplay">
    <el-carousel-item>
      <Demo1></Demo1>
    </el-carousel-item>
    <el-carousel-item>
      <Demo2></Demo2>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import Demo1 from './components/FatherAndSonDemo1'
import Demo2 from './components/FatherAndSonDemo2'
export default {
  data () {
    return {
      autoplay: false
    }
  },
  components: {
    Demo1,
    Demo2
  }
}
</script>

<style scoped>
* {
  color: #475669;
  font-size: 16px;
}
</style>
