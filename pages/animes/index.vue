<template>
  <section>
    <div class="t-flex t-flex-col t-gap-6">
      <div
        class="t-flex t-gap-4 t-bg-custom-dark2 t-p-4 lg:t-hidden t-font-medium"
      >
        <NuxtLink :to="{ name: 'movies'}">
          <h3>{{ $t("header.Movies") }}</h3>
        </NuxtLink>
        <NuxtLink :to="{ name: 'tvshows'}">
          <h3>{{ $t("header.TVShows") }}</h3>
        </NuxtLink>
        <NuxtLink :to="{ name: 'animes'}">
          <h3 class="t-text-custom-teal">{{ $t("header.Animes") }}</h3>
        </NuxtLink>
      </div>
      <div class="t-hidden lg:t-block">
        <v-breadcrumbs :items="(items as any)" bg-color="#21242d">
          <template v-slot:title="{ item }">
            <NuxtLink to="/"
              ><h2 class="t-text-white">
                <!-- @vue-ignore -->
                {{ (item.title as any)() }}
              </h2></NuxtLink
            >
          </template>
        </v-breadcrumbs>
      </div>
      <div>
        <h1 class="t-text-4xl t-font-bold">{{ $t("header.Animes") }}</h1>
      </div>
      <div class="t-bg-custom-dark2 t-p-4">
        <div class="t-flex t-gap-4 t-justify-between t-flex-col md:t-flex-row">
          <v-select
            :label="$t('titles.Ganres')"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            multiple
            variant="solo-filled"
            bg-color="#21242D"
            item-color="#21242D"
            class="t-truncate t-min-w-full md:t-min-w-0"
          ></v-select>
          <v-select
            :label="$t('filters.Countries')"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            multiple
            variant="solo-filled"
            bg-color="#21242D"
            item-color="#21242D"
            class="t-truncate t-min-w-full md:t-min-w-0"
          ></v-select>
          <v-select
            :label="$t('filters.Years')"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            multiple
            variant="solo-filled"
            bg-color="#21242D"
            item-color="#21242D"
            class="t-truncate t-min-w-full md:t-min-w-0"
          >
          </v-select>
          <v-select
            :label="$t('filters.Rate')"
            :items="[
              'California',
              'Colorado',
              'Florida',
              'Georgia',
              'Texas',
              'Wyoming',
            ]"
            multiple
            variant="solo-filled"
            bg-color="#21242D"
            class="t-truncate t-min-w-full md:t-min-w-0"
          ></v-select>
        </div>
      </div>
      <div class="">
        <NuxtLink to="">
          <h2 class="t-text-2xl t-font-bold">
            {{ $t("titles.Anime_Premieres") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h2>
        </NuxtLink>
        <div class="t-overflow-x-auto custom-scrollbar">
          <NuxtLink to="">
            <Slider />
          </NuxtLink>
        </div>
      </div>
      <div>
        <h2 class="t-text-2xl t-font-bold">{{ $t("titles.Ganres") }}</h2>
        <SliderGanre />
      </div>
      <div class="t-overflow-x-auto custom-scrollbar">
        <NuxtLink to="">
          <h2 class="t-text-2xl t-font-bold">
            {{ $t("titles.The_best_anime") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h2>
        </NuxtLink>
        <div class="t-overflow-x-auto custom-scrollbar">
          <NuxtLink to="">
            <Slider />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

const items = [
  { title: () => t("sidebar.Menu.Home") },
  { title: () => t("header.Animes") },
];
</script>

<style scoped>
.v-input{
  max-width: 263px !important;
  max-height: 56px !important;
}

.v-field__input {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
