<script lang="ts" setup>
import { h, ref } from "vue";
import OrderComponents from "../components/OrderComponents.vue";
import AddApplyTable from "./apply/index.vue";


defineOptions({
  name: "purchase"
});

const tableData: Array<ITableData> = [
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "待审批",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "路由器"
  },
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "待审批",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "风环配件"
  },
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "待审批",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "风环配件"
  },
  {
    date: "2024-03-27",
    order: 2024032701,
    status: "待审批",
    endDate: "2024-04-01",
    applicant: "邓琳",
    tips: "风环配件"
  }
];


const purchaseList = ref<[] | ITableData[]>([]);
let loading = ref(true);

setTimeout(() => {
  purchaseList.value = tableData;
  loading.value = false;
}, 300);
</script>

<template>
  <div>
    <AddApplyTable />
    <OrderComponents :tableData="purchaseList" :loading="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
