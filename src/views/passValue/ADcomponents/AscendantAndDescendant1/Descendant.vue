<template>
  <div class="descendant">
    <p>孙组件</p>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  name: 'DescendantComponent1',
  props: ['content']
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
</style>
