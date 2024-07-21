<template>
  <section>
    <div class="t-flex t-flex-col t-gap-8">
      <div>
        <Carousel />
      </div>
      <div class="">
        <h1 class="t-text-2xl t-font-bold">
          <NuxtLink to="">{{ $t("titles.Continue") }} </NuxtLink>
        </h1>
        <SliderContinue />
      </div>
      <div>
        <NuxtLink to="">
          <h1 class="t-text-2xl t-font-bold">
            {{ $t("titles.Upcoming") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h1>
        </NuxtLink>
        <div class="t-overflow-x-auto custom-scrollbar">
          <Slider :moviesList="movieStore.upcomingMovies" />
        </div>
      </div>
      <div>
        <NuxtLink to="">
          <h1 class="t-text-2xl t-font-bold">
            {{ $t("titles.PopularMovies") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h1>
        </NuxtLink>
        <div class="t-overflow-x-auto custom-scrollbar">
          <Slider :moviesList="movieStore.popularMovies" />
        </div>
      </div>
      <div>
        <NuxtLink to="">
          <h1 class="t-text-2xl t-font-bold">
            {{ $t("titles.The_best_movies") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h1>
        </NuxtLink>
        <div class="t-overflow-x-auto custom-scrollbar">
          <Slider :moviesList="movieStore.topMovies" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useMoviesStore } from "~/stores/movies";
const movieStore = useMoviesStore();

onMounted(async () => {
  await Promise.allSettled([
    movieStore.fetchPopularMovies(),
    movieStore.fetchUpcomingMovies(),
    movieStore.fetchTopRatedMovies()
  ]);
});
</script>
