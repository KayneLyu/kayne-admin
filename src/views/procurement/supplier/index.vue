<script lang="ts" setup>
import { ref, reactive } from "vue";
import { message } from "@/utils/message";
import type { TableColumns } from "@pureadmin/table";

defineOptions({
  name: "supplier"
});

const columns: Array<TableColumns> = [
  {
    label: "供应商",
    prop: "name"
  },
  {
    label: "产品类型",
    prop: "product"
  },
  {
    label: "产品单价（元/件）",
    prop: "price"
  },
  {
    label: "交货周期（天）",
    prop: "duration"
  },
  {
    label: "联系方式",
    prop: "concat"
  },
  {
    label: "联系地址",
    prop: "address"
  },
  {
    label: "操作",
    width: "150",
    fixed: "right",
    slot: "operation"
  }
];

const tableData = ref([
  {
    name: "尚城不锈钢",
    product: "激光切割",
    price: "5.5",
    concat: "13566666666",
    address: "东莞市万江区",
    duration: "5"
  }
]);

const loading = ref(false);

const pagination = reactive({
  pageSize: 10,
  currentPage: 1,
  background: true,
  total: tableData.value?.length
});

// setTimeout(() => {
//   loading.value = false;
// }, 1500);

const addPurchase = () => {
  message("登录成功", { type: "success" });
};

const handleClick = row => {};
</script>

<template>
  <div class="table_container">
    <div class="mb-5">
      <el-button @click="addPurchase" type="primary">+ 新增供应商</el-button>
    </div>
    <pure-table
      locale="zhCn"
      border
      :loading="loading"
      :data="tableData"
      :columns="columns"
      :pagination="pagination"
      stripe
      :header-cell-style="{
        background: 'var(--el-fill-color-light)',
        color: 'var(--el-text-color-primary)'
      }"
    >
      <template #tag="{ row }">
        <el-tag
          :type="row.status === '已完成' ? 'success' : null"
          disable-transitions
        >
          {{ row.status }}
        </el-tag>
      </template>

      <template #people="{ row }">
        <el-tag type="danger" disable-transitions>
          {{ row.applicant }}
        </el-tag>
      </template>

      <template #operation="{ row }">
        <el-button type="primary" size="small" @click="handleClick(row)">
          编辑
        </el-button>
        <el-button type="danger" size="small" @click="handleClick(row)">
          删除
        </el-button>
      </template>
    </pure-table>
  </div>
</template>

<style scoped lang="scss">
.table_container {
  height: 100%;
}
</style>
