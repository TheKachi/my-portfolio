<template>
  <div class="h-full">
    <!-- Nav  -->
    <Navbar />

    <div class="md:w-[65vw] md:mx-auto px-20">
      <!-- Back to projects  -->
      <NuxtLink
        to="/#projects"
        class="flex items-center gap-[4px] no-underline mt-24 md:mt-60 mb-28"
      >
        <svg
          fill="none"
          height="1em"
          viewBox="0 0 36 29"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          class="rotate-180"
          s
        >
          <path
            clip-rule="evenodd"
            d="M0.682617 13.542L0.682617 15.233L31.9476 15.233C31.658 15.3319 31.3713 15.4405 31.0881 15.5588C29.4139 16.2585 27.8926 17.284 26.6112 18.5768C25.3298 19.8695 24.3133 21.4043 23.6198 23.0934C22.9263 24.7825 22.5693 26.5929 22.5693 28.4211L24.3078 28.4211C24.3078 26.8232 24.6198 25.2409 25.2259 23.7646C25.832 22.2883 26.7205 20.9469 27.8405 19.8169C28.9605 18.687 30.2901 17.7907 31.7534 17.1792C33.2168 16.5677 34.7852 16.2529 36.3691 16.2529L36.3691 14.4998L36.3691 14.4991L36.3691 12.746C34.7852 12.746 33.2168 12.4312 31.7534 11.8197C30.2901 11.2082 28.9605 10.3119 27.8405 9.18198C26.7205 8.05206 25.832 6.71064 25.2259 5.23433C24.6198 3.75802 24.3078 2.17572 24.3078 0.577767L22.5693 0.577767C22.5693 2.40604 22.9263 4.21641 23.6198 5.90551C24.3133 7.59461 25.3298 9.12937 26.6112 10.4222C27.8926 11.7149 29.4139 12.7404 31.0881 13.4401C31.1715 13.4749 31.2551 13.5089 31.3389 13.542L0.682617 13.542ZM36.2266 14.4991L36.2266 14.4998C36.2403 14.4997 36.254 14.4996 36.2677 14.4995C36.254 14.4994 36.2403 14.4992 36.2266 14.4991Z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
        Back to projects
      </NuxtLink>

      <!-- Title  -->
      <h5
        class="capitalize text-[32px] md:text-[40px] font-futurabold no-underline"
      >
        {{ project.title }}
      </h5>

      <!-- color divider -->
      <div
        role="divider"
        class="h-[2px] w-full"
        :style="{ backgroundColor: project.tag }"
      ></div>

      <div class="mb-48"></div>
      <!-- carousel  -->
      <Carousel :slides="project.slides" />

      <div class="md:w-[50vw] md:mx-auto mb-[24px] md:mb-[60px]">
        <!-- skills  -->
        <ul class="flex flex-wrap gap-y-8 gap-x-24 py-24 font-mono">
          <li
            v-for="skill in project.skills"
            :key="skill"
            class="text-[12px] uppercase tracking-widest"
          >
            {{ skill }}
          </li>
        </ul>

        <!-- Slot for project description  -->
        <slot />

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
import Carousel from "@/components/Carousel.vue";
import Projects from "~/data/projects.json";
export default {
  name: "Portfolio",
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
