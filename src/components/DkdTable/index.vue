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
  >
    <el-table-column type="index" label="序号" width="80"> </el-table-column>
    <el-table-column prop="taskCode" label="工单编号" width="118">
    </el-table-column>
    <el-table-column prop="innerCode" label="设备编号" width="130">
    </el-table-column>
    <el-table-column prop="taskType.typeName" label="工单类型" width="136">
    </el-table-column>
    <el-table-column prop="taskType.type" label="工单方式" width="130">
    </el-table-column>
    <el-table-column
      prop="taskStatusTypeEntity.statusName"
      label="工单状态"
      width="136"
    >
    </el-table-column>
    <el-table-column prop="userName" label="运营人员" width="136">
    </el-table-column>
    <el-table-column prop="createTime" label="创建日期" width="160">
    </el-table-column>
    <el-table-column label="操作" width="100">
      <template slot-scope="scope">
        <el-button type="text">查看详情</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
    };
  },
  props: {
    currentList: {
      type: Array,
      required: true,
    },
  },
  created() {},

  methods: {},
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
