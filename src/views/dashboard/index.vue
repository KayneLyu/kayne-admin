<template>
  <div class="main flex flex-col">
    <div class="section_container">
      <WeatherComponent />
      <WelcomeComponent />
      <QuickStart />
    </div>
    <div class="section_container mt-3">
      <ProjectComponent class="w-2/3" />
      <NoticeComponent class="flex-auto" />
    </div>
    <div class="section_container mt-3 h-100% section">
      <TodoListComponent class=" w-2/3" />
      <Updates class="flex-auto" />
    </div>
  </div>
</template>

<script setup lang="ts">
import WelcomeComponent from "./user.vue";
import WeatherComponent from "./weather.vue";
import QuickStart from "./quick-start.vue";
import Updates from "./updates.vue";
import NoticeComponent from "./notice.vue";
import ProjectComponent from "./project.vue";
import TodoListComponent from "./todo.vue";
defineOptions({
  name: "Dashboard"
});
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
}
.section_container {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
}
.section {
}
</style>
