<template>
  <h2 class="text-[32px] font-bold text-black dark:text-slate-100">
    {{ title }}
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Project description",
    },
  },
};
</script>
