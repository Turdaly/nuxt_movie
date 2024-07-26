<template>
  <section>
    <div class="t-flex t-flex-col t-gap-6">
      <div class="">
        <v-breadcrumbs :items="(items as any)" bg-color="#21242d">
          <template v-slot:title="{ item }">
            <NuxtLink :to="item.href"
              ><h2 class="t-text-white">
                <!-- @vue-ignore -->
                {{ (item.title as any)() }}
              </h2></NuxtLink
            >
          </template>
        </v-breadcrumbs>
      </div>
      <div>
        <h1 class="t-text-4xl t-font-bold t-mb-1">{{ $t("header.Movies") }}: {{ $t("genres.Melodramas") }} </h1>
        <p class="t-text-gray-400 ">{{ genre }}, {{ country }}, {{ year }}</p>
      </div>
      <div class="t-w-full t-bg-custom-dark2 t-h-48 t-p-4">
        <div class="t-flex t-gap-4">
          <v-select
            :label="$t('titles.Genres')"
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
            class="t-truncate t-max-w-[263px] t-max-h-[56px]"
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
            class="t-truncate t-max-w-[263px] t-max-h-[56px]"
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
          ></v-select>
        </div>
      </div>
      <div class="t-grid t-grid-cols-6 t-gap-x-4 t-gap-y-8">
        <div class=''>
          <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/10900341/1e1b7418-6e0b-40be-9ebd-bd73d81293c0/1920x" >
        </div>
        <h3>Movie name</h3>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();
const items = [
  { title: () => t("sidebar.Menu.Home"), href: '/' },
  { title: () => t("header.Movies"), href: "/movies" },
  { title: () => t("genres.Melodramas"), href: '/movies/melodramas' },
];

const genre = ref<String>(t("genres.Melodramas"))
const country = ref<String>('Все страны')
const year = ref<String>('Все годы')

</script>

<style scoped></style>
