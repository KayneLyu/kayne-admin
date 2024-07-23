<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const deviceNumber = ref("");
const route = useRoute();
onMounted(() => {
  deviceNumber.value = route.params.device as string;
});
</script>

<template>
  <div>配置详情 {{ deviceNumber }}</div>
</template>

<style lang="scss" scoped></style>
