<template>
  <ShowCard title="3-1. 父组件访问子组件($refs)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon3-1/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<p>{{ text }}</p>
<Son ref="mySon"></Son>

import Son from './Son'
export default {
  components: {
    Son
  },
  data () {
    return {
      text: ''
    }
  },
  mounted () {
    this.text = this.$refs.mySon.text
  }
}`,
      sonCode: `<el-input v-model="text"></el-input>

export default {
  data () {
    return {
      text: '123'
    }
  }
}`
    }
  }
}
</script>

<style>
</style>
