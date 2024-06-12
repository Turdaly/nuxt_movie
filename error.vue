<template>
  <div class="t-h-screen t-flex t-items-center t-justify-center t-bg-[#21242d]">
    <v-card
      class="mx-auto"
      color="#21242d"
      elevation="16"
      width="450"
      height="200"
    >
      <template v-slot:title>
        <span class="font-weight-black t-text-3xl">{{ error?.statusCode }}</span>
      </template>

      <v-card-text class="t-bg-[#21242d]">
        <p class="t-text-gray-300 t-text-lg">{{ error.message }}</p>
      </v-card-text>
      <div>
        <v-card-text class="t-bg-[#21242d] t-mt-8">
          <NuxtLink to="/" class="hover:t-text-gray-300 t-text-lg"
            ><Icon
              name="dashicons:arrow-left-alt"
              class="-t-translate-y-0.5 t-mr-1"
            ></Icon
            >Go back home</NuxtLink
          >
        </v-card-text>
      </div>
    </v-card>
  </div>
</template>

<script setup lang="ts">
defineProps(["error"]);
</script>
