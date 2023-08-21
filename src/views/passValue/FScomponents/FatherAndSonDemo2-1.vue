<template>
  <ShowCard title="2-1. 子组件修改父组件(v-model简化)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon2-1/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="text"></el-input>
<Son v-model="text"></Son>

import Son from './Son'
export default {
  data () {
    return {
      text: '123'
    }
  },
  components: {
    Son
  }
}`,
      sonCode: `<el-input :value="value" @input="changeValue"></el-input>

export default {
  props: {
    value: String
  },
  methods: {
    changeValue (e) {
      this.$emit('input', e)
    }
  }
}`
    }
  }
}
</script>

<style>
</style>
