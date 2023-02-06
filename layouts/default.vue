<template>
  <div class="md:px-48">
    <Navbar />
    <div class="grid grid-cols-12 gap-0">
      <side-bar class="hidden md:block md:col-span-1" />
      <Nuxt class="col-span-12 w-full md:col-span-11 py-36" />
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    SideBar,
    Navbar,
  },
};
</script>

<style></style>
