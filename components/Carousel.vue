<template>
  <div>
    <div class="block md:hidden -mx-[10px]">
      <v-app class="h-[210px]">
        <v-carousel
          cycle
          interval="3000"
          height="200"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src"
            class="h-full w-full object-contain"
          >
          </v-carousel-item>
        </v-carousel>
      </v-app>
    </div>
    <div class="hidden md:block">
      <v-app class="h-[410px]">
        <v-carousel
          cycle
          interval="3000"
          height="400"
          hide-delimiter-background
        >
          <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
            :src="slide.src"
            class="h-full w-full object-contain"
          >
          </v-carousel-item>
        </v-carousel>
      </v-app>
    </div>
  </div>
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
