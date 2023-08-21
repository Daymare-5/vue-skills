<template>
  <ShowCard title="2-2. 祖组件传递给孙组件(provide & inject 响应式-对象)" fatherTitle="祖组件" sonTitle="孙组件" :fatherCode="code1" :sonCode="code2" :middle="true" :middleCode="middleCode">
    <template #body>
      <Ascendant></Ascendant>
    </template>
  </ShowCard>
</template>

<script>
import Ascendant from './AscendantAndDescendant2-2/Ascendant'
export default {
  components: {
    Ascendant
  },
  data () {
    return {
      code1: `<el-input v-model="obj.text"></el-input>
<Middle></Middle>

import Middle from './Middle'
export default {
  components: {
    Middle
  },
  provide () {
    return {
      obj: this.obj
    }
  },
  data () {
    return {
      obj: {
        text: '123'
      }
    }
  }
}`,
      code2: `<p>{{ obj.text }}</p>
<el-input v-model="obj.text"></el-input>

export default {
  inject: ['obj']
}`,
      middleCode: `<Descendant></Descendant>

import Descendant from './Descendant'
export default {
  components: {
    Descendant
  }
}`
    }
  }
}
</script>

<style>
</style>
