<template>
  <v-sheet
    color="#16181E"
  >
    <v-slide-group
      class="pa-4"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ toggle }"
      >
        <NuxtLink :to="{ name: 'movie-id', params: { id: 1}}">
          <v-card
            :class="['ma-4']"
            color="#21242d"
            rounded="xl"
            height="150"
            width="220"
            @click="toggle"
          >
          </v-card>
        </NuxtLink>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>