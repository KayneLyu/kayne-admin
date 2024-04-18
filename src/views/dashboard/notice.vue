<template>
  <el-card>
    <p>告警&通知</p>
    <el-scrollbar height="300px" class="mt-5 pr-10">
      <el-alert title="金久称重已过交货期" type="error" />
      <el-alert title="风环电机库存不足" type="warning" />
      <el-alert title="银丰风环已出货" type="success" />
      <el-alert title="银丰风环已出货" type="success" />
      <el-alert title="银丰风环已出货" type="success" />
      <el-alert title="银丰风环已出货" type="success" />
      <el-alert title="银丰风环已出货" type="success" />
      <el-alert title="银丰风环已出货" type="success" />
      <el-alert title="银丰风环已出货" type="success" />
    </el-scrollbar>
  </el-card>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.el-alert {
  margin-bottom: 10px;
}

.el-card {
  height: 100%;
}

</style>
