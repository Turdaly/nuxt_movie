<template>
  <v-sheet color="#16181E">
    <v-slide-group class="pa-4" show-arrows>
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ toggle, selectedClass }"
      >
        <NuxtLink
          :to="{ name: 'movies-category', params: { category: 'melodramas' } }"
        >
          <v-card
            :class="['ma-4', selectedClass]"
            color="#21242d"
            rounded="lg"
            height="110"
            width="170"
            @click="toggle"
          >
          </v-card>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
