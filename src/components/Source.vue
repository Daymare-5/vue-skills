<template>
  <el-drawer
    title="源码"
    size="35%"
    :visible="visible"
    :before-close="handleClose">
    <div>
      <span>{{ fatherTitle ? fatherTitle:'父组件'}}：</span>
      <pre v-highlightA><code class="javascript">{{ fatherCode }}</code></pre>
    </div>
    <div v-if="middle">
      <span>中间件：</span>
      <pre v-highlightA><code class="javascript">{{ middleCode }}</code></pre>
    </div>
    <div>
      <span>{{ sonTitle ? sonTitle:'子组件'}}：</span>
      <pre v-highlightA><code class="javascript">{{ sonCode }}</code></pre>
    </div>
  </el-drawer>
</template>

<script>
export default {
  name: 'SourceCode',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    fatherTitle: String,
    fatherCode: String,
    sonTitle: String,
    sonCode: String,
    middle: Boolean,
    middleCode: String
  },
  methods: {
    handleClose () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="less" scoped>
* {
  font-size: 16px;
}
span {
  padding-left: 16px;
}
/deep/ .el-drawer__header {
  margin-bottom: 22px;
}
/deep/ .el-drawer__body {
  padding-top: 20px;
  border-top: 1px solid #ccc;
}
/deep/ .el-drawer.rtl {
  overflow-y: auto;
}
</style>
