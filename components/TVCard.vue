<template>
  <NuxtLink to="">
    <div class="t-flex t-flex-wrap t-gap-x-6 t-gap-y-16 t-w-full">
      <div v-for="n in counter" :key="n" class="t-bg-[#21242d] t-w-1/5 t-group">
        <img src="http://img.b612.tightvideo.com/channels/ntk_1.png" alt="">
        <p class="t-text-lg t-font-medium t-text-[#989faa] group-hover:t-text-gray-200">Name Chanel</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
  const props = defineProps({
    counter: Number
  })
</script>