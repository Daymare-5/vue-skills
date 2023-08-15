<template>
  <div>
    <span class="title">基于ElementUI的轮播图</span>
    <el-carousel height="500px" :interval="interval">
      <el-carousel-item v-for="item in list" :key="item.id">
        <h3>{{ item.name }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { id: 1, name: '第一张' },
        { id: 2, name: '第二张' },
        { id: 3, name: '第三张' },
        { id: 4, name: '第四张' }
      ],
      total: 4,
      interval: 1000
    }
  }
}
</script>

<style scoped>
.title {
  color: #475669;
  font-size: 16px;
}
.el-carousel {
  margin-top: 20px;
}
.el-carousel__item h3 {
  margin: 0;
  color: #475669;
  opacity: 0.75;
  line-height: 40px;
  text-align: center;
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
