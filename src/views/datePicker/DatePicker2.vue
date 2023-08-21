<template>
  <el-row>
    <el-col>
      <label style="margin-right: 20px">日期</label>
      <el-date-picker
        v-model="date.startDate"
        type="date"
        placeholder="选择起始日期"
        value-format="yyyy-MM-dd"
        :picker-options="pickerStartOption">
      </el-date-picker>
      -
      <el-date-picker
        v-model="date.endDate"
        type="date"
        placeholder="选择结束日期"
        value-format="yyyy-MM-dd"
        :picker-options="pickerEndOption">
      </el-date-picker>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      date: {
        startDate: '',
        endDate: ''
      },
      oneMonth: 1000 * 3600 * 24 * 31,
      pickerStartOption: {},
      pickerEndOption: {}
    }
  },
  created () {
    this.getDate()
  },
  watch: {
    'date.startDate' (newDate) {
      // 清空的时候重置选择策略
      if (!newDate) {
        this.date.endDate = null
        this.initOption()
        return
      }
      // 判断现有的endDate是否在新的startDate之前，如果是，同步到startDate
      if (new Date(this.date.endDate) < new Date(newDate)) {
        this.date.endDate = newDate
      }
      // 根据选中时间，刷新选择策略
      this.pickerEndOption = {
        disabledDate: time => {
          return time.getTime() > Date.now() || time.getTime() < new Date(new Date(newDate) - 1000 * 3600 * 24) || time.getTime() > new Date(newDate).getTime() + this.oneMonth
        }
      }
    },
    'date.endDate' (newDate) {
      if (!newDate) {
        this.date.startDate = null
        this.initOption()
        return
      }
      if (new Date(this.date.startDate) > new Date(newDate)) {
        this.date.startDate = newDate
      }
      this.pickerStartOption = {
        disabledDate: time => {
          return time.getTime() > new Date(newDate) || time.getTime() < new Date(newDate) - this.oneMonth
        }
      }
    }
  },
  methods: {
    // 初始化选项，仅禁止选择未来
    initOption () {
      this.pickerStartOption = {
        disabledDate: time => {
          return time.getTime() > Date.now()
        }
      }
      this.pickerEndOption = {
        disabledDate: time => {
          return time.getTime() > Date.now()
        }
      }
    },
    // 格式化日期
    formatDate (datetime) {
      const time = new Date(datetime)
      const year = time.getFullYear()
      const month = (time.getMonth() + 1).toString().padStart(2, '0')
      const date = (time.getDate()).toString().padStart(2, '0')
      return year + '-' + month + '-' + date
    },
    // 初始化日期
    getDate () {
      const time = new Date()
      this.date.startDate = this.formatDate(time - 1000 * 3600 * 24 * 30)
      this.date.endDate = this.formatDate(time)
      this.initOption()
    }
  }
}
</script>

<style>
</style>
