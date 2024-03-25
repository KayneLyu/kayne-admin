<script lang="ts" setup>
import { ref, reactive } from "vue";
import type { TableColumns } from "@pureadmin/table";

defineOptions({
  name: "purchase"
});

const columns: Array<TableColumns> = [
  {
    label: "订单编号",
    prop: "date"
  },
  {
    label: "日期",
    prop: "date"
  },
  {
    label: "订单状态",
    prop: "name"
  },
  {
    label: "操作",
    prop: "address"
  }
];

const tableData = [
  {
    date: "2030-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2030-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2030-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  },
  {
    date: "2030-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles"
  }
];

let loading = ref(false);
const pagination = reactive({
  pageSize: 5,
  currentPage: 1,
  background: true,
  total: tableData.length
});

// setTimeout(() => {
//   loading.value = false;
// }, 1500);
</script>

<template>
  <div class="table_container">
    <pure-table
      locale="zhCn"
      border
      :loading="loading"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
      stripe
    />
  </div>
</template>

<style scoped lang="scss">
.table_container {
  height: 100%;
}
</style>
