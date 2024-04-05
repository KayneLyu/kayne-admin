<script lang="ts" setup>
import { h, ref } from "vue";
import OrderComponents from "../components/OrderComponents.vue";
import AddApplyTable from "./apply/index.vue";
import DetailsComponent from "../components/Details.vue";
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
let isShowDetails = ref(false);

setTimeout(() => {
  purchaseList.value = tableData;
  loading.value = false;
}, 300);

const checkOutDetails = (order?: number) => {
  isShowDetails.value = !isShowDetails.value;
  console.log(order, "order");
};
</script>

<template>
  <transition>
    <div v-if="!isShowDetails">
      <AddApplyTable />
      <OrderComponents
        :tableData="purchaseList"
        :loading="loading"
        :checkDetails="checkOutDetails"
      />
    </div>
    <div v-else>
      <DetailsComponent :backOrder="checkOutDetails"/>
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>
