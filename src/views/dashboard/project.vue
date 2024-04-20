<script setup lang="ts">
import { ref, onMounted } from "vue";
import { clone, useWatermark, delay } from "@pureadmin/utils";
import dayjs from "dayjs";

const columns: TableColumnList = [
  {
    label: "单号",
    prop: "order"
  },
  {
    label: "单号名称",
    prop: "tips"
  },
  {
    label: "类型",
    prop: "type"
  },
  {
    label: "创建日期",
    prop: "date"
  },
  {
    label: "交付日期",
    prop: "endDate"
  },
  {
    label: "操作",
    width: "120",
    fixed: "right",
    slot: "operation"
  }
];

const date = dayjs(new Date()).format("YYYY-MM-DD");

const tableData = [
  {
    order: "2024041920",
    date,
    type: "生产订单",
    endDate: date,
    tips: "金久风环"
  },
  {
    order: "2024041922",
    date,
    type: "生产订单",
    endDate: date,
    tips: "金久米克重"
  },
  {
    order: "2024041922",
    date,
    type: "采购订单",
    endDate: date,
    tips: "金久米克重"
  }
];

const waterRef = ref();

onMounted(() => {
  // https://pure-admin-utils.netlify.app/hooks/useWatermark/useWatermark.html
  const { setWatermark } = useWatermark(
    waterRef.value.getTableDoms().tableWrapper
  );
  setWatermark("金久自动化", {
    font: "18px Microsoft YaHei",
    globalAlpha: 0.8,
    forever: true,
    width: 240,
    height: 90
  });
});

const checkDetails = row => {
  console.log(row);
};
</script>

<template>
  <el-card>
    <p class="mb-3 font-bold">项目进展</p>
    <pure-table
      ref="waterRef"
      :data="tableData.concat(tableData).concat(tableData)"
      :columns="columns"
      height="320"
    >
      <template #operation="{ row }">
        <el-button link type="primary" @click="checkDetails(row)">
          查看详情
        </el-button>
      </template>
    </pure-table>
  </el-card>
</template>

<style scoped></style>
