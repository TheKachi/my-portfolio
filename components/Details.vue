<template>
  <div class="flex flex-col gap-24 md:gap-32 mb-32">
    <Heading title="What I did" />

    <UnorderedList :list="list.description" />

    <Heading title="Project outcome" />

    <UnorderedList :list="list.outcome" />
  </div>
</template>

<script>
import Heading from "./portfolio/Heading.vue";
import UnorderedList from "./portfolio/UnorderedList.vue";
export default {
  props: {
    list: {
      type: Object,
      default: () => {},
    },
  },
  components: { Heading, UnorderedList },
};
</script>

<style lang="scss" scoped></style>
