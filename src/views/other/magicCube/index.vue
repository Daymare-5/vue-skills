<template>
  <Cube v-if="ifShow" @reset="recover"></Cube>
</template>

<script>
import Cube from './cube'
export default {
  name: 'MagicCubeIndex',
  components: {
    Cube
  },
  data () {
    return {
      ifShow: true
    }
  },
  methods: {
    recover () {
      this.ifShow = false
      this.$nextTick(() => {
        this.ifShow = true
      })
    }
  }
}
</script>

<style>
</style>
