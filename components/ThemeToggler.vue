<template>
  <button
    role="button"
    tabindex="0"
    aria-label="Toggle dark and light mode"
    @click.prevent="toggleTheme"
    v-if="darkMode"
  >
    <i class="fas fa-moon" aria-hidden="true" aria-label="Dark mode"></i>
  </button>
  <button
    role="button"
    tabindex="0"
    aria-label="Toggle dark and light mode"
    @click.prevent="toggleTheme"
    v-else
  >
    <i class="fas fa-sun" aria-hidden="true" aria-label="Ligh† mode"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleTheme() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
      this.darkMode = !this.darkMode;
    },
  },
};
</script>

<style></style>
