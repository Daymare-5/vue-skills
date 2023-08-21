<template>
  <div class="son">
    <p>子组件</p>
    <p>{{ context }}</p>
  </div>
</template>

<script>
export default {
  name: 'SonComponent1',
  props: {
    context: String
  }
}
</script>

<style scoped>
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
</style>
