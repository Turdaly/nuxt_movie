<template>
  <section class="t-bg-custom-dark1 t-min-h-screen t-overflow-y-auto">
    <div class="t-mt-12 t-px-8 t-pb-12">
      <div>
        <h1 class="t-text-4xl t-font-bold">{{ $t("input.Placeholder") }}</h1>
      </div>
      <div class=" lg:t-hidden">
        <v-text-field
          class="t-mt-6 t-max-w-[830px]"
          rounded-shaped
          clearable
          variant="solo-filled"
          prepend-inner-icon="mdi-magnify"
          bg-color="#21242D"
          v-model.trim="moviesStore.query"
          @keyup.enter="
            $router
              .push({
                name: 'search',
                query: { s: moviesStore.query },
              })
              .then(() => {
                refreshPage();
              })
          "
        ></v-text-field>
      </div>
      <div class="t-mt-12 t-mb-12">
        <!-- <h3 class="t-text-xl t-font-medium">{{ $t("titles.Interested") }}</h3> -->
        <div class="t-flex t-flex-wrap t-gap-6 t-mt-6">
          <div
            v-for="movie in moviesStore.searchMovies?.results"
            :key="movie.id"
          >
            <NuxtLink :to="{ name: 'movie-id', params: { id: movie.id } }">
              <v-card
                color="#21242d"
                rounded="xl"
                height="240"
                width="150"
                :image="`${imageBaseURL}${movie.poster_path}`"
              >
              </v-card>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <Icon name="material-symbols:close-rounded" class="t-size-16"></Icon>
  </section>
</template>

<script setup lang="ts">
import { useMoviesStore } from "~/stores/movies";
const moviesStore = useMoviesStore();
const route = useRoute();

const {
  public: { imageBaseURL },
} = useRuntimeConfig();

const refreshPage = () => {
  window.location.reload();
};



onMounted(async () => {
  if (route.query.s) {
    moviesStore.setQuery(route.query.s?.toString());
    await moviesStore.fetchSearchMovies();
  }
});
</script>

<style scoped>
.section {
  min-height: 100vh;
  overflow-y: auto;
  background-color: #16181e; /* custom dark background */
}
</style>
