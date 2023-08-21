<template>
  <ShowCard title="1. 父组件传递给子组件" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon1/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="text"></el-input>
<Son :context="text"></Son>

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
      sonCode: `<p>{{ context }}</p>
      
export default {
  props: {
    context: String
  }
}`
    }
  }
}
</script>

<style>
</style>
