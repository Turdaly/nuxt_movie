<template>
  <section>
    <div class="t-flex t-flex-col t-gap-6">
      <div class="">
        <v-breadcrumbs :items="[$t('sidebar.Menu.Home'), $t('header.Movies')]" bg-color="#21242D"></v-breadcrumbs>
      </div>
      <div>
        <h1 class="t-text-4xl t-font-bold">{{ $t('header.Movies') }}</h1>
      </div>
      <div class=" t-w-full t-bg-custom-dark2 t-h-48 t-p-4">
          <div class="t-flex t-gap-4">
            <Select2 />
            <v-select
              label="Годы"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              variant="solo-filled"
              bg-color="#21242D"
              item-color="#21242D"

            ></v-select>
            <v-select
              label="Годы"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              variant="solo-filled"
              bg-color="#21242D"
              item-color="#21242D"
            >
          </v-select>
            <v-select
              label="Рейтинг"
              :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
              variant="solo-filled"
              bg-color="#21242D"
            ></v-select>
          </div>
      </div>
    </div>
  </section>
</template>
