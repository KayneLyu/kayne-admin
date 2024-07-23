<script setup lang="ts">
import { ref } from "vue";
import { useColumns } from "./columns";
import Empty from "@/assets/svg/empty.svg?component";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import AddFill from "@iconify-icons/ep/plus";
import Delete from "@iconify-icons/ep/delete";

const { columns, dataList, onAdd, onDel, onClear } = useColumns();
const dialogFormVisible = ref(false);

function onCancel() {
  dialogFormVisible.value = false;
  onClear();
}
</script>

<template>
  <div class="button_container">
    <el-button
      type="primary"
      @click="dialogFormVisible = true"
      class="mb-5"
      size="large"
      :icon="useRenderIcon(AddFill)"
    >
      添加零件入库
    </el-button>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    title="新增零件项"
    :close-on-click-modal="false"
  >
    <pure-table
      border
      row-key="id"
      align-whole="center"
      :header-cell-style="{
        background: 'var(--el-fill-color-light)',
        color: 'var(--el-text-color-primary)'
      }"
      :data="dataList"
      :columns="columns"
    >
      <template #empty>
        <Empty fill="var(--el-svg-monochrome-grey)" class="m-auto" />
      </template>
      <template #append>
        <el-button
          plain
          type="primary"
          class="w-full my-2"
          size="large"
          :icon="useRenderIcon(AddFill)"
          @click="onAdd"
        >
          添加一项零件
        </el-button>
      </template>
      <template #operation="{ row }">
        <el-button
          class="reset-margin"
          link
          type="primary"
          :icon="useRenderIcon(Delete)"
          @click="onDel(row)"
        />
      </template>
    </pure-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="onCancel">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          提交
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<style scoped>
:deep(.el-table__inner-wrapper::before) {
  height: 0;
}

.button_container {
  display: flex;
  justify-content: space-between;
}
</style>
