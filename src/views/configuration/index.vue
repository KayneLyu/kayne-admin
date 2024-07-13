<script setup lang="ts">
import DeviceList from "./device-table.vue";

defineOptions({
  name: "Configuration"
});

const deviceTableData: IConfiguration[] = [
  {
    id: 1,
    device: "ZDFH450-D-FL(HS)-1400",
    name: "自动风环(风量)",
    type: "自动风环",
    create: "2024-07-12",
    update: "2024-07-13"
  },
  {
    id: 2,
    device: "ZDFH450-D-FL(HS)-1400",
    name: "自动风环(风量)",
    type: "自动风环",
    create: "2024-07-12",
    update: "2024-07-13"
  }
];
</script>

<template>
  <div class="table_container">
    <el-card>
      <DeviceList :tableData="deviceTableData" :loading="false" />
    </el-card>
  </div>
</template>

<style scoped lang="scss">
.table_container {
  height: 100%;
}
</style>
