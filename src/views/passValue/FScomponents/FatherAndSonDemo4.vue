<template>
  <ShowCard title="4. 父组件修改子组件" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon4/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="text"></el-input>
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
  },
  updated () {
    this.$refs.mySon.text = this.text
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
