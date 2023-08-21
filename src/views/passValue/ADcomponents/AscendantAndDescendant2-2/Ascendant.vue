<template>
  <div class="ascendant">
    <span class="title">祖组件</span>
    <el-input v-model="obj.text"></el-input>
    <Middle></Middle>
  </div>
</template>

<script>
import Middle from './Middle'
export default {
  name: 'AscendantComponent2-2',
  components: {
    Middle
  },
  provide () {
    return {
      obj: this.obj
    }
  },
  data () {
    return {
      obj: {
        text: '123'
      }
    }
  }
}
</script>

<style scoped>
.ascendant {
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
.el-input {
  width: 20%;
  position: absolute;
  top: 15%;
}
</style>
