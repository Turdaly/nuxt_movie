<template>
  <section>
    <div v-if="moviesStore.detailMovie">
      <div class="">
        <v-breadcrumbs :items="(items as any)" bg-color="#21242d">
          <template v-slot:title="{ item }">
            <NuxtLink to="/movies"
              ><h2 class="t-text-white">
                {{ item.title }}
              </h2></NuxtLink
            >
          </template>
        </v-breadcrumbs>
      </div>

      <div class="t-flex t-gap-10 t-flex-col lg:t-flex-row t-mt-6">
        <iframe
          class="t-w-full t-min-h-[400px]"
          :src="`${videoBaseURL}/${moviesStore.trailerLink}`"
        >
        </iframe>
        <div class="t-flex t-flex-col t-gap-8 t-items-center lg:t-items-stretch md:t-w-full">
          <div>
            <h1 class="t-text-6xl t-truncate t-text-wrap t-text-center">
              {{ moviesStore.detailMovie.title }}
            </h1>
          </div>
          <div class="t-flex t-flex-col t-items-center t-font-medium">
            <ul class="t-flex t-gap-3">
              <li>
                {{ moviesStore.detailMovie.release_date.slice(0, 4) }}
              </li>
              <li>{{ moviesStore.detailMovie.runtime }} мин</li>
            </ul>
            <ul class="t-flex t-items-center t-gap-6">
              <li>
                {{ moviesStore.detailMovie.production_countries[0].name }}
              </li>
              <li
                v-for="genres in moviesStore.detailMovie.genres"
                :key="genres.id"
              >
                {{ genres.name }}
              </li>
            </ul>
          </div>
          <div class="t-flex t-items-center t-gap-8">
            <Avatar v-for="n in 5" />
          </div>
          <div class="t-flex t-flex-col t-items-center lg:t-items-stretch">
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
                  );
                  toggleSnackbar();
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
            <div class="t-mb-6">
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
          <Review />
        </div>
      </div>
      <v-snackbar v-model="snackbar" :timeout="2500" color="#21242D">
        <p class="t-text-green-400">{{ $t("titles.Snackbar") }}</p>
      </v-snackbar>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useMoviesStore } from "~/stores/movies";

const moviesStore = useMoviesStore();
const { t } = useI18n();
const route = useRoute();

const snackbar = ref<boolean>(false);
const items = [{ title: t("header.Movies") }, { title: t("genres.Fiction") }];
const {
  public: { videoBaseURL },
} = useRuntimeConfig();

const toggleSnackbar = () => {
  snackbar.value = true;
};

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
    moviesStore.fetchVideosMovie(),
    moviesStore.fetchCreditsMovie()
  ]);
  console.log(moviesStore.credits)
});
</script>
