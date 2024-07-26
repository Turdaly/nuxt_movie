<template>
  <v-form
    ref="form"
    class="t-h-full t-flex t-items-center t-justify-center"
    @submit.prevent="submit"
  >
    <v-fade-transition leave-absolute>
      <div
        v-if="loading === false"
        class="t-w-full t-flex t-flex-col t-bg-custom-dark1 t-rounded-lg t-p-6 t-mb-32 t-gap-4"
      >
        <v-text-field
          v-model.trim="title"
          :rules="[rules.required, rules.title]"
          clearable
          :label="`${$t('form.Title')}`"
          variant="outlined"
          bg-color="#21242D"
          base-color="#A0B3D8"
          color="#A0B3D8"
        />
        <v-select
          v-model="genres"
          :rules="[rules.requiredArray]"
          :label="$t('titles.Genres')"
          :items="moviesStore.genresList"
          clearable
          multiple
          bg-color="#21242D"
          base-color="#A0B3D8"
          color="#A0B3D8"
          variant="outlined"
        ></v-select>
        <v-text-field
          v-model.trim="poster_path"
          :label="`${$t('form.Poster_path')}`"
          variant="outlined"
          bg-color="#21242D"
          base-color="#A0B3D8"
          color="#A0B3D8"
          clearable
        />
        <v-text-field
          v-model.trim="releaseDate"
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
          v-model.trim="duration"
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
          v-model="overview"
          :rules="[rules.required]"
          :label="`${$t('form.Overview')}`"
          variant="outlined"
          bg-color="#21242D"
          base-color="#A0B3D8"
          color="#A0B3D8"
          clearable
        />
        <v-btn
          type="submit"

          :text="`${$t('textButton.AddMovie')}`"
          bg-color="#21242d"
          base-color="#A0B3D8"
          color="#00B9AE"
          size="x-large"
        />
      </div>
    </v-fade-transition>
    <v-fade-transition leave-absolute>
      <v-progress-circular
        v-if="loading === true"
        indeterminate
        :size="70"
        :width="7"
        color="#A0B3D8"
      />
    </v-fade-transition>
    <v-fade-transition leave-absolute>
      <div
        v-if="loading === null"
        class="t-w-full t-flex t-flex-col t-items-center t-justify-center t-mb-32 t-gap-4"
      >
        <p
          class="t-w-full t-flex t-flex-col t-items-center t-gap-3 t-bg-[#21242d] t-rounded-lg t-p-6 t-text-xl t-text-center t-font-medium"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="4em"
            height="4em"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="#53a653"
              d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.27 38.27 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336z"
            />
          </svg>
          Данные сохранены успешно
        </p>
        <span
          class="t-underline t-underline-offset-2 t-cursor-pointer t-text-white"
          color="##A0B3D8"
          @click="resetForm"
          >Вернуться к форме</span
        >
      </div>
    </v-fade-transition>
  </v-form>
</template>

<script setup lang="ts">
import { useMoviesStore } from '~/stores/movies'
const moviesStore = useMoviesStore()

const title = ref<string>("");
const adult = ref<boolean>(false);
const genres = ref<Types.IGenre[]>([]);
const overview = ref<string>("");
const poster_path = ref<string>("");
const releaseDate = ref<string>("");
const duration = ref<number>(1);
const form = ref<any>();
const loading = ref<boolean | null>(false);

const submit = async () => {
  try {
    await form.value
      .validate()
      .then(
        async (v: {
          valid: boolean;
          errors: { id: string; errorMessages: string[] }[];
        }) => {
          if (v.valid) {
            loading.value = true;
            const data = {
              title: title.value,
              adult: adult.value,
              genres: genres.value,
              overview: overview.value,
              poster_path: poster_path.value,
              release_date: releaseDate.value,
              runtime: duration.value,
            };
            const { $apiCustom } = useNuxtApp();
            await $apiCustom.post("/myMovies", data);
            loading.value = null;
          }
        }
      );
  } catch (err) {
    console.log(err);
    loading.value = false;
  }
};

const resetForm = () => {
  title.value = "";
  adult.value = false;
  genres.value = [];
  overview.value = "";
  poster_path.value = "";
  releaseDate.value = "";
  duration.value = 1;
  loading.value = false;
};
</script>
