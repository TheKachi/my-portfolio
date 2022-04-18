<template>
  <section class="min-h-screen px-12 md:px-48 pt-40">
    <!-- Change h1 font here -->
    <div class="min-height flex flex-col justify-center items-stretch">
      <h1 class="text-xl -mb-16 ml-[6px]">Hi there, my name is</h1>
      <h2 class="text-brown font-futurabold text-4xl lg:text-6xl">
        <span class="">Kachi Nze</span>
        <!-- <span class="md:hidden">'Kachi</span> Nze-Ben. -->
      </h2>
      <div class="text-xl max-w-xl">
        <p>
          I'm a
          <span class="text-orange-500 font-bold">frontend web engineer</span>
          from Lagos, Nigeria who really enjoys <br />
          building digital products that
          <span class="font-bold">scale</span>, are innovative, performant and
          <span class="font-bold"> <br />accessible</span>
          globally.
        </p>
        <p class="my-20">
          The core technologies I use in my day-to-day and I'm proficient in
          are:
        </p>
        <ul
          class="grid grid-cols-[repeat(2,_minmax(140px,_180px))] gap-x-12 gap-y-4 mt-20 mb-120"
        >
          <li
            v-for="skill in skills"
            :key="skill"
            class="before:content-['✓'] before:mr-4 before:text-orange-500 text-lg text-brown font-mono"
          >
            {{ skill }}
          </li>
        </ul>
        <!-- <p class="mb-120">
          I'm constantly learning and recently, I've been trying my hands on Web
          3
          <span class="text-orange-500 font-bold"> Dapps</span>.
        </p> -->
      </div>
    </div>

    <div class="flex justify-between">
      <a
        href="https://drive.google.com/file/d/1pcmaQB_0uvl1HvKuoYWgcHSesBu4RbUM/view?usp=sharing"
        class="underline underline-offset-2 decoration-slate-400 text-slate-600 hover:text-brown hover:decoration-brown transform transition duration-500 hover:scale-110"
        target="blank"
        >Download my CV?</a
      >

      <div>scroll ↓</div>
    </div>
  </section>
</template>
how
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
      "Bootstrap 5",
      "Semantic HTML",
    ],
  }),
};
</script>
<style lang="postcss" scoped>
.min-height {
  min-height: 80vh;
}
.min-20 {
  min-height: 20vh;
}

ul ::marker {
  @apply text-orange-500;
}
</style>
