<template>
  <div class="container mx-auto t-bg-custom-dark1">
    <h2 class="t-text-2xl font-bold">{{ error?.statusCode }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps(['error'])
</script>