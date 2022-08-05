<template>
  <el-table
    :data="currentList"
    style="width: 1158px"
    :header-cell-style="{
      background: '#f3f6fb',
      color: '#666',
      height: '42px',
      'font-weight': 400,
    }"
    :highlight-current-row="true"
  >
    <el-table-column type="index" :index="indexMethod" label="序号" width="80">
    </el-table-column>
    <el-table-column
      v-for="(item, index) in tableLabel"
      :key="index"
      :prop="item.prop"
      :width="item.width"
      :label="item.label"
      :formatter="formatData"
    >
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {};
  },
  props: {
    currentList: {
      type: Array,
      required: true,
    },
    tableLabel: {
      type: Array,
      default: () => [],
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },
  created() {},

  methods: {
    indexMethod(index) {
      return parseInt(this.currentIndex) - 9 + index;
    },
    formatData(row, column, cellValue) {
      if (column.property === "createType") {
        if (cellValue === 1) {
          return "自动";
        }
        return "手动";
      }
      if (column.property === "createTime") {
        return dayjs(cellValue).format("YYYY.MM.DD HH:mm:ss");
      }
      return cellValue;
    },
  },
};
</script>

<style lang="scss">
.el-table td,
.el-table th.is-leaf {
  border-bottom: unset;
}
.el-table td,
.el-table th {
  padding: 5px 0;
}
.el-table thead {
  font-weight: 400;
  color: #666;
}
</style>
