<template>
  <div>
    <div class="flex justify-between items-center px-12 md:px-48">
      <span class="text-3xl">🦄</span>
      <div class="flex justify-end gap-16 items-center">
        <img src="../assets/img/hamburger.svg" alt="" />
        <img src="../assets/img/moon.svg" alt="" />
      </div>
    </div>
    <Hero />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
