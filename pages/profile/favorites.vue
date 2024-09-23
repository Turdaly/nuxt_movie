<template>
  <div class="t-mt-12 t-px-8 t-pb-12">
    <div>
      <h1 class="t-text-4xl t-font-bold">
        {{ $t("sidebar.Library.Favorite") }}
      </h1>
    </div>
    <div></div>
    <div class="t-mt-12 t-mb-12">
      <div class="t-flex t-flex-wrap t-gap-6 t-mt-6">
        <div
          v-for="movie in moviesStore.favoriteMovies?.results"
          :key="movie.id"
        >
          <NuxtLink
            :to="{ name: 'movie-id', params: { id: movie.id } }"
            class="t-flex t-flex-col t-items-center t-group"
          >
            <v-card
              color="#21242d"
              rounded="xl"
              height="240"
              width="150"
              :image="`${imageBaseURL}${movie.poster_path}`"
            >
            </v-card>
            <p
              class="t-text-wrap t-max-w-[160px] t-text-center group-hover:t-text-gray-300"
            >
              {{ movie.title }}
            </p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from "~/stores/movies";
const moviesStore = useMoviesStore();

const {
  public: { imageBaseURL },
} = useRuntimeConfig();

onMounted( async () => {
  await moviesStore.fetchFavoriteMovies()
})
</script>

