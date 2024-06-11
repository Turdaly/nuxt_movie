<template>
  <section>
    <div class="t-flex t-flex-col t-gap-8">
      <div>
        <Carousel />
      </div>
      <div>
        <h1 class="t-text-2xl t-font-bold">{{ $t('titles.Continue') }} </h1>
        <SliderContinue />
      </div>
      <div>
        <h1 class="t-text-2xl t-font-bold">{{ $t('titles.Adventure') }}</h1>
        <Slider />
      </div>
      <div>
        <h1 class="t-text-2xl t-font-bold">{{ $t('titles.PopularMovies') }}</h1>
        <Slider />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">

</script>
