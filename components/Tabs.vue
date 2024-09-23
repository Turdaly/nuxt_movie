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
            <TVCard :chanels="getChanelEntertainment()" />
          </v-tabs-window-item>
          <v-tabs-window-item value="two">
            <TVCard :chanels="getChanelChildish()" />
          </v-tabs-window-item>
        </v-tabs-window>
      </v-card-text>
    </div>
  </v-card>
</template>
<script setup lang="ts">
const tab = ref("one");

const chanels = ref<Types.IChanel[]>([
  {
    id: 1,
    title: "ASTANA TV",
    type: "entertainment",
    link: "https://www.youtube.com/embed/bO-AdYpPIfw",
  },
  {
    id: 1,
    title: "Ben and Holly",
    type: "childish",
    link: "https://www.youtube.com/embed/DzAemKVXE4c",
  },
  {
    id: 1,
    title: "ЗВЕЗДА",
    type: "entertainment",
    link: "https://rutube.ru/play/embed/5ab908fccfac5bb43ef2b1e4182256b0/",
  },
  {
    id: 1,
    title: "Суббота",
    type: "childish",
    link: "https://rutube.ru/play/embed/310744c10a5809da38aa445c952976da/",
  },
  {
    id: 1,
    title: "ТНТ MUSIC",
    type: "entertainment",
    link: "https://rutube.ru/play/embed/5a294ae1ed12c44c7053301fb5fa9ba0/",
  },
]);

const getChanelEntertainment = () => {
  return chanels.value.filter((chanel) => chanel.type === "entertainment");
};
const getChanelChildish = () => {
  return chanels.value.filter((chanel) => chanel.type === "childish");
};
</script>
