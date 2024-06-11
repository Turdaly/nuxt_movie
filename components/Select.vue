<template>
  <div class="t-relative">
    <select
      @click="toggleDropdown"
      class="t-w-48 t-h-16  t-px-4 t-py-2  t-bg-custom-dark3 t-text-white t-border t-border-gray-700 t-rounded t-cursor-pointer ">
      <option v-if="curCountry">{{ curCountry }}</option>
      <option v-else>Choose a country</option>
    </select>
    <div v-if="dropdownOpen" class="t-absolute t-z-10 t-bg-gray-800 t-border t-border-gray-700 t-rounded t-mt-2 t-w-[550px]">
      <div class="t-grid t-grid-cols-3  t-p-2">
        <div
          v-for="country in countries"
          :key="country.code"
          class="t-px-4 t-py-2 t-cursor-pointer t-hover:bg-gray-700 t-text-gray-300 t-text-sm"
          @click="selectCountry(country.name)">
          {{ country.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const curCountry = ref('')
const dropdownOpen = ref(false)
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

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
}
const selectCountry = (country) => {
  console.log('Selected country:', country);
  curCountry.value = country
  dropdownOpen.value = false;
}

</script>

<style scoped>
.w-100 {
  width: 400px;
}
.h-350 {
  height: 350px;
}
</style>
