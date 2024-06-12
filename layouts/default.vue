<template>
  <div class="t-flex t-h-screen">
    <aside
      class="t-h-full t-text-white t-w-64 t-p-8 t-bg-custom-dark2 t-flex t-flex-col"
    >
      <div class="t-flex-grow">
        <div class="t-flex t-flex-col t-gap-8">
          <div>
            <h1 class="t-text-2xl t-font-bold t-flex t-flex-col">
              TINY <span class="t-text-lg">MOVIEZ</span>
            </h1>
          </div>
          <div>
            <h1 class="t-text-gray-400 t-mb-4">
              {{ $t("sidebar.Titles.Menu") }}
            </h1>
            <ul class="t-flex t-flex-col t-gap-3">
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Menu.Home") }} </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Menu.Discover") }} </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Menu.Awards") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Menu.Profile") }}</NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h1 class="t-text-gray-400 t-mb-4">
              {{ $t("sidebar.Titles.Library") }}
            </h1>
            <ul class="t-flex t-flex-col t-gap-3">
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Library.Recent") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Library.TopRated") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Library.Playlist") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{
                  $t("sidebar.Library.Downloaded")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{
                  $t("sidebar.Library.Watchlist")
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 class="t-text-gray-400 t-mb-4">
          {{ $t("sidebar.Titles.General") }}
        </h1>
        <ul class="t-flex t-flex-col t-gap-3">
          <li>
            <NuxtLink to="/">{{ $t("sidebar.General.Settings") }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/">{{ $t("sidebar.General.LogOut") }}</NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
    <div class="t-bg-custom-dark1 t-overflow-y-auto t-w-full t-flex t-flex-col">
      <header class="">
        <nav>
          <ul class="t-flex t-p-4 t-gap-8 t-items-center t-justify-center">
            <li class="t-text-xl link">
              <NuxtLink to="/movies">{{ $t("header.Movies") }}</NuxtLink>
            </li>
            <li class="t-text-xl link">
              <NuxtLink to="/tvshows">{{ $t("header.TVShows") }}</NuxtLink>
            </li>
            <li class="t-text-xl link">
              <NuxtLink to="/animes">{{ $t("header.Animes") }}</NuxtLink>
            </li>
            <div>
              <v-text-field
                class="t-w-72 t-mt-6"
                rounded-shaped
                clearable
                :label="$t('input.Placeholder')"
                variant="solo-filled"
                prepend-inner-icon="mdi-magnify"
                bg-color="#21242D"
              ></v-text-field>
            </div>
            {{
              $i18n.availableLocales
            }}
            <li class="t-text-xl t-cursor-pointer" @click="setLocale('ru')">
              {{ $t("header.Ru") }}
            </li>
            <li class="t-text-xl t-cursor-pointer" @click="setLocale('en')">
              {{ $t("header.Eng") }}
            </li>
          </ul>
        </nav>
      </header>
      <main class="t-px-20 t-pb-20">
        <slot> </slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const { setLocale } = useI18n();
</script>

<style scoped>
t-overflow-y-auto {
  display: absolute;
}
</style>