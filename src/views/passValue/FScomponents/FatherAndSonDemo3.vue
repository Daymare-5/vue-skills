<template>
  <ShowCard title="3. 父组件访问子组件($children)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon3/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<p>{{ text }}</p>
<Son></Son>

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
    this.text = this.$children[0].text
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
