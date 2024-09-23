<template>
  <div class="relative carousel">
    <v-carousel hide-delimiter-background class="">
      <v-carousel-item
        v-for="item in items"
        :key="item.title"
        :src="item.src"
        rounded="xl"
        cover
      >
        <div class="relative">
          <div class="t-absolute t-bottom-6 t-left-4">
            <v-btn
              prepend-icon="mdi-plus"
              variant="tonal"
              rounded="lg"
              height="64"
              width="248"
              color="white"
            >
              {{ $t("textButton.Watchlist") }}
            </v-btn>
          </div>
          <div class="t-absolute t-bottom-6 t-right-4">
            <v-btn color="#00B9AE" rounded="lg" height="64" width="248">
              {{ $t("textButton.WatchNow") }}
            </v-btn>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts" setup>
const items = [
  { src: "https://cdn.vuetifyjs.com/images/cards/docks.jpg", title: "Docks" },
  { src: "https://cdn.vuetifyjs.com/images/cards/hotel.jpg", title: "Hotel" },
  {
    src: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
    title: "Sunshine",
  },
];
</script>

<style>
.carousel .v-carousel__controls {
  pointer-events: none;
}
</style>
0
