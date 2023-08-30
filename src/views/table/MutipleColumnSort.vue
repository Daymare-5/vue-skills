<template>
  <div>
    <h2>基于elementUI的多列排序</h2>
    <h4>仅排序当前页数据，排序字段根据选择顺序赋予优先级</h4>
    <el-table
      :data="tempData"
      style="width: 100%"
      height="500"
      stripe
      :header-cell-class-name="handleHeaderClass"
      @header-click="handleHeaderClick"
      @sort-change="handleTableSort"
      >
      <el-table-column v-for="item in columnList" :key="item.id"
        :prop="item.prop"
        :label="item.label"
        :sortable="item.sortable"
        :width="item.width">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columnList: [
        { id: 1, prop: 'date', label: '日期', sortable: 'custom', width: '180' },
        { id: 2, prop: 'name', label: '姓名', sortable: 'custom', width: '180' },
        { id: 3, prop: 'age', label: '年龄', sortable: 'custom', width: '180' },
        { id: 4, prop: 'single', label: '单身', sortable: 'custom', width: '180' },
        { id: 5, prop: 'balance', label: '余额', sortable: 'custom' }
      ],
      tableData: [{
        date: '2023-05-01',
        name: 'xxx1',
        age: 26,
        single: '是',
        balance: 2000.1
      }, {
        date: '2023-05-01',
        name: 'xxx2',
        age: 18,
        single: '是',
        balance: 0
      }, {
        date: '2023-05-01',
        name: 'xxx3',
        age: 20,
        single: '否',
        balance: 1999
      }, {
        date: '2023-05-02',
        name: 'xxx4',
        age: 20,
        single: '否',
        balance: 2000
      }, {
        date: '2023-05-03',
        name: 'xxx4',
        age: 20,
        single: '是',
        balance: 2000.1
      }], // 原数据
      tempData: [], // 排序后的数据
      sortList: [] // 用于表格数据排序
    }
  },
  created () {
    this.tempData = Object.assign([], this.tableData)
  },
  methods: {
    // -----------------------------------------------自定义函数-----------------------------------------------
    updateSortOrder (column) {
      // column.order 默认只能有一个不为 null，也就是说其它列的 order 改变时，原有的 order 会被置为 null
      // 所以用另一个字段 multiOrder 保存 order 状态
      column.multiOrder = column.order
      // 更新 sortList
      const index = this.sortList.findIndex(item => item.prop === column.property)
      if (index !== -1) {
        this.sortList.splice(index, 1)
      }
      if (column.order !== null) {
        this.sortList.push({ prop: column.property, order: column.order })
      }
      // sort
      this.sortTableData()
    },
    // 根据某一项比较
    compareData (prop, a, b, order) {
      const orderFactor = order === 'ascending' ? 1 : -1
      if (a[prop] < b[prop]) {
        return -1 * orderFactor
      }
      if (a[prop] > b[prop]) {
        return 1 * orderFactor
      }
      return 0
    },
    // 根据 sortList 对 data 进行排序
    sortTableData () {
      this.tempData = Object.assign([], this.tableData)
      this.tempData.sort((a, b) => {
        for (const item of this.sortList) {
          const tempResult = this.compareData(item.prop, a, b, item.order)
          if (tempResult) {
            return tempResult
          }
        }
        return 0
      })
    },
    // -----------------------------------------------el-table 事件-----------------------------------------------
    // 点击表头
    // bug: 监听不到点击箭头
    handleHeaderClick (column) {
      // this.updateSortOrder(column)
    },
    // 点击箭头
    handleTableSort ({ column }) {
      this.updateSortOrder(column)
    },
    // 把 multiOrder 同步给 order
    handleHeaderClass ({ column }) {
      column.order = column.multiOrder
    }
  }
}
</script>

<style scoped>
</style>
