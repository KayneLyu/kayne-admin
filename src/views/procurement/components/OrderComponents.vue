<script lang="ts" setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
import type { TableColumns } from "@pureadmin/table";
import Empty from "@/assets/svg/empty.svg?component";

type ITableData = {
  order: number;
  date: string;
  status: string;
  endDate: string;
  tips: string;
};

// 初始化router
const router = useRouter();

const props = defineProps({
  tableData: Array<ITableData>,
  loading: {
    default: true
  },
  checkDetails: Function
});
const columns: Array<TableColumns> = [
  {
    label: "采购单号",
    prop: "order"
  },
  {
    label: "创建日期",
    prop: "date"
  },
  {
    label: "采购状态",
    prop: "status",
    slot: "tag"
  },
  {
    label: "到货日期",
    prop: "endDate"
  },
  {
    label: "申请人",
    prop: "applicant",
    slot: "people"
  },
  {
    label: "备注",
    prop: "tips"
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
        <el-button type="primary" size="small" @click="checkDetails(row)">
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
