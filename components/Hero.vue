<template>
  <section
    class="h-screen px-20 md:px-48 md:py-40 flex flex-col justify-center items-stretch"
  >
    <div class="">
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
          class="grid grid-cols-[repeat(2,_minmax(140px,_180px))] gap-x-12 gap-y-4 mt-20 mb-120"
        >
          <li
            v-for="skill in skills"
            :key="skill"
            class="before:content-['✓'] before:mr-4 before:text-orange-500 text-lg font-mono"
          >
            {{ skill }}
          </li>
        </ul>
      </div>
    </div>

    <div class="flex justify-between">
      <a
        href="https://drive.google.com/file/d/1OUwo4EKeHN0s287PTIcImYxmNN0ZHykE/view?usp=sharing"
        target="blank"
        >Download my CV?</a
      >

      <span>scroll ↓</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",

  data: () => ({
    skills: [
      "Vue JS",
      "Nuxt JS",
      "Vuex",
      "Vanilla JS",
      "(S)CSS",
      "Tailwind",
      "Bootstrap",
      "Semantic HTML",
    ],
  }),
};
</script>
