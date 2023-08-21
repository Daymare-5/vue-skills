<template>
  <ShowCard title="2. vuex" fatherTitle="组件1" sonTitle="组件2" :fatherCode="code1" :sonCode="code2" :middle="true" :middleCode="middleCode">
    <template #body>
      <div class="content">
        <User1></User1>
        <User2></User2>
      </div>
    </template>
  </ShowCard>
</template>

<script>
import User1 from './NFS2/NFSUser1'
import User2 from './NFS2/NFSUser2'
export default {
  components: {
    User1,
    User2
  },
  data () {
    return {
      code1: '<el-input v-model="$store.state.NFS.text"></el-input>',
      code2: '<el-input v-model="$store.state.NFS.text"></el-input>',
      middleCode: `const state = {
  text: 'test'
}
const mutations = {}
const actions = {}
const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
`
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
