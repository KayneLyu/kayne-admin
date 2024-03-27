<script lang="ts" setup>
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import type { TableColumns } from "@pureadmin/table";

type ITableData = {
  order: number;
  date: string;
  status: string;
  endDate: string;
  tips: string;
};

defineOptions({
  name: "purchase"
});

// 初始化router
const router = useRouter();

const props = defineProps({
  tableData: Array<ITableData>,
  loading: {
    default: true
  }
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

const handleClick = row => {
  console.log(row);
  router.push("/procurement/details/index");
};
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
        <el-button link type="primary" size="small" @click="handleClick(row)">
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