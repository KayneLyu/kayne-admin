<template>
  <el-card style="flex: 1">
    <p class="font-bold">快速开始</p>
    <ul>
      <li v-for="(item, key) in startMap" :key="key">
        <RouterLink :style="{background: item.bgcolor}" :to="item.path">{{
          item.name
        }}</RouterLink>
      </li>
    </ul>
  </el-card>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
const startMap = [
  {
    name: "订单",
    path: "/",
    bgcolor: "#0fc70f"
  },
  {
    name: "采购",
    path: "/procurement",
    bgcolor: "#b145e9"
  },
  {
    name: "仓库",
    path: "/order",
    bgcolor: "#ffa117"
  },
  {
    name: "配置",
    path: "/order",
    bgcolor: "#2196f3"
  },
  {
    name: "监控",
    path: "/order",
    bgcolor: "#001dc3",
  }
];
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  margin-top: 10px;
  gap: 20px;
  a {
    display: block;
    text-align: center;
    line-height: 60px;
    color: #fff;
    font-size: 20px;
    border-radius: 8px;
    width: 60px;
    height: 60px;
  }
}
</style>
