<template>
  <div>
    <span class="title">自己实现的轮播图</span>
    <div class="box" @mouseenter="mouseenter" @mouseleave="mouseleave">
      <!-- 主体 -->
      <div class="item" :style="{transform: `translateX(-${(currentIndex - 1) * 100}%)`}" v-for="item in list" :key="item.id">
        <h3>{{ item.name }}</h3>
      </div>
      <!-- 底部 -->
      <div class="footer">
        <span :class="{active: item === currentIndex}" v-for="item in total" :key="item" @mouseenter="changeIndex(item)"></span>
      </div>
      <!-- 左右箭头 -->
      <div class="arrow prev" :class="{show: isShow}" @click="prev">&lt;</div>
      <div class="arrow next" :class="{show: isShow}" @click="next">&gt;</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false,
      currentIndex: 1,
      list: [
        { id: 1, name: '第一张' },
        { id: 2, name: '第二张' },
        { id: 3, name: '第三张' },
        { id: 4, name: '第四张' }
      ],
      total: 4
    }
  },
  mounted () {
    this.timer = setInterval(() => {
      this.next()
    }, 1000)
  },
  methods: {
    next () {
      this.currentIndex = this.currentIndex === this.total ? 1 : this.currentIndex + 1
    },
    prev () {
      this.currentIndex = this.currentIndex === 1 ? this.total : this.currentIndex - 1
    },
    changeIndex (index) {
      this.currentIndex = index
    },
    mouseenter () {
      this.isShow = true
      clearInterval(this.timer)
    },
    mouseleave () {
      this.isShow = false
      this.timer = setInterval(() => {
        this.next()
      }, 1000)
    }
  }
}
</script>

<style scoped>
.title {
  color: #475669;
  font-size: 16px;
}
.box {
  display: flex;
  margin-top: 20px;
  height: 500px;
  overflow: hidden;
  position: relative;
}
/* 主体 */
.item {
  flex-shrink: 0;
  width: 100%;
  height: 100%;
  transition: transform .7s;
}
.item h3 {
  margin: 0;
  color: #475669;
  opacity: 0.75;
  line-height: 40px;
  text-align: center;
}
.item:nth-child(2n) {
    background-color: #99a9bf;
}
.item:nth-child(2n+1) {
    background-color: #d3dce6;
}
/* 底部 */
.footer {
  display: flex;
  justify-content: center;
  width: 60%;
  height: 2px;
  position: absolute;
  left: 20%;
  bottom: 12px;
}
.footer span {
  width: 30px;
  margin-left: 8px;
  background-color: #fff;
  opacity: .48;
  cursor: pointer;
}
.footer span:first-child {
  margin-left: 0;
}
.footer span.active {
  opacity: 1;
}
/* 左右箭头 */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height: 36px;
  width: 36px;
  cursor: pointer;
  transition: .7s;
  border-radius: 50%;
  color: #fff;
  text-align: center;
  font-size: 16px;
  line-height: 36px;
  background-color: rgba(31,45,61,.11);
}
.arrow.prev {
  left: -40px;
}
.arrow.next {
  right: -40px;
}
.arrow.prev.show {
  left: 16px;
}
.arrow.next.show {
  right: 16px;
}
</style>
