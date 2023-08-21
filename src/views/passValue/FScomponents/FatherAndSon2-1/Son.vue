<template>
  <div class="son">
    <p>子组件</p>
    <el-input :value="value" @input="changeValue"></el-input>
  </div>
</template>

<script>
export default {
  name: 'SonComponent2-1',
  props: {
    value: String
  },
  methods: {
    changeValue (e) {
      this.$emit('input', e)
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
  width: 30%;
  height: 30px;
  position: absolute;
  left: 35%;
  top: 20%;
}
</style>
