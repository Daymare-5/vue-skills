<template>
  <el-drawer
    title="源码"
    :visible="visible"
    :before-close="handleClose">
    <pre v-highlightA>
      <span>父组件：</span>
      <code class="javascript">{{ fatherCode }}</code>
      <span>子组件：</span>
      <code class="javascript">{{ sonCode }}</code>
    </pre>
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
    fatherCode: String,
    sonCode: String
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
  margin-left: 0;
}
/deep/ .el-drawer__header {
  margin-bottom: 22px;
}
/deep/ .el-drawer__body {
  border-top: 1px solid #ccc;
}
</style>
