<template>
  <section>
    <div class="">
      <div class="t-flex t-gap-10">
        <div class="t-min-w-[650px] t-w-full">
          <!-- <img src="public/images/Стражи.jpg" alt="" /> -->
        </div>
        <div class="t-flex t-flex-col t-gap-8">
          <div>
            <h1 class="t-max-w-[400px] t-text-6xl t-truncate">Movie name</h1>
          </div>
          <div>
            <p>2021 2ч 11 мин 16+</p>
            <ul class="t-flex t-gap-2">
              <li>Сша</li>
              <li>Фантастика</li>
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
              <v-btn icon="mdi-bookmark-outline" rounded="lg" color="#21242D">
              </v-btn>
              <v-btn icon="mdi-share-outline" rounded="lg" color="#21242D">
              </v-btn>
            </div>
            <div class="t-mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                dignissimos incidunt? Modi soluta incidunt ut mollitia minus
                molestiae. Culpa ex itaque facilis natus facere voluptate
                provident? Harum cumque laboriosam illum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 class="t-text-2xl t-font-bold">
          {{ $t("titles.AlsoWatchingMovie") }}
        </h1>
        <!-- <Slider /> -->
      </div>
      <div>
        <h1 class="t-text-2xl t-font-bold t-mb-6">
          {{ $t("titles.ActorsAndCreators") }}
        </h1>
        <div class="t-flex t-gap-6">
          <div v-for="n in 9" class="t-size-48">
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
      <h1 class="t-text-2xl t-font-bold t-mb-4">{{ $t("titles.Reviews") }}</h1>
      <div class="t-flex t-gap-10">
        <div v-for="n in 3">
          <NuxtLink to="">
            <Review />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>
