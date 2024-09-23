<template>
  <section>
    <div class="t-flex t-flex-col t-gap-6">
      <div class="t-hidden lg:t-block">
        <!-- @vue-ignore -->
        <v-breadcrumbs :items="items" bg-color="#21242d">
          <template v-slot:title="{ item }">
            <NuxtLink to="/"
              ><h2 class="t-text-white">
                <!-- @vue-ignore -->
                {{ item.title() }}
              </h2></NuxtLink
            >
          </template>
        </v-breadcrumbs>
      </div>
      <div class="t-mt-6 lg:t-mt-0">
        <h1 class="t-text-4xl t-font-bold">{{ t("header.TVShows") }}</h1>
      </div>
      <div>
        <Tabs />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const items = [
  { title: () => t("sidebar.Menu.Home") },
  { title: () => t("header.TVShows") },
];

</script>
