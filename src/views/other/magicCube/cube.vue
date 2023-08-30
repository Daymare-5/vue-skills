<template>
  <div class="content">
    <div class="cube" ref="cube">
      <div v-for="item in 9" :key="`front_${item}`" style="background-color: #b8f1ed;" :style="getStyle(item, 'front')" :data-index="getIndex(item, 'front')"></div>
      <div v-for="item in 9" :key="`back_${item}`" style="background-color: #f1707d;" :style="getStyle(item, 'back')" :data-index="getIndex(item, 'back')"></div>
      <div v-for="item in 9" :key="`left_${item}`" style="background-color: #fe997b;" :style="getStyle(item, 'left')" :data-index="getIndex(item, 'left')"></div>
      <div v-for="item in 9" :key="`right_${item}`" style="background-color: #b8f1cc;" :style="getStyle(item, 'right')" :data-index="getIndex(item, 'right')"></div>
      <div v-for="item in 9" :key="`up_${item}`" style="background-color: #f1f1b8;" :style="getStyle(item, 'up')" :data-index="getIndex(item, 'up')"></div>
      <div v-for="item in 9" :key="`down_${item}`" style="background-color: white;" :style="getStyle(item, 'down')" :data-index="getIndex(item, 'down')"></div>
    </div>
    <i v-for="item in 3" :key="`arrow-up_${item}`" class="el-icon-arrow-up" :style="{left: 356 + item * 60 + 'px'}" @click="operate('up', item - 2)"></i>
    <i v-for="item in 3" :key="`arrow-down_${item}`" class="el-icon-arrow-down" :style="{left: 356 + item * 60 + 'px'}" @click="operate('down', item - 2)"></i>
    <i v-for="item in 3" :key="`arrow-left_${item}`" class="el-icon-arrow-left" :style="{top: -100 + item * 60 + 'px'}" @click="operate('left', item - 2)"></i>
    <i v-for="item in 3" :key="`arrow-right_${item}`" class="el-icon-arrow-right" :style="{top: -100 + item * 60 + 'px'}" @click="operate('right', item - 2)"></i>
    <i class="el-icon-refresh-right" @click="operate('front_true')"></i>
    <i class="el-icon-refresh-left" @click="operate('front_false')"></i>
    <span class="operate-box">
      <el-button type="primary" round @click="randomMove()" style="margin-right: 20px;">打乱</el-button>
      <el-button type="success" round @click="recover()">复原</el-button>
    </span>
  </div>
</template>

