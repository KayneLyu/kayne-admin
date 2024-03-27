<script setup lang="ts">
import { ref } from "vue";
import OrderComponents from "../components/OrderComponents.vue";
defineOptions({
  name: "history"
});
const dataList = ref([]);
let loading = ref(true);

const tableData: Array<ITableData> = [
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "已完成",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "非常规配件"
  },
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "已完成",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "称重配件"
  },
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "已完成",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "风环配件"
  },
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "已完成",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "办公用品"
  }
];
setTimeout(() => {
  dataList.value = tableData;
  loading.value = false;
}, 1000);
</script>

<template>
  <OrderComponents :tableData="dataList" :loading="loading" />
</template>

<style lang="scss" scoped></style>
