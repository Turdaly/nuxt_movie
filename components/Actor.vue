<template>
  <div class="t-flex t-gap-4">
    <div v-for="(member, index) in visibleCast" :key="member.id" class="t-flex">
      <div class="t-flex t-flex-col t-group">
        <NuxtLink to="">
          <v-avatar
            :image="
              member.profile_path
                ? `${imageBaseURL}${member.profile_path}`
                : 'https://www.pinclipart.com/picdir/big/345-3457561_download-svg-download-png-japan-man-icon-clipart.png'
            "
            size="85"
            color="white"
          ></v-avatar>
        </NuxtLink>
        <p
          class="t-text-sm t-text-center t-text-wrap t-w-[85px] t-mt-2 group-hover:t-text-gray-200"
        >
          {{ member.name }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useMoviesStore } from "~/stores/movies";

const moviesStore = useMoviesStore();
const {
  public: { imageBaseURL },
} = useRuntimeConfig();

const visibleCount = ref(0);

const updateVisibleCount = () => {
  const width = window.innerWidth;
  if (width >= 1500) {
    visibleCount.value = 10;
  } else if (width >= 1400) {
    visibleCount.value = 9;
  } else if (width >= 1300) {
    visibleCount.value = 8;
  } else if (width >= 1270) {
    visibleCount.value = 7;
  } else if (width >= 1150) {
    visibleCount.value = 10;
  } else if (width >= 1050) {
    visibleCount.value = 9;
  } else if (width >= 950) {
    visibleCount.value = 8;
  } else if (width >= 850) {
    visibleCount.value = 7;
  } else if (width >= 750) {
    visibleCount.value = 6;
  } else if (width >= 650) {
    visibleCount.value = 5;
  } else if (width >= 550) {
    visibleCount.value = 4;
  } else {
    visibleCount.value = 3;
  }
};

const visibleCast = computed(() =>
  moviesStore.credits?.cast.slice(0, visibleCount.value)
);

onMounted(() => {
  updateVisibleCount();
  window.addEventListener("resize", updateVisibleCount);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateVisibleCount);
});
</script>
