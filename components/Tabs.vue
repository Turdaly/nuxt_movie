<template>
  <v-card>
    <v-tabs v-model="tab" bg-color="#21242d" color="">
      <v-tab value="one">{{ $t("tabs.Entertainment") }}</v-tab>
      <v-tab value="two">{{ $t("tabs.Childish") }}</v-tab>
    </v-tabs>

    <div class="t-bg-[#16181e]">
      <v-card-text>
        <v-tabs-window v-model="tab">
          <v-tabs-window-item value="one">
            <TVCard :counter="10" />
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <TVCard :counter="1" />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </v-card>
</template>
<script setup lang="ts">
const tab = ref("one");
</script>
