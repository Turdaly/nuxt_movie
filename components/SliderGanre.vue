<template>
  <v-sheet
    max-width="1150"
    color="#16181E"
  >
    <v-slide-group
      class="pa-4"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <NuxtLink :to="{ name: 'movies-category', params: { category: 'melodramas'}}">
          <v-card
            :class="['ma-4', selectedClass]"
            color="#21242d"
            rounded="lg"
            height="110"
            width="170"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <Icon name="ri:emotion-sad-line" size="48" color="#b0afb2" />
              </v-scale-transition>
            </div>
          </v-card>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>