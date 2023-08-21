<template>
  <div ref="imgs" @scroll="lazyLoad">
    <img data-src="./images/img1.jpeg" alt="懒加载1" />
    <img data-src="./images/img2.jpeg" alt="懒加载2" />
    <img data-src="./images/img3.jpeg" alt="懒加载3" />
    <img data-src="./images/img4.jpeg" alt="懒加载4" />
    <img data-src="./images/img1.jpeg" alt="懒加载5" />
    <img data-src="./images/img2.jpeg" alt="懒加载6" />
    <img data-src="./images/img3.jpeg" alt="懒加载7" />
    <img data-src="./images/img4.jpeg" alt="懒加载8" />
  </div>
</template>

<script>
export default {
  name: 'LazyLoadIndex',
  data () {
    return {
      imgs: [],
      curIndex: 0,
      timer: null
    }
  },
  mounted () {
    this.imgs = this.$refs.imgs.querySelectorAll('img')
    this.renderImg(2)
  },
  methods: {
    lazyLoad ({ target }) {
      this.throttle(target)
    },
    throttle ({ clientHeight, scrollTop }) {
      if (!this.timer) {
        this.timer = setTimeout(() => {
          if (this.curIndex < this.imgs.length && this.ifRenderNext(clientHeight, scrollTop)) {
            console.log('load', this.curIndex + 1)
            this.renderImg(this.curIndex + 1)
          }
          this.timer = null
        }, 500)
      }
    },
    ifRenderNext (clientHeight, scrollTop) {
      const imgs = this.imgs
      const index = this.curIndex - 1
      if (imgs[index].offsetTop <= clientHeight + scrollTop + 300) return true
      return false
    },
    renderImg (toIndex) {
      const imgs = this.imgs
      for (let i = this.curIndex; i < toIndex; i++) {
        imgs[i].src = imgs[i].dataset.src
      }
      this.curIndex = toIndex
    }
  }
}
</script>

<style scoped>
div {
  height: 540px;
  padding: 20px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow-y: auto;
  overflow-x: hidden;
}
div img {
  width: 100%;
  object-fit: cover;
}
</style>
