<template>
  <div class="father">
    <span class="title">父组件</span>
    <el-input v-model="obj.text"></el-input>
    <Son ref="mySon"></Son>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'FatherComponent4-1',
  components: {
    Son
  },
  data () {
    return {
      obj: {}
    }
  },
  mounted () {
    this.obj = this.$refs.mySon.obj
  }
}
</script>

<style scoped>
.father {
  width: 86%;
  height: 380px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
}
.title {
  position: absolute;
}
.father .el-input {
  width: 20%;
  position: absolute;
  top: 15%;
}
</style>
