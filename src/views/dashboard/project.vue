<script setup lang="ts">
import dayjs from "dayjs";
const columns: TableColumnList = [
  {
    label: "编号",
    prop: "date"
  },
  {
    label: "创建日期",
    prop: "name"
  },
  {
    label: "类型",
    prop: "address"
  },
  {
    label: "交付日期",
    prop: "address"
  },
];
const date = dayjs(new Date()).format("YYYY-MM-DD");
const tableData = [
  {
    date,
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Jack",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Dick",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Harry",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Sam",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Lucy",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Mary",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date,
    name: "Mike",
    address: "No. 189, Grove St, Los Angeles"
  }
];
</script>

<template>
  <el-card>
    <p class="mb-3">项目进展</p>
      <pure-table
      :data="tableData.concat(tableData).concat(tableData)"
      :columns="columns"
      height="300"
    />
  </el-card>
</template>

<style scoped>

</style>
