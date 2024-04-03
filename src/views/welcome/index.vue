<script setup lang="ts">
import { getPerson, postPerson } from "@/api/test";
defineOptions({
  name: "Welcome"
});

const getPersonHandler = async () => {
  try {
    const data = await getPerson({
      name: "kayne",
      age: "30"
    });
    console.log(data);
  } catch (error) {}
};

const postParams = async () => {
  const data = await postPerson({
    name: "kayne",
    age: "32"
  });

  console.log(data);
};
</script>

<template>
  <h1 @click="postParams">金久首页工作台</h1>
</template>
