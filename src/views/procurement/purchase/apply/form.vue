<script setup lang="ts">
import { useColumns } from "./columns";
import Empty from "@/assets/svg/empty.svg?component";
import { useRenderIcon } from "@/components/ReIcon/src/hooks";
import AddFill from "@iconify-icons/ep/plus";
import Delete from "@iconify-icons/ep/delete";

const { columns } = useColumns();

const props = defineProps<{
  dataList: [];
  onAdd: (e: MouseEvent) => void;
  onDel: (e: MouseEvent) => void;
}>();
</script>

<template>
  <div class="flex">
    <pure-table
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
          class="w-full my-2"
          :icon="useRenderIcon(AddFill)"
          @click="onAdd"
        >
          添加采购项
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
  </div>
</template>

<style scoped>
:deep(.el-table__inner-wrapper::before) {
  height: 0;
}
</style>
