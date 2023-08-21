<template>
  <ShowCard title="3-2. 父组件访问子组件(响应式)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon3-2/Father'
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
  },
  updated () {
    this.$parent.text = this.text
  }
}`
    }
  }
}
</script>

<style>
</style>
