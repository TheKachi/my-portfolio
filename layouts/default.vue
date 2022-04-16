<template>
  <div class="grid grid-cols-12 gap-0">
    <side-bar class="col-span-1" />
    <Nuxt class="col-span-11 px-10 py-36" />
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
