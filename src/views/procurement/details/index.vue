<script setup lang="ts">
import { ref } from "vue";

const tableRowClassName = ({ rowIndex }: { rowIndex: number }) => {
  if (rowIndex === 0 || rowIndex === 2 || rowIndex === 3) {
    return "pure-warning-row";
  } else if (rowIndex === 3 || rowIndex === 7) {
    return "pure-success-row";
  }
  return "";
};

const loading = ref(false);
const tableRef = ref();
const clearFilter = val => {
  const { clearFilter } = tableRef.value.getTableRef();
  clearFilter(val);
};

const filterTag = (value, row) => {
  return row.itemStatus === value;
};

const filterHandler = (value, row, column) => {
  const property = column["property"];
  return row[property] === value;
};

const columns: TableColumnList = [
  {
    label: "项目名称",
    prop: "name"
  },
  {
    label: "型号规格",
    prop: "type"
  },
  {
    label: "采购数量",
    prop: "number"
  },
  {
    label: "采购单价",
    prop: "price"
  },
  {
    label: "用途",
    prop: "useful"
  },
  {
    label: "供应商",
    prop: "supplier"
  },
  {
    label: "状态",
    prop: "itemStatus",
    slot: "tag",
    filters: [
      { text: "已完成", value: "已完成" },
      { text: "购买中", value: "采购中" }
    ],
    filterMethod: filterTag,
    filterPlacement: "bottom-end"
  }
];
const tableData = ref([
  {
    name: "角铝",
    type: "50x10",
    number: "12",
    price: "",
    supplier: "淘宝",
    useful: "风环",
    itemStatus: "采购中"
  },
  {
    name: "同步带",
    type: "5540",
    number: "4",
    price: "",
    supplier: "淘宝",
    useful: "风环",
    itemStatus: "已完成"
  },
  {
    name: "铝导辊",
    type: "2m",
    number: "2",
    price: "",
    supplier: "淘宝",
    useful: "风环",
    itemStatus: "采购中"
  },
  {
    name: "压力表",
    type: "water",
    number: "5",
    price: "",
    supplier: "淘宝",
    useful: "风环",
    itemStatus: "采购中"
  },
  {
    name: "插座",
    type: "5孔",
    number: "5",
    price: "",
    supplier: "淘宝",
    useful: "办公用品",
    itemStatus: "已完成"
  }
]);
</script>

<template>
  <div>
    <div class="mb-5">
      <el-button @click="clearFilter" type="primary">重置筛选</el-button>
    </div>
    <pure-table
      border
      ref="tableRef"
      :loading="loading"
      :data="tableData"
      :columns="columns"
      :row-class-name="tableRowClassName"
    >
      <template #tag="{ row }">
        <el-tag
          :type="row.itemStatus === '已完成' ? 'success' : 'danger'"
          disable-transitions
        >
          {{ row.itemStatus }}
        </el-tag>
      </template>
    </pure-table>
  </div>
</template>

<style>
/* 此处样式会在全局都生效，上面 tableRowClassName 函数返回的值也就是类名必须在全局中唯一，避免样式突出 */
.pure-warning-row {
  --el-table-tr-bg-color: var(--el-color-danger-light-9);
}

.pure-success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
