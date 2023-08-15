<template>
  <div class="son">
    <p>子组件</p>
    <p v-html="context"></p>
    <el-input v-model="context"></el-input>
  </div>
</template>

<script>
export default {
  name: 'SonComponent2',
  props: {
    num: String
  },
  data () {
    return {
      context: '<input :value="num"/>'
    }
  }
}
</script>

<style lang="less" scoped>
.son {
  width: 66%;
  height: 340px;
  float: right;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  position: relative;
  right: 1px;
}
.son .el-input {
  width: 70%;
  height: 30px;
  position: absolute;
  left: 15%;
  bottom: 20%;
}
</style>
