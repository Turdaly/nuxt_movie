<template>
  <NuxtLink to="">
    <div class="t-flex t-flex-wrap t-gap-x-6 t-gap-y-16 t-w-full">
      <div v-for="chanel in chanels" :key="chanel.id" class="t-bg-[#21242d] t-group">
        <iframe
          class="t-w-full"
          :src="chanel.link"
        >
        </iframe>
        <p
          class="t-text-lg t-font-medium t-text-[#989faa] group-hover:t-text-gray-200"
        >
          {{ chanel.title }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  chanels: Types.IChanel[],
}>();

const videoBaseURL = useRuntimeConfig().public.videoBaseURL
</script>
