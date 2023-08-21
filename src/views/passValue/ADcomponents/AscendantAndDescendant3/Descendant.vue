<template>
  <div class="descendant">
    <p>孙组件</p>
    <p>{{ obj.text }}</p>
    <el-input v-model="obj.text"></el-input>
  </div>
</template>

<script>
export default {
  name: 'DescendantComponent1-1-2',
  inject: ['obj']
}
</script>

<style scoped>
.descendant {
  width: 84%;
  height: 78%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
.descendant .el-input {
  width: 30%;
  height: 30px;
  position: absolute;
  left: 35%;
  top: 35%;
}
</style>
