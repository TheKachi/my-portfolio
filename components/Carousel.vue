<template>
  <v-app class="h-[410px] border-4 dark:border-slate-200">
    <v-carousel cycle interval="3000" height="400" hide-delimiter-background>
      <v-carousel-item
        v-for="(slide, i) in slides"
        :key="i"
        :src="slide.src"
        class="h-full w-full object-contain"
      >
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
