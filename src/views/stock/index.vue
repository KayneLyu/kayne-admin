<script setup lang="ts">
import TableComponent from "./table.vue";
import AddForm from "./apply/index.vue";
import QueryTable from "./query/index.vue";

defineOptions({
  name: "Stock"
});
</script>

<template>
  <div class="stock_container">
    <el-card>
      <div class="query_class">
        <QueryTable />
        <AddForm />
      </div>
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
.query_class {
  display: flex;
  justify-content: space-between;
}
</style>
