<template>
  <v-sheet
    color="#16181E"
    v-if="moviesStore.reviews"
  >
    <v-slide-group
      class="pa-4"
      show-arrows
    >
      <v-slide-group-item
        v-for="review in moviesStore.reviews.results"
        :key="review.id"
        v-slot="{ toggle }"
      >
        <NuxtLink>
          <div class="t-flex t-flex-col t-justify-between t-bg-custom-dark2 t-rounded-xl t-p-5 t-mr-6 t-max-w-[342px] t-h-44 hover:t-bg-[#2a2d35]">
            <div class="t-overflow-hidden">
              <p class="t-text-sm t-font-semibold t-mb-2">{{ review.author }}</p>
              <p class="t-font-semibold t-text-white t-line-clamp-3">
                {{ review.content }}
              </p>
            </div>
            <div class="t-flex t-justify-between">
              <p class="t-text-sm">{{ review.created_at }}.</p>
              <p class="t-font-bold">193</p>
            </div>
          </div>
        </NuxtLink>
      </v-slide-group-item>
      <div v-if="moviesStore.reviews.results.length === 0">{{ $t('messages.Review') }}</div>
    </v-slide-group>
  </v-sheet>
</template>

<script lang="ts" setup>
const moviesStore = useMoviesStore()

</script>
