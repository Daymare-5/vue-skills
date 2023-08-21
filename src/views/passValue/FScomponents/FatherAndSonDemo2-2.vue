<template>
  <ShowCard title="2-2. 子组件修改父组件(.sync简化)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon2-2/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="text"></el-input>
<Son :context.sync="text"></Son>

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
      sonCode: `<el-input :value="context" @input="changeContext"></el-input>

export default {
  props: {
    context: String
  },
  methods: {
    changeContext (e) {
      this.$emit('update:context', e)
    }
  }
}`
    }
  }
}
</script>

<style>
</style>
