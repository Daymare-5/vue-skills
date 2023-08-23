<template>
  <div>
    <input type="text" v-myVModel="content"> {{content}}
  </div>
</template>

<script>
export default {
  directives: {
    myVModel: {
      inserted (el, binding, vnode) {
        // 初始化
        el.value = binding.value
        // 视图更新，修改数据
        el.addEventListener('input', e => {
          vnode.context[binding.expression] = e.target.value
        })
      },
      // 数据更新，修改视图
      update (el, binding) {
        el.value = binding.value
      }
    }
  },
  data () {
    return {
      content: 'okok'
    }
  }
}
</script>

<style>
</style>
