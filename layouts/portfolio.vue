<template>
  <div class="bg-[inherit] h-screen p-12 md:py-24 md:px-48">
    <!-- Nav  -->
    <Navbar />
    <div class="w-[70vw] mx-auto md:pb-[90px]">
      <!-- Title  -->
      <h5
        class="capitalize pt-40 pb-8 pl-24 lg:pl-0 text-[28px] md:text-[40px] font-futurabold no-underline"
      >
        {{ project.title }}
      </h5>

      <!-- color divider -->
      <div
        role="divider"
        class="h-[8px] w-full mx-auto mb-48 md:mb-[90px]"
        :style="{ backgroundColor: project.tag }"
      ></div>

      <!-- carousel  -->
      <Carousel :slides="project.slides" />

      <div class="w-[50vw] mx-auto my-[60px]">
        <!-- description  -->
        <p class="text-[20px]">{{ project.description }}</p>
        <!-- skills  -->
        <ul class="flex gap-x-24 py-24 font-mono">
          <li v-for="skill in project.skills" :key="skill" class="text-lg">
            {{ skill }}
          </li>
        </ul>
        <!-- links  -->
        <div class="flex items-center gap-16">
          <a :href="project.website" target="blank"> visit site </a>
          <a v-if="project.github" :href="project.github" target="blank">
            source code
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import Projects from "~/data/projects.json";

export default {
  components: { Carousel },

  data() {
    return {
      borderClass: "",
      project: {},
    };
  },

  computed: {
    getPageName() {
      return this.$route.name.split("-")[1];
    },
  },
  mounted() {
    // get the page name
    const pageName = this.getPageName;

    // get the project whose name includes the page name
    this.project = Projects.find((project) =>
      project.title.toLowerCase().includes(pageName)
    );
  },

  props: {
    heading: {
      type: String,
      default: "No heading provided",
    },
  },
};
</script>
