<template>
  <div class="grid grid-cols-12 gap-0">
    <side-bar class="col-span-1" />
    <div class="col-span-11 z-10">
      <Nuxt class="px-10 py-36" />
    </div>
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
