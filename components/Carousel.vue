<template>
  <v-app class="h-[530px] object-cover">
    <v-carousel cycle interval="3000" height="530" hide-delimiter-background>
      <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
      </v-carousel-item>
    </v-carousel>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    slides: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
