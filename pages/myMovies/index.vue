<template>
  <div>
    <h1 class="t-text-4xl t-font-bold">{{ $t("sidebar.Library.MyMovies") }}</h1>
    <div class="t-mt-12 t-mb-12">
      <div class="t-flex t-flex-wrap t-gap-6 t-mt-6">
        <div v-for="movie in moviesStore.myMovies" :key="movie.id">

          <v-card
            height="240"
            width="150"
            color="#21242d"
            rounded="xl"
            :image="movie.poster_path"
          >
          </v-card>
          <p class="t-text-center">{{ movie.title }}</p>
          <div class="t-flex t-justify-center t-gap-2">
              <Icon
                name="material-symbols:edit-note-rounded"
                class="t-text-white t-size-6 t-cursor-pointer hover:t-text-gray-400"
                @click="openEditModal(); editMovie(movie)"
              />
              <Icon
                name="material-symbols:delete-outline"
                class="t-text-white t-size-5 t-cursor-pointer hover:t-text-gray-400"
                @click="moviesStore.deleteMovie(movie)"
              />
          </div>
        </div>
      </div>
    </div>
    <div class="t-flex t-justify-center">
      <NuxtLink :to="{ name: 'myMovies-add' }">
        <v-btn
          rounded="lg"
          color="#21242D"
          height="48"
          width="305"
          size="x-large"
          :text="`${$t('textButton.AddMovie')}`"
        />
      </NuxtLink>
    </div>
    <div
      v-if="isEditModalOpen"
      class="t-fixed t-inset-0 t-z-10 t-bg-black t-bg-opacity-50"
    >
      <div class="t-bg-custom-dark2 t-max-w-3xl t-mx-auto t-my-8 t-rounded-xl">
        <div class="t-flex t-justify-between t-py-4 t-px-6 t-border-b">
          <NuxtLink
            class="t-flex t-items-center t-gap-2"
            @click="closeEditModal"
          >
            <Icon name="material-symbols:picture-in-picture-alt-outline" class="t-text-white"></Icon>
            <p>Входящие</p>
          </NuxtLink>
          <Icon
            name="material-symbols:close-rounded"
            class="t-size-6 t-cursor-pointer t-text-white"
            @click="closeEditModal"
          ></Icon>
        </div>
        <div class="t-px-4 t-py-6" v-if="currMovie">
          <v-text-field
            v-model.trim="currMovie.title"
            :rules="[rules.required, rules.title]"
            clearable
            :label="`${$t('form.Title')}`"
            variant="outlined"
            bg-color="#21242D"
            base-color="#A0B3D8"
            color="#A0B3D8"
          />
          <v-select
            v-model="currMovie.genres"
            :rules="[rules.requiredArray]"
            :label="$t('titles.Ganres')"
            :items="moviesStore.genresList"
            clearable
            multiple
            bg-color="#21242D"
            base-color="#A0B3D8"
            color="#A0B3D8"
            variant="outlined"
          ></v-select>
          <v-text-field
            v-model.trim="currMovie.poster_path"
            :label="`${$t('form.Poster_path')}`"
            variant="outlined"
            bg-color="#21242D"
            base-color="#A0B3D8"
            color="#A0B3D8"
            clearable
          />
          <v-text-field
            v-model.trim="currMovie.release_date"
            :rules="[rules.required, rules.year]"
            :label="`${$t('form.ReleaseDate')}`"
            clearable
            lazy-rules
            variant="outlined"
            bg-color="#21242D"
            base-color="#A0B3D8"
            color="#A0B3D8"
          />
          <v-text-field
            v-model.trim="currMovie.runtime"
            :rules="[rules.required, rules.duration]"
            :label="`${$t('form.Duration')}`"
            clearable
            lazy-rules
            variant="outlined"
            bg-color="#21242D"
            base-color="#A0B3D8"
            color="#A0B3D8"
          />
          <v-textarea
            v-model="currMovie.overview"
            :rules="[rules.required]"
            :label="`${$t('form.Overview')}`"
            variant="outlined"
            bg-color="#21242D"
            base-color="#A0B3D8"
            color="#A0B3D8"
            clearable
          />

          <div class="t-flex t-justify-end t-gap-2">
            <v-btn color="#32353d" @click="closeEditModal">Отмена</v-btn>
            <v-btn
              color="#32353d"
              @click="
                saveMovie()
                closeEditModal();
              "
              >Сохранить</v-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMoviesStore } from "~/stores/movies";
const moviesStore = useMoviesStore();
const isEditModalOpen = ref<boolean>(false);
const currMovie = ref<Types.IDetailMovie>()
const openEditModal = () => {
  isEditModalOpen.value = true
}

const closeEditModal = () => {
  isEditModalOpen.value = false;
};
const editMovie = (movie: Types.IDetailMovie) => {
  currMovie.value = JSON.parse(JSON.stringify(movie))
}

const saveMovie = async () => {
  if(currMovie.value){
    await moviesStore.patchMovie(currMovie.value)
  }
}

onMounted(async () => {
  await moviesStore.fetchMyMovies();
});
</script>

<style scoped></style>
