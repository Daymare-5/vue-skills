<template>
  <ShowCard title="1. 祖组件传递给孙组件(多次父子传递)" fatherTitle="祖组件" sonTitle="孙组件" :fatherCode="code1" :sonCode="code2" :middle="true" :middleCode="middleCode">
    <template #body>
      <Ascendant></Ascendant>
    </template>
  </ShowCard>
</template>

<script>
import Ascendant from './AscendantAndDescendant1/Ascendant'
export default {
  components: {
    Ascendant
  },
  data () {
    return {
      code1: `<el-input v-model="text"></el-input>
<Middle :middle="text"></Middle>

import Middle from './Middle'
export default {
  components: {
    Middle
  },
  data () {
    return {
      text: '123'
    }
  }
}`,
      code2: `<p>{{ content }}</p>

export default {
  props: ['content']
}`,
      middleCode: `<Descendant :content="middle"></Descendant>

import Descendant from './Descendant'
export default {
  components: {
    Descendant
  },
  props: ['middle']
}`
    }
  }
}
</script>

<style>
</style>
