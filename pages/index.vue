<template>
  <section>
    <div class="t-flex t-flex-col t-gap-8">
      <div>
        <Carousel />
      </div>
      <div>
        <h1 class="t-text-2xl t-font-bold">
          <NuxtLink to="">{{ $t("titles.Continue") }} </NuxtLink>
        </h1>
        <SliderContinue />
      </div>
      <div>
        <NuxtLink to="">
          <h1 class="t-text-2xl t-font-bold">
            {{ $t("titles.Adventure") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h1>
        </NuxtLink>
        <Slider />
      </div>
      <div>
        <NuxtLink to="">
          <h1 class="t-text-2xl t-font-bold">
            {{ $t("titles.PopularMovies") }}
            <v-icon
              icon="mdi-chevron-right"
              size="28"
              class="-t-translate-x-1"
            ></v-icon>
          </h1>
        </NuxtLink>
        <Slider />
      </div>
    </div>
  </section>
</template>


