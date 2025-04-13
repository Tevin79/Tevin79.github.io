<template>
  <div v-for="dat in data">
    <iframe class="h-screen" v-if="route.params.id == dat.id" :src="dat.url" style="border:solid 1px #777" width="100%"
      height="100%" frameborder="0" scrolling="yes"></iframe>
  </div>
</template>

<script setup lang="ts">
import { edt } from '/server/database/schema';
import { drizzle } from 'drizzle-orm/d1';

const { data } = await useFetch('/api/edt')

const route = useRoute();
</script>
