<template>
  <el-row>
    <el-col :span="14">
      <label style="margin-right: 20px">日期</label>
      <el-date-picker
        clearable
        type="daterange"
        value-format="yyyy-MM-dd HH:mm:ss"
        :default-time="['00:00:00', '23:59:59']"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        v-model="date"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      date: ['', ''],
      pickerMinDate: '', // 选中的开始时间
      pickerOptions: {
        onPick: obj => {
          this.pickerMinDate = new Date(obj.minDate).getTime()
          const start = this.formatDate(obj.minDate, 'start')
          const end = this.formatDate(obj.maxDate, 'end')
          obj.maxDate && (this.date = [start, end])
        },
        disabledDate: time => {
          if (this.pickerMinDate) {
            const oneMonth = 1000 * 3600 * 24 * 31
            const maxTime = this.pickerMinDate + oneMonth
            const tomorrow = new Date(this.formatDate(new Date().getTime() + 1000 * 3600 * 24, 'start'))
            return time.getTime() >= tomorrow || time.getTime() >= maxTime || time.getTime() < this.pickerMinDate
          }
        }
      } // 日期选择策略
    }
  },
  created () {
    this.getDate()
  },
  methods: {
    formatDate (datetime, type) {
      const time = new Date(datetime)
      const year = time.getFullYear()
      const month = (time.getMonth() + 1).toString().padStart(2, '0')
      const date = (time.getDate()).toString().padStart(2, '0')
      return type === 'start' ? year + '-' + month + '-' + date + ' ' + '00' + ':' + '00' + ':' + '00' : year + '-' + month + '-' + date + ' ' + '23' + ':' + '59' + ':' + '59'
    },
    getDate () {
      const start = new Date()
      this.date[0] = this.formatDate(start.getTime() - 1000 * 3600 * 24 * 30, 'start')
      this.date[1] = this.formatDate(start.getTime(), 'end')
    }
  },
  watch: {
    date: {
      deep: true,
      handler (newDate) {
        if (newDate === null) {
          this.pickerMinDate = ''
        }
      }
    }
  }
}
</script>

<style>
</style>
