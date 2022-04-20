<template>
  <div>
    <div class="flex justify-end px-12 md:px-48">
      <ThemeToggler />
    </div>
    <Hero />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import ThemeToggler from "../components/ThemeToggler.vue";
export default {
  name: "IndexPage",
  components: { ThemeToggler },
};
</script>
