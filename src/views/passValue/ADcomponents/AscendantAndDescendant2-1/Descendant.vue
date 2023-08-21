<template>
  <div class="descendant">
    <p>孙组件</p>
    <p>{{ newText }}</p>
  </div>
</template>

<script>
export default {
  name: 'DescendantComponent2-1',
  inject: ['text'],
  computed: {
    newText () {
      return this.text()
    }
  }
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
