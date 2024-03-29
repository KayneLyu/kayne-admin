<script lang="ts" setup>
import { ref, reactive, h } from "vue";
import { message } from "@/utils/message";
import type { TableColumns } from "@pureadmin/table";
import {
  addDialog,
  closeDialog,
  updateDialog,
  closeAllDialog
} from "@/components/ReDialog";
import { useColumns } from "./column";
import Empty from "@/assets/svg/empty.svg?component";

const { editMap, columns, dataList, onEdit, onSave, onCancel, onDel } =
  useColumns();

defineOptions({
  name: "supplier"
});

const loading = ref(false);

const pagination = reactive({
  pageSize: 10,
  currentPage: 1,
  background: true,
  total: dataList.value.length
});

// setTimeout(() => {
//   loading.value = false;
// }, 1500);

const addPurchase = () => {
  addDialog({
    title: "新增供应商",
    closeOnClickModal: false,
    contentRenderer: () => h("", {})
  });
};

</script>

<template>
  <div class="table_container">
    <div class="mb-5">
      <el-button class="" @click="addPurchase" type="primary"
        >+ 新增供应商</el-button
      >
    </div>
    <pure-table
      row-key="id"
      locale="zhCn"
      border
      :loading="loading"
      :data="dataList"
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

      <template #operation="{ row, index }">
        <el-button
          v-if="!editMap[index]?.editable"
          class="margin-auto"
          type="primary"
          @click="onEdit(row, index)"
        >
          编辑
        </el-button>
        <div v-else>
          <el-button
            class="reset-margin"
            link
            type="primary"
            @click="onSave(index)"
          >
            保存
          </el-button>
          <el-button class="reset-margin" link @click="onCancel(index)">
            取消
          </el-button>
          <el-button
            class="reset-margin"
            type="danger"
            link
            @click="onDel(row)"
          >
            删除
          </el-button>
        </div>
      </template>
    </pure-table>
  </div>
</template>

<style scoped lang="scss">
.table_container {
  height: 100%;
}
</style>
