<template>
  <div style="position: relative; height: 400px;">
    <h2 style="margin-bottom: 30px;">日期选择器，默认选择一个月内，且只能选择一个月内</h2>
    <h4>一、使用一个日期选择器</h4>
    <DatePicker1></DatePicker1>
    <br/>
    <h4>二、使用两个日期选择器</h4>
    <DatePicker2></DatePicker2>
    <a style="position: absolute; right: 0; top: 10px;" title="点击跳转" target="_blank" href="https://blog.csdn.net/W________11/article/details/132354045">查看详情</a>
  </div>
</template>

<script>
import DatePicker1 from './DatePicker1'
import DatePicker2 from './DatePicker2'
export default {
  name: 'DatePickerIndex',
  components: {
    DatePicker1,
    DatePicker2
  }
}
</script>

<style>
</style>
