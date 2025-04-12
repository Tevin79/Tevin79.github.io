<template>
  <NuxtLink :to="toTag"
    class="mybutton p-2 m-2 rounded-lg border-2 border-black text-gray-100 bg-gray-700 hover:font-bold"
    activeClass="bg-gray-800">{{
      text }}</NuxtLink>
</template>
<script>
export default {
  props: {
    toTag: String,
    text: String,
  },
};
</script>
