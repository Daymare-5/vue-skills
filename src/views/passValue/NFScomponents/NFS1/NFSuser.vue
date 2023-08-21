<template>
  <div>
    <span>接收方</span>
    <el-popover
      placement="bottom"
      width="200"
      trigger="manual"
      content="收到"
      v-model="visible">
      <el-input slot="reference" v-model="content"></el-input>
    </el-popover>
  </div>
</template>

<script>
import Bus from '@/utils/EventBus'
export default {
  data () {
    return {
      visible: false,
      content: ''
    }
  },
  created () {
    Bus.$on('nfsMsg', msg => {
      this.visible = true
      this.content = msg
      setTimeout(() => {
        this.visible = false
      }, 1000)
    })
  }
}
</script>

<style>
</style>