<script>
export default {
  name: 'MagicCube',
  data () {
    return {
      cubeBlocks: [],
      upArray: ['front', 'up', 'back', 'down'],
      leftArray: ['front', 'left', 'back', 'right'],
      frontArray: ['left', 'up', 'right', 'down']
    }
  },
  mounted () {
    this.cubeBlocks = this.$refs.cube.children
  },
  methods: {
    // 将2D-index换算为3D-index
    getIndex (index, location) {
      const obj = {}
      obj.index = index
      obj.location = location
      switch (location) {
        case 'front':
          obj.row = parseInt((index - 1) / 3) - 1
          obj.column = (index - 1) % 3 - 1
          obj.front = 2
          break
        case 'back':
          obj.row = -(parseInt((index - 1) / 3) - 1)
          obj.column = (index - 1) % 3 - 1
          obj.front = -2
          break
        case 'left':
          obj.row = parseInt((index - 1) / 3) - 1
          obj.column = -2
          obj.front = (index - 1) % 3 - 1
          break
        case 'right':
          obj.row = parseInt((index - 1) / 3) - 1
          obj.column = 2
          obj.front = -((index - 1) % 3 - 1)
          break
        case 'up':
          obj.row = -2
          obj.column = (index - 1) % 3 - 1
          obj.front = parseInt((index - 1) / 3) - 1
          break
        case 'down':
          obj.row = 2
          obj.column = (index - 1) % 3 - 1
          obj.front = -(parseInt((index - 1) / 3) - 1)
          break
        default:
          break
      }
      return JSON.stringify(obj)
    },
    // 根据2D-index显示位置
    getStyle (index, location) {
      const row = parseInt((index - 1) / 3) - 1
      const column = (index - 1) % 3 - 1
      const obj = {}
      switch (location) {
        case 'front':
          obj.top = `${row * 60}px`
          obj.left = `${column * 60}px`
          obj.transform = 'translateZ(90px)'
          break
        case 'back':
          obj.top = `${-row * 60}px`
          obj.left = `${column * 60}px`
          obj.transform = 'translateZ(-90px)'
          break
        case 'left':
          obj.top = `${row * 60}px`
          obj.transform = `translateX(-90px) rotateY(90deg) translateX(${-column * 60}px)`
          break
        case 'right':
          obj.top = `${row * 60}px`
          obj.transform = `translateX(90px) rotateY(90deg) translateX(${column * 60}px)`
          break
        case 'up':
          obj.left = `${column * 60}px`
          obj.transform = `translateY(-90px) rotateX(90deg) translateY(${row * 60}px)`
          break
        case 'down':
          obj.left = `${column * 60}px`
          obj.transform = `translateY(90px) rotateX(90deg) translateY(${-row * 60}px)`
          break
        default:
          break
      }
      return obj
    },
    // 操作
    operate (to, targetIndex) {
      switch (to) {
        case 'up':
          this.handleUp(targetIndex)
          break
        case 'down':
          this.handleUp(targetIndex, false)
          break
        case 'left':
          this.handleLeft(targetIndex)
          break
        case 'right':
          this.handleLeft(targetIndex, false)
          break
        case 'front_true':
          this.handleFront(1)
          break
        case 'front_false':
          this.handleFront(1, false)
          break
        default:
          break
      }
    },
    handleUp (targetIndex, clockwise = true) {
      const blocks = this.getBlocks(false, targetIndex, false)
      // 操作
      blocks.forEach(item => {
        // 还原并更新2D-index和location
        const index = JSON.parse(item.dataset.index)
        const locationId = this.upArray.findIndex(_item => _item === index.location)
        if (locationId !== -1) {
          this.rotateFour(index, 'up', clockwise, locationId)
        } else {
          if (targetIndex < 0) {
            this.rotateSelf(index, !clockwise)
          } else {
            this.rotateSelf(index, clockwise)
          }
        }
        // 更新style
        this.updateStyles(item, index)
        // 更新3D-index
        item.dataset.index = this.getIndex(index.index, index.location)
      })
    },
    handleLeft (targetIndex, clockwise = true) {
      const blocks = this.getBlocks(targetIndex, false, false)
      blocks.forEach(item => {
        const index = JSON.parse(item.dataset.index)
        const locationId = this.leftArray.findIndex(_item => _item === index.location)
        if (locationId !== -1) {
          if (targetIndex < 0) {
            // 如果location更新前是背面, 更新index
            if (index.location === 'back') {
              index.index = index.index - 6
            }
            index.location = clockwise ? this.leftArray[locationId === 3 ? 0 : locationId + 1] : this.leftArray[locationId === 0 ? 3 : locationId - 1]
            // 如果location更新后是背面, 更新index
            if (index.location === 'back') {
              index.index = index.index + 6
            }
          } else {
            this.rotateFour(index, 'left', clockwise, locationId)
          }
        } else {
          if (targetIndex < 0) {
            this.rotateSelf(index, clockwise)
          } else {
            this.rotateSelf(index, !clockwise)
          }
        }
        this.updateStyles(item, index)
        item.dataset.index = this.getIndex(index.index, index.location)
      })
    },
    handleFront (index, clockwise = true) {
      const blocks = this.getBlocks(false, false, index)
      blocks.forEach(item => {
        const index = JSON.parse(item.dataset.index)
        const locationId = this.frontArray.findIndex(_item => _item === index.location)
        if (locationId !== -1) {
          this.rotateFour(index, 'front', clockwise, locationId)
        } else {
          this.rotateSelf(index, clockwise)
        }
        this.updateStyles(item, index)
        item.dataset.index = this.getIndex(index.index, index.location)
      })
    },
    // 获取要操作的block
    getBlocks (row, column, front) {
      let target, targetName
      if (row !== false) {
        target = row
        targetName = 'row'
      } else if (column !== false) {
        target = column
        targetName = 'column'
      } else {
        target = front
        targetName = 'front'
      }
      let blocks = Array.from(this.cubeBlocks)
      if (target === -1) {
        blocks = blocks.filter(item => JSON.parse(item.dataset.index)[targetName] < 0)
      } else if (target === 1) {
        blocks = blocks.filter(item => JSON.parse(item.dataset.index)[targetName] > 0)
      } else {
        blocks = blocks.filter(item => JSON.parse(item.dataset.index)[targetName] === 0)
      }
      return blocks
    },
    // 一面自旋, 只需更新index.index
    rotateSelf (index, clockwise) {
      if (index.index === 5) return
      if (clockwise) {
        if (index.index % 2 === 0) {
          index.index = index.index % 4 === 0 ? index.index / 2 : index.index / 2 + 5
        } else {
          index.index = index.index <= 3 ? index.index * 3 : index.index * 3 - 20
        }
      } else {
        if (index.index % 2 === 0) {
          index.index = index.index < 6 ? index.index * 2 : (index.index - 5) * 2
        } else {
          index.index = index.index % 3 === 0 ? index.index / 3 : (index.index + 20) / 3
        }
      }
    },
    // 四面联动
    rotateFour (index, direction, clockwise, locationId) {
      switch (direction) {
        case 'up':
          index.location = clockwise ? this.upArray[locationId === 3 ? 0 : locationId + 1] : this.upArray[locationId === 0 ? 3 : locationId - 1]
          break
        case 'left':
          // 如果location更新前是背面, 更新index
          if (index.location === 'back') {
            index.index = 10 - index.index
          }
          index.location = clockwise ? this.leftArray[locationId === 3 ? 0 : locationId + 1] : this.leftArray[locationId === 0 ? 3 : locationId - 1]
          // 如果location更新后是背面, 更新index
          if (index.location === 'back') {
            index.index = 10 - index.index
          }
          break
        case 'front':
          if (clockwise) {
            switch (locationId) {
              case 0:
                index.index = 10 - index.index / 3
                break
              case 1:
                index.index = 1 + (index.index - 7) * 3
                break
              case 2:
                index.index = 3 - (index.index - 1) / 3
                break
              case 3:
                index.index = index.index * 3
                break
              default:
                break
            }
            index.location = this.frontArray[locationId === 3 ? 0 : locationId + 1]
          } else {
            switch (locationId) {
              case 0:
                index.index = index.index / 3
                break
              case 1:
                index.index = (10 - index.index) * 3
                break
              case 2:
                index.index = 7 + (index.index - 1) / 3
                break
              case 3:
                index.index = 1 + (3 - index.index) * 3
                break
              default:
                break
            }
            index.location = this.frontArray[locationId === 0 ? 3 : locationId - 1]
          }
          break
        default:
          break
      }
    },
    // 更新style
    updateStyles (item, index) {
      const styles = this.getStyle(index.index, index.location)
      // 清空style, 除了bgc
      for (let i = 0; i < item.style.length; i++) {
        const styleName = item.style[i]
        if (styleName !== 'background-color') {
          if (!Object.keys(styles).includes(styleName)) item.style.removeProperty(styleName)
        }
      }
      Object.keys(styles).forEach(styleName => {
        item.style[styleName] = styles[styleName]
      })
    },
    randomMove () {
      const steps = Math.floor(Math.random() * 40)
      for (let i = 0; i < steps; i++) {
        const targetIndex = Math.floor(Math.random() * 2) - 1
        switch (Math.floor(Math.random() * 6)) {
          case 0:
            this.operate('up', targetIndex)
            break
          case 1:
            this.operate('down', targetIndex)
            break
          case 2:
            this.operate('left', targetIndex)
            break
          case 3:
            this.operate('right', targetIndex)
            break
          case 4:
            this.operate('front_true', targetIndex)
            break
          default:
            this.operate('front_false', targetIndex)
            break
        }
      }
    },
    recover () {
      this.$emit('reset')
    }
  }
}
</script>

<style scoped>
.content {
  position: relative;
  width: 100%;
}
.cube {
    position: relative;
    height: 60px;
    width: 60px;
    margin: 200px auto;
    transition: all 3s;
    transform-style: preserve-3d;
}
.cube:hover {
  transform: rotate3d(1, 1, 0, 360deg);
}
.cube div {
    position: absolute;
    left: 0;
    top: 0;
    height: 60px;
    width: 60px;
    border: 1px solid #ccc;
}
.cubeBox {
  position: relative;
}
.el-icon-arrow-up {
  position: absolute;
  top: -100px;
  cursor: pointer;
}
.el-icon-arrow-down {
  position: absolute;
  top: 145px;
  cursor: pointer;
}
.el-icon-arrow-left {
  position: absolute;
  left: 345px;
  cursor: pointer;
}
.el-icon-arrow-right {
  position: absolute;
  left: 605px;
  cursor: pointer;
}
.el-icon-refresh-right {
  position: absolute;
  left: 605px;
  top: 145px;
  cursor: pointer;
}
.el-icon-refresh-left {
  position: absolute;
  left: 345px;
  top: -100px;
  cursor: pointer;
}
.operate-box {
  position: absolute;
  left: 10px;
  top: -180px;
}
</style>
