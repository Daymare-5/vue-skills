<template>
  <div>
    <span>发布方</span>
    <el-input v-model="content"></el-input>
    <el-button type="primary" plain @click="publishMsg">发布消息</el-button>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus'
export default {
  data () {
    return {
      content: ''
    }
  },
  methods: {
    publishMsg () {
      Bus.$emit('nfsMsg', this.content)
    }
  }
}
</script>

<style>
</style>
