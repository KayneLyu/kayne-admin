<script lang="ts" setup>
import { h, ref } from "vue";
import OrderComponents from "../components/OrderComponents.vue";
import Forms from "./form.vue";
import {
  addDialog,
  closeDialog,
  updateDialog,
  closeAllDialog
} from "@/components/ReDialog";

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

const dataList = ref([]);
let loading = ref(true);

setTimeout(() => {
  dataList.value = tableData;
  loading.value = false;
}, 300);
const addPurchase = () => {
  addDialog({
    title: "新增采购申请单",
    closeOnClickModal: false,
    contentRenderer: () => h(Forms, {})
  });
};
</script>

<template>
  <div>
    <div class="mb-5">
      <el-button @click="addPurchase" type="primary">+ 采购申请</el-button>
    </div>
    <OrderComponents :tableData="dataList" :loading="loading" />
  </div>
</template>

<style lang="scss" scoped></style>
