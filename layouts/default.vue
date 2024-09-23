<template>
  <div class="t-flex t-h-screen">
    <aside
      class="t-h-full t-text-white t-w-64 t-p-8 t-bg-custom-dark2 t-flex-col t-hidden lg:t-flex"
    >
      <div class="t-flex-grow">
        <div class="t-flex t-flex-col t-gap-8">
          <div>
            <h1 class="t-text-2xl t-font-bold t-flex t-flex-col">
              TINY <span class="t-text-lg">MOVIEZ</span>
            </h1>
          </div>
          <div>
            <p class="t-mb-4">
              {{ $t("sidebar.Titles.Menu") }}
            </p>
            <ul class="t-flex t-flex-col t-gap-3">
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Menu.Home") }} </NuxtLink>
              </li>
              <li>
                <!-- <NuxtLink to="/">{{ $t("sidebar.Menu.Discover") }} </NuxtLink> -->
                <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
              </li>
              <li>
                <!-- <NuxtLink to="/">{{ $t("sidebar.Menu.Awards") }}</NuxtLink> -->
                <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
                <!-- <NuxtLink to="/">{{ $t("sidebar.Menu.Profile") }}</NuxtLink> -->
              </li>
            </ul>
          </div>
          <div>
            <p class="t-mb-4">
              {{ $t("sidebar.Titles.Library") }}
            </p>
            <ul class="t-flex t-flex-col t-gap-3">
              <li>
                <!-- <NuxtLink to="/">{{ $t("sidebar.Library.Recent") }}</NuxtLink> -->
                <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
              </li>
              <li>
                <!-- <NuxtLink to="/">{{ $t("sidebar.Library.TopRated") }}</NuxtLink> -->
                <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
              </li>
              <li>
                <!-- <NuxtLink to="/">{{ $t("sidebar.Library.Playlist") }}</NuxtLink> -->
                <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ name: 'profile-favorites' }">{{
                  $t("sidebar.Library.Favorite")
                }}</NuxtLink>
              </li>
              <li>
                <NuxtLink :to="{ name: 'myMovies' }">{{
                  $t("sidebar.Library.MyMovies")
                }}</NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <p class="t-mb-4">
          {{ $t("sidebar.Titles.General") }}
        </p>
        <ul class="t-flex t-flex-col t-gap-3">
          <li>
            <!-- <NuxtLink to="/">{{ $t("sidebar.General.Settings") }}</NuxtLink> -->
            <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
          </li>
          <li>
            <!-- <NuxtLink to="/">{{ $t("sidebar.General.LogOut") }}</NuxtLink> -->
            <NuxtLink to="/">{{ $t("sidebar.Menu.Nothing") }}</NuxtLink>
          </li>
        </ul>
      </div>
    </aside>
    <div class="t-bg-custom-dark1 t-overflow-y-auto t-w-full t-flex t-flex-col">
      <header class="t-min-h-3 lg:t-min-h-[134px]">
        <nav>
          <ul
            class="t-flex t-p-4 t-gap-8 t-items-center t-justify-center t-hidden lg:t-flex"
          >
            <li class="t-text-xl link">
              <NuxtLink to="/movies">{{ $t("header.Movies") }}</NuxtLink>
            </li>
            <li class="t-text-xl link">
              <NuxtLink to="/tvshows">{{ $t("header.TVShows") }}</NuxtLink>
            </li>
            <li class="t-text-xl link">
              <!-- <NuxtLink to="/animes">{{ $t("header.Animes") }}</NuxtLink> -->
            </li>
            <div>
              <v-text-field
                v-model="moviesStore.query"
                class="t-w-72 t-mt-6"
                rounded-shaped
                clearable
                :label="$t('input.Placeholder')"
                variant="solo-filled"
                prepend-inner-icon="mdi-magnify"
                bg-color="#21242D"
                @keyup.enter="
                  $router.push({
                    name: 'search',
                    query: { s: moviesStore.query },
                  })
                "
              ></v-text-field>
            </div>

            <li
              class="t-text-xl t-cursor-pointer"
              @click="
                setLocale('ru-Ru');
                reloadPage();
              "
            >
              {{ $t("header.Ru") }}
            </li>
            <li
              class="t-text-xl t-cursor-pointer"
              @click="
                setLocale('en-Us');
                reloadPage();
              "
            >
              {{ $t("header.Eng") }}
            </li>
          </ul>
        </nav>
      </header>
      <main class="t-px-5 t-pb-20 lg:t-px-20">
        <slot> </slot>
      </main>
    </div>
    <footer
      class="t-fixed t-bottom-0 lg:t-hidden t-min-h-[48px] t-w-full t-bg-custom-dark2 t-bg-opacity-95 t-shadow-strong-top"
    >
      <div class="t-flex t-justify-center t-w-full">
        <ul
          class="t-flex t-justify-between t-items-center t-pt-2 t-w-[600px] t-px-6"
        >
          <li>
            <NuxtLink to="/" class="t-flex t-flex-col t-items-center t-text-sm">
              <Icon
                name="material-symbols:home-outline-rounded"
                class="t-size-6"
              ></Icon>
              {{ $t("sidebar.Menu.Home") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'movies' }"
              class="t-flex t-flex-col t-items-center t-text-sm"
            >
              <Icon
                name="material-symbols:youtube-tv-outline"
                class="t-size-6"
              ></Icon>
              {{ $t("footer.Catalog") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'search' }"
              class="t-flex t-flex-col t-items-center t-text-sm"
            >
              <Icon name="mdi:magnify" class="t-size-6"></Icon>
              {{ $t("footer.Search") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="t-flex t-flex-col t-items-center t-text-sm">
              <Icon
                name="material-symbols:person-2-outline"
                class="t-size-6"
              ></Icon>
              {{ $t("footer.Account") }}
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/" class="t-flex t-flex-col t-items-center t-text-sm">
              <Icon name="mdi:dots-horizontal" class="t-size-6"></Icon>
              {{ $t("textButton.Also") }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from "~/stores/movies";
const moviesStore = useMoviesStore();
const { setLocale } = useI18n();
const reloadPage = () => {
  window.location.reload();
};
</script>

<style scoped>
.t-overflow-y-auto {
  display: absolute;
}
</style>
