<template>
  <div class="father">
    <span class="title">父组件</span>
    <p>{{ text }}</p>
    <Son></Son>
  </div>
</template>

<script>
import Son from './Son'
export default {
  name: 'FatherComponent3',
  components: {
    Son
  },
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.text = this.$children[0].text
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
.father p {
  width: 20%;
  position: absolute;
  top: 10%;
}
</style>
