<template>
  <NuxtLoadingIndicator />
  <v-app>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
colorMode.preference = "dark";
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/@mdi/font@7.4.47/css/materialdesignicons.min.css',
    },
  ]
})

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .custom-scrollbar {
    scrollbar-color: #00B9AE #21242D; /* түстерді өзгерту */
    scrollbar-width: thin;
  }



}
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}

html {
  overflow: hidden !important;
}

a {
  @apply t-cursor-pointer hover:t-text-gray-300 focus:t-text-custom-teal;
}

li {
  @apply t-text-white;
}
h1,
h2,
h3 {
  @apply t-text-white;
}

p {
  @apply t-text-gray-400;
}


</style>
