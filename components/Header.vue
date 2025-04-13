<template>
  <div class="flex flex-row sticky top-0 w-full space-x-10 bg-gray-700">
    <MyButton toTag="/" text="Home" />
    <MyButton v-for="dat in data" :toTag="'/edt/' + (dat.id).toString()" :text="dat.name" />
  </div>
</template>

<script setup>
let edt = "/edt/";
const { data } = await useFetch('/api/edt');
</script>
