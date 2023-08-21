<template>
  <ShowCard title="2. 子组件修改父组件" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon2/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="text"></el-input>
<Son :context="text" @changeText="handleChange"></Son>

import Son from './Son'
export default {
  data () {
    return {
      text: '123'
    }
  },
  components: {
    Son
  },
  methods: {
    handleChange (e) {
      this.text = e
    }
  }
}`,
      sonCode: `<!-- <el-input v-model="context"></el-input> -->
<el-input :value="context" @input="changeContext"></el-input>

export default {
  props: {
    context: String
  },
  methods: {
    changeContext (e) {
      this.$emit('changeText', e)
    }
  }
}`
    }
  }
}
</script>

<style>
</style>
