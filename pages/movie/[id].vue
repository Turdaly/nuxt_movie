<template>
  <section>
    <div v-if="moviesStore.detailMovie">
      <div class="">
        <v-breadcrumbs :items="(items as any)" bg-color="#21242d">
          <template v-slot:title="{ item }">
            <NuxtLink to="/movies"
              ><h2 class="t-text-white">
                <!-- @vue-ignore -->
                {{ item.title }}
              </h2></NuxtLink
            >
          </template>
        </v-breadcrumbs>
      </div>

      <div class="t-flex t-gap-10 t-flex-col lg:t-flex-row t-mt-6">
        <div class="t-w-full">
          <img :src="`${imageBaseUrl}${moviesStore.detailMovie.backdrop_path}`" alt="" />
        </div>
        <div class="t-flex t-flex-col t-gap-8">
          <div>
            <h1 class="t-text-6xl t-truncate t-text-wrap">
              {{ moviesStore.detailMovie.title }}
            </h1>
          </div>
          <div>
            <p>
              {{ moviesStore.detailMovie.release_date.slice(0, 4) }}
              {{ moviesStore.detailMovie.runtime }} мин 16+
            </p>
            <p class="t-flex">
              {{ moviesStore.detailMovie.production_countries[0].iso_3166_1 }}
            </p>
            <ul
              v-for="genres in moviesStore.detailMovie.genres"
              :key="genres.id"
              class="t-flex t-gap-2"
            >
              <li>{{ genres.name }}</li>
            </ul>
          </div>
          <div class="t-flex t-items-center t-gap-8">
            <Avatar v-for="n in 5" />
          </div>
          <div>
            <div class="t-flex t-items-center t-gap-4">
              <v-btn rounded="lg" color="#21242D" height="48" width="305">
                {{ $t("textButton.Trailer") }}
              </v-btn>
              <v-btn
                icon="mdi-bookmark-outline"
                rounded="lg"
                color="#21242D"
                @click="
                  moviesStore.addFavoriteMovie(
                    21383668,
                    parseInt($route.params.id.toString())
                  )
                "
              >
              </v-btn>
              <v-btn icon="mdi-share-outline" rounded="lg" color="#21242D">
              </v-btn>
            </div>
            <div class="t-mt-3">
              <p>
                {{ moviesStore.detailMovie.overview }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="t-flex t-flex-col t-gap-12">
        <div class="t-mt-10">
          <h1 class="t-text-2xl t-font-bold">
            {{ $t("titles.AlsoWatchingMovie") }}
          </h1>
          <Slider
            class="t-overflow-x-auto custom-scrollbar"
            :moviesList="moviesStore?.recommendedMovies"
          />
        </div>
        <div>
          <h1 class="t-text-2xl t-font-bold t-mb-6">
            {{ $t("titles.ActorsAndCreators") }}
          </h1>
          <div
            class="t-flex t-gap-6 t-mb-12 t-overflow-x-auto custom-scrollbar"
          >
            <div v-for="n in 9" class="">
              <Actor />
            </div>
            <v-btn
              size="90"
              rounded="pill"
              color="#21242D"
              class="text-capitalize"
            >
              {{ $t("textButton.Also") }}
            </v-btn>
          </div>
        </div>
      </div>
      <h1 class="t-text-2xl t-font-bold t-mb-4">{{ $t("titles.Reviews") }}</h1>
      <div class="">
        <div>
          <Review/>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useMoviesStore } from "~/stores/movies";
const moviesStore = useMoviesStore();
const { t } = useI18n();
const route = useRoute();

const items = [{ title: t("header.Movies") }, { title: t("ganre.Fiction") }];
const {
  public: { imageBaseUrl },
} = useRuntimeConfig();

const onInit = async () => {
  if (
    typeof route.params.id !== "string" ||
    /^\d+$/.test(route.params.id) === false
  )
    navigateTo({ name: "movies" });
};
onMounted(async () => {
  onInit();
  await Promise.allSettled([
    moviesStore.fetchDetailMovie(),
    moviesStore.fetchRecommendedMovies(),
    moviesStore.fetchReviewsMovie(),
  ]);
  console.log('asdasd', moviesStore.detailMovie)
});
</script>
