<template>
  <div class="t-flex t-items-center" v-if="moviesList">
    <v-sheet color="#16181E" class="t-p-0">
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-group-item
          v-for="movie in moviesList.results"
          :key="movie.id"
          v-slot="{ toggle, selectedClass }"
        >
          <NuxtLink
            :to="{ name: 'movie-id', params: { id: movie.id } }"
            class="t-w-[170px] t-mr-8 t-group"
          >
            <v-card
              :class="['ma-4', selectedClass]"
              color="#21242d"
              rounded="xl"
              height="250"
              width="170"
              :image="`${imageBaseURL}${movie.poster_path}`"
              @click="toggle"
            >
            </v-card>
            <p
              class="t-text-center t-font-medium t-truncate t-ml-8 group-hover:t-text-gray-300"
            >
              {{ movie.title }}
            </p>
          </NuxtLink>
        </v-slide-group-item>
        <v-slide-group-item
          v-slot="{toggle }"
        >
          <NuxtLink
            :to="{ name: 'movie-id', params: { id: 1 } }"
            class="t-w-[170px] t-mr-8 t-group"
          >
            <v-card
              :class="['ma-4']"
              color="#21242d"
              rounded="xl"
              height="250"
              width="170"
              @click="toggle"
            >
              <v-card-text class="t-flex t-items-center t-justify-center t-h-full t-font-bold">
                {{ $t('textButton.WatchAll') }}
              </v-card-text>
            </v-card>

          </NuxtLink>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script lang="ts" setup>
import type { IMoviesList } from "~/types";
import { useMoviesStore } from '~/stores/movies'
const movieStore = useMoviesStore()

defineProps<{
  moviesList: IMoviesList | null;
}>();

const {
  public: { imageBaseURL },
} = useRuntimeConfig();
</script>