<script setup lang="ts">
import TableComponent from "./table.vue";
import AddForm from "./apply/index.vue";

defineOptions({
  name: "Stock"
});
</script>

<template>
  <div class="stock_container">
    <el-card>
      <AddForm />
      <TableComponent />
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.stock_container {
  height: 100%;
}
.header {
  display: flex;
  justify-content: space-between;
}
</style>
