<template>
  <v-menu>
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn text="Жанры" v-bind="activatorProps" :height="56" color="#2c2f37" е></v-btn>
    </template>

    <v-list class="t-grid t-grid-cols-3 t-gap-4 t-translate-y-4">
      <v-list-item @click="onClick" v-for="country in countries">
        <v-list-item-title>{{ country.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script setup lang="ts">
const countries = [
  { code: 'US', name: 'United States' },
  { code: 'CA', name: 'Canada' },
  { code: 'MX', name: 'Mexico' },
  { code: 'BR', name: 'Brazil' },
  { code: 'AR', name: 'Argentina' },
  { code: 'UK', name: 'United Kingdom' },
  { code: 'DE', name: 'Germany' },
  { code: 'FR', name: 'France' },
  { code: 'IT', name: 'Italy' },
  { code: 'ES', name: 'Spain' },
  { code: 'RU', name: 'Russia' },
  { code: 'CN', name: 'China' },
  { code: 'JP', name: 'Japan' },
  { code: 'IN', name: 'India' },
  { code: 'AU', name: 'Australia' },
  { code: 'NZ', name: 'New Zealand' }
]
</script>
