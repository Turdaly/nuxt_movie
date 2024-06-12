<template>
  <section>
    <div class="t-flex t-flex-col t-gap-6">
      <div class="">
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
      <div class="t-w-full t-bg-custom-dark2 t-h-48 t-p-4">
        <div class="t-flex t-gap-4">
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
            variant="solo-filled"
            bg-color="#21242D"
            item-color="#21242D"
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
            variant="solo-filled"
            bg-color="#21242D"
            item-color="#21242D"
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
            variant="solo-filled"
            bg-color="#21242D"
            item-color="#21242D"
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
            variant="solo-filled"
            bg-color="#21242D"
          ></v-select>
        </div>
      </div>
      <div>
        <NuxtLink to="">
          <h2 class="t-text-2xl t-font-bold">
            {{ $t('titles.Anime_Premieres') }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h2>
        </NuxtLink>
        <NuxtLink to="">
          <Slider />
        </NuxtLink>
      </div>
      <div>
        <h2 class="t-text-2xl t-font-bold">{{ $t('titles.Ganres') }}</h2>
        <SliderGanre />
      </div>
      <div>
        <NuxtLink to="">
          <h2 class="t-text-2xl t-font-bold">
            {{ $t('titles.Animes') }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h2>
        </NuxtLink>
        <NuxtLink to="">
          <Slider />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()

const items = [
  {title: () => t('sidebar.Menu.Home')},
  { title: (() => t("header.Animes")) },
]
</script>