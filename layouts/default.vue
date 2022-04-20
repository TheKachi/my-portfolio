<template>
  <div class="grid grid-cols-12 gap-0">
    <side-bar class="hidden md:block md:col-span-1" />
    <Nuxt class="col-span-12 w-full md:col-span-11 py-36" />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar,
  },
};
</script>

<style></style>
