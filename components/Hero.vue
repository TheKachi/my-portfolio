<template>
  <section class="min-h-screen px-12 md:px-48 pt-40">
    <!-- Change h1 font here -->
    <div class="min-height flex flex-col justify-center items-stretch">
      <h1 class="text-xl">Hi there, my name is</h1>
      <h2 class="text-brown font-futurabold text-4xl lg:text-6xl">
        <span class="">Kachi ✨</span>
        <!-- <span class="md:hidden">'Kachi</span> Nze-Ben. -->
      </h2>
      <div class="font-futuralight text-xl max-w-xl">
        <p>
          I'm a frontend developer from Lagos, Nigeria and I really enjoy
          building digital products that scale, are innovative, and accessible
          globally.
        </p>
        <p class="my-12">
          I'm proficient in
          <strong>Vue JS, Javascript, SCSS, HTML, Bootstrap, Tailwind</strong>
          e.t.c.
        </p>
        <p class="mb-120">
          I'm constantly learning and recently, I've been trying my hands on
          <strong class="">TypeScript</strong> and
          <strong class="">Solidity</strong> .
        </p>
      </div>
    </div>

    <div class="flex justify-between">
      <a
        href="https://drive.google.com/file/d/1pcmaQB_0uvl1HvKuoYWgcHSesBu4RbUM/view?usp=sharing"
        class="underline underline-offset-8 decoration-brown"
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
};
</script>
<style scoped>
.min-height {
  min-height: 80vh;
}
.min-20 {
  min-height: 20vh;
}
</style>
