<template>
  <div class="middle">
    <Descendant :content="middle"></Descendant>
  </div>
</template>

<script>
import Descendant from './Descendant'
export default {
  name: 'MiddleComponent1',
  components: {
    Descendant
  },
  props: ['middle']
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
