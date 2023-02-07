<template>
  <ul
    class="flex flex-col gap-16 list-inside"
    :class="[list.length > 1 ? 'list-disc' : '']"
  >
    <li
      v-for="item in list"
      :key="item"
      class="text-base md:text-[20px] text-brown dark:text-slate-200"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "UnorderedList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
