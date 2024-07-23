<script setup lang="ts">
import { ref } from "vue";
import { Search, RefreshLeft } from "@element-plus/icons-vue";

const options = [
  {
    value: 1,
    label: "五金"
  },
  {
    value: 2,
    label: "钣金"
  },
  {
    value: 3,
    label: "电器"
  },
  {
    value: 4,
    label: "气动"
  },
  {
    value: 5,
    label: "管材"
  },
  {
    value: 6,
    label: "机加工"
  },
  {
    value: 7,
    label: "电机"
  },
  {
    value: 8,
    label: "螺丝"
  }
];

const searchName = () => {
  console.log("按名称搜索");
};

const searchValue = ref("");
const typeValue = ref("");
const deviceValue = ref("");

const resetOptions = () => {
  searchValue.value = "";
  typeValue.value = "";
  deviceValue.value = "";
};
</script>

<template>
  <div class="search">
    <div>
      <el-input
        v-model="searchValue"
        style="max-width: 300px; height: 40px"
        placeholder="请输入零件名称"
        class="input-with-select"
      >
        <template #append>
          <el-button type="warning" :icon="Search" @click="searchName"
            >搜索</el-button
          >
        </template>
      </el-input>
    </div>
    <div class="select_query">
      <el-button :icon="Search" type="primary" size="large">条件查询</el-button>
      <el-select
        v-model="typeValue"
        placeholder="请选择零件类型"
        size="large"
        style="width: 200px; margin-left: 10px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select
        v-model="deviceValue"
        placeholder="请选择适用机型"
        size="large"
        style="width: 200px; margin-left: 10px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-button
        @click="resetOptions"
        class="ml-10"
        :icon="RefreshLeft"
        type="primary"
        size="large"
        >重置筛选</el-button
      >
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select_query {
  margin: 10px 0;
}
</style>
