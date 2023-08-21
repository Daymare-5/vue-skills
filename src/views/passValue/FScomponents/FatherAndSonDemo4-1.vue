<template>
  <ShowCard title="4-1. 父组件修改子组件(对象)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon4-1/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="obj.text"></el-input>
<Son ref="mySon"></Son>

import Son from './Son'
export default {
  components: {
    Son
  },
  data () {
    return {
      obj: {}
    }
  },
  mounted () {
    this.obj = this.$refs.mySon.obj
  }
}`,
      sonCode: `<el-input v-model="text"></el-input>

export default {
  data () {
    return {
      obj: {
        text: '123'
      }
    }
  }
}`
    }
  }
}
</script>

<style>
</style>
