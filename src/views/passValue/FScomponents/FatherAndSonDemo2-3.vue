<template>
  <ShowCard title="2-3. 子组件修改父组件(终极方案)" :fatherCode="fatherCode" :sonCode="sonCode">
    <template #body>
      <Father></Father>
    </template>
  </ShowCard>
</template>

<script>
import Father from './FatherAndSon2-3/Father'
export default {
  components: {
    Father
  },
  data () {
    return {
      fatherCode: `<el-input v-model="text.content"></el-input>
<Son :context="text"></Son>

import Son from './Son'
export default {
  data () {
    return {
      text: {
        content: '123'
      }
    }
  },
  components: {
    Son
  }
}`,
      sonCode: `<el-input v-model="obj.content"></el-input>

export default {
  props: {
    context: Object
  },
  data () {
    return {
      obj: this.context
    }
  }
}`
    }
  }
}
</script>

<style>
</style>
