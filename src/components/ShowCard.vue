<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="header">
        <span style="font-weight: 700;">{{ title }}</span>
        <slot name="right">
          <el-button type="text" @click="viewSource">点击查看源码</el-button>
        </slot>
      </div>
      <slot name="body">内容</slot>
    </el-card>
    <Source :visible="drawer" :fatherCode="fatherCode" :sonCode="sonCode" :fatherTitle="fatherTitle" :sonTitle="sonTitle" :middle="middle" :middleCode="middleCode" @close="closeSource"></Source>
  </div>
</template>

<script>
import Source from '@/components/Source'
export default {
  props: {
    title: {
      type: String,
      default: '标题'
    },
    fatherTitle: String,
    fatherCode: String,
    sonTitle: String,
    sonCode: String,
    middle: {
      type: Boolean,
      default: false
    },
    middleCode: String
  },
  components: {
    Source
  },
  data () {
    return {
      drawer: false
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
.header {
  padding-right: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
