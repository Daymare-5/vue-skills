<template>
  <div class="middle">
    <Descendant></Descendant>
  </div>
</template>

<script>
import Descendant from './Descendant'
export default {
  name: 'MiddleComponent1-1-2',
  components: {
    Descendant
  }
}
</script>

<style scoped>
.middle {
  width: 71%;
  height: 100%;
  float: right;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  position: relative;
  right: 1px;
}
</style>
