<template>
  <div>
    <el-card class="box-card">
      <div slot="header">
        <span style="font-weight: 700;">2. 子组件修改父组件</span>
        <el-button type="text" style="margin-left: 68%;" @click="viewSource">点击查看源码</el-button>
      </div>
      <Father></Father>
    </el-card>
    <Source :visible="drawer" :fatherCode="fatherCode" :sonCode="sonCode" @close="closeSource"></Source>
  </div>
</template>

<script>
import Father from './FatherAndSon2/Father'
import Source from '@/components/Source'
export default {
  components: {
    Father,
    Source
  },
  data () {
    return {
      drawer: false,
      fatherCode: `<el-input v-model="count" size="large"></el-input>
<Son :num="count"></Son>

import Son from './Son'
export default {
  data () {
    return {
      count: '100'
    }
  },
  components: {
    Son
  }
}`,
      sonCode: `<p>{{ num }}</p>

props: {
  num: String
}`
    }
  },
  methods: {
    viewSource () {
      this.drawer = true
    },
    closeSource () {
      this.drawer = false
    }
  }
}
</script>

<style scoped>

</style>
