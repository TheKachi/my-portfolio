<template>
  <nav class="flex justify-between items-center px-20 md:px-36 h-[64px]">
    <nuxt-link to="/" class="no-underline font-bold">DN</nuxt-link>
    <!-- theme toggler  -->
    <ThemeToggler />
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped></style>
