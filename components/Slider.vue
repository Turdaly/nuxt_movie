<template>
  <div class="t-flex t-items-center">
    <v-sheet
      max-width="1150"
      color="#16181E"
      class="t-p-0"
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
          <v-card
            :class="['ma-4', selectedClass]"
            color="grey-lighten-1"
            rounded="xl"
            height="250"
            width="170"
            @click="toggle"
          >
            <div class="d-flex fill-height align-center justify-center">
              <v-scale-transition>
                <v-icon
                  v-if="isSelected"
                  color="white"
                  icon="mdi-close-circle-outline"
                  size="48"
                ></v-icon>
              </v-scale-transition>
            </div>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>