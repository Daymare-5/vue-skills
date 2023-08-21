<template>
  <div class="father">
    <span class="title">父组件</span>
    <el-input v-model="text.content"></el-input>
    <Son :context="text"></Son>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'FatherComponent2-3',
  data () {
    return {
      text: {
        content: '123'
      }
    }
  },
  components: {
    Son
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
