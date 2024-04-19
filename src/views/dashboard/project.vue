<script setup lang="ts">
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

const checkDetails = row => {
  console.log(row);
};
</script>

<template>
  <el-card>
    <p class="mb-3">项目进展</p>
    <pure-table
      :data="tableData.concat(tableData).concat(tableData)"
      :columns="columns"
      height="300"
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
