<template>
  <section
    class="h-[calc(100vh-64px)] md:h-[calc(100vh-100px)] px-20 md:px-48 md:py-40 flex flex-col md:justify-center md:items-stretch"
  >
    <!-- Bio  -->
    <div class="mt-60 md:mt-0">
      <h1 class="text-xl -mb-16 ml-[6px]">Hi there, my name is</h1>
      <h2 class="font-futurabold text-4xl lg:text-6xl">Dikachi Nze</h2>
      <div class="text-xl w-full lg:max-w-lg">
        <p>
          I'm a
          <span class="text-orange-500 font-bold">frontend web engineer</span>
          from Lagos, Nigeria who really enjoys building digital products that
          <span class="font-bold">scale</span>, are innovative, performant and
          <span class="font-bold"> accessible</span>
          globally.
        </p>
        <p class="my-20">
          The core technologies I use in my day-to-day, and I'm proficient in
          are:
        </p>
        <ul
          class="grid grid-cols-[repeat(2,_minmax(140px,_180px))] gap-x-12 gap-y-4 mt-20 mb-[80px] md:mb-[60px]"
        >
          <li
            v-for="skill in skills"
            :key="skill"
            class="before:content-['✓'] before:mr-0 md:before:mr-4 before:text-orange-500 text-base md:text-lg font-mono"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Download my CV / Scroll  -->
    <div class="flex justify-between items-center">
      <a
        href="https://docs.google.com/document/d/1p6YbXdZC-HS3qgKRvi5nNAgRLla9RnoPSEASJBLqy0E/edit?usp=sharing"
        target="blank"
        >Download my CV?</a
      >

      <span class="text-[13px]"
        >scroll
        <i
          class="fas fa-arrow-down animate-bounce p-8 rounded-full border border-brown dark:border-slate-100 ml-8"
        ></i
      ></span>
    </div>
  </section>
</template>

<script>
import Carousel from "./Carousel.vue";

export default {
  name: "Hero",
  data: () => ({
    skills: [
      "TypeScript",
      "JavaScript",
      "Vue",
      "Nuxt",
      "React",
      "Next",
      "Tailwind",
      "(S)CSS",
      "Pinia",
      "Ethers.js",
      "AWS",
      "Semantic HTML",
    ],
  }),
  components: { Carousel },
};
</script>
