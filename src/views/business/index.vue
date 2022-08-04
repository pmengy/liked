<template>
  <div class="dashboard-container">
    <div class="app-container">
      <!-- 搜索栏 -->
      <el-card
        class="box-search"
        shadow="never"
        :body-style="{ padding: '10px 0px 10px 20px' }"
      >
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="工单编号:" class="item">
            <el-input v-model="formInline.user" placeholder="请输入"></el-input>
          </el-form-item>
          <el-form-item label="工单状态:" class="item">
            <el-select v-model="formInline.region" placeholder="请选择">
              <el-option
                v-for="item in taskStatusList"
                :key="item.statusId"
                :label="item.statusName"
                :value="item.statusId"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <dkd-button>
              <span>
                <svg-icon
                  icon-class="search"
                  style="margin-right: 8px; font-size: 15px"
                ></svg-icon
                >查询</span
              >
            </dkd-button>
          </el-form-item>
        </el-form>
      </el-card>
      <!-- 列表栏 -->
      <el-card class="box-search" shadow="never">
        <!-- top按钮 -->
        <div class="list-top-btn">
          <dkd-button
            background="linear-gradient(135deg,hsl(27deg 100% 63%),hsl(17deg 100% 56%))!important"
          >
            <span>
              <svg-icon
                icon-class="add"
                style="margin-right: 8px; font-size: 15px"
              ></svg-icon
              >新建</span
            >
          </dkd-button>
          <dkd-button
            style="margin-left: 8px"
            background="#fbf4f0"
            color="#655b56"
            >工单配置</dkd-button
          >
        </div>
        <!-- 表格 -->
        <dkd-table :currentList='currentList' />
      </el-card>
    </div>
  </div>
</template>

<script>
import { searchTasks, getTaskStatus } from "@/api/task";
import DkdButton from "@/components/DkdButton";
import DkdTable from "@/components/DkdTable";

export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      currentList: [],
      taskStatusList: [],
    };
  },
  components: { DkdButton, DkdTable },
  created() {
    this.searchTasks();
    this.getTaskStatus();
  },

  methods: {
    async searchTasks() {
      const res = await searchTasks();
      this.currentList = res.data.currentPageRecords;
    },
    async getTaskStatus() {
      const res = await getTaskStatus();
      this.taskStatusList = res.data;
    },
  },
};
</script>

<style scoped lang="scss">
.box-search {
  margin-bottom: 20px;
  border: #fff;
  .list-top-btn {
    margin-bottom: 10px;
  }
}
.el-form {
  .el-form-item {
    margin-bottom: 0;
  }
  .el-button--primary {
    background-color: #5f84ff;
  }
}
</style>
<style>
.item .el-form-item__label {
  font-weight: 400;
}
.el-form .el-button--primary {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 36px;
}
</style>
