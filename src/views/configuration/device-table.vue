<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import type { TableColumns } from "@pureadmin/table";
import Empty from "@/assets/svg/empty.svg?component";

// 初始化router
const router = useRouter();

const props = defineProps({
  tableData: Array<IConfiguration>,
  loading: {
    default: true
  },
  checkDetails: Function
});
const columns: Array<TableColumns> = [
  {
    label: "id",
    prop: "id",
    width: "60"
  },
  {
    label: "型号",
    prop: "device"
  },
  {
    label: "名称",
    prop: "name"
  },
  {
    label: "分类",
    prop: "type"
  },
  {
    label: "创建日期",
    prop: "create",
    slot: "people"
  },
  {
    label: "更新日期",
    prop: "update"
  },
  {
    label: "操作",
    width: "120",
    fixed: "right",
    slot: "operation"
  }
];

const pagination = reactive({
  pageSize: 5,
  currentPage: 1,
  background: true,
  total: props.tableData?.length
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
      :row-key="record => record.id"
      :columns="columns"
      :pagination="pagination"
      stripe
      :header-cell-style="{
        background: 'var(--el-fill-color-light)',
        color: 'var(--el-text-color-primary)'
      }"
    >
      <template #empty>
        <Empty fill="var(--el-svg-monochrome-grey)" class="m-auto mt-5" />
        <p>暂无数据</p>
      </template>

      <template #operation="{ row }">
        <el-button link type="primary" size="small" @click="checkDetails(row)">
          查看详情
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
