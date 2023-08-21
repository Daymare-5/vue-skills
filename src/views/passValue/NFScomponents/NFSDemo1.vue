<template>
  <ShowCard title="1. event bus 事件总线" fatherTitle="发布方" sonTitle="接收方" :fatherCode="code1" :sonCode="code2">
    <template #body>
      <div class="content">
        <User></User>
        <Supplier></Supplier>
      </div>
    </template>
  </ShowCard>
</template>

<script>
import User from './NFS1/NFSUser'
import Supplier from './NFS1/NFSSupplier'
export default {
  components: {
    User,
    Supplier
  },
  data () {
    return {
      code1: `<el-popover
  placement="bottom"
  width="200"
  trigger="manual"
  content="收到"
  v-model="visible">
  <el-input slot="reference" v-model="content"></el-input>
</el-popover>

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
}`,
      code2: `<el-input v-model="content"></el-input>
<el-button type="primary" plain @click="publishMsg">发布消息</el-button>
      
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
}`
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: space-evenly;
}
.content div{
  width: 40%;
  height: 380px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  text-align: center;
  position: relative;
}
.content div /deep/ .el-input {
  width: 40%;
  position: absolute;
  left: 30%;
  top: 15%;
}
.content div /deep/ .el-button {
  position: absolute;
  left: 38%;
  top: 40%;
}
</style>
