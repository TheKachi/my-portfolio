<template>
  <section class="bg-white-light px-20 lg:px-64 py-60">
    <h2 class="mb-48 text-3xl text-brown text-center capitalize">
      Some real world Things I've built
    </h2>

    <div class="grid gap-32">
      <div
        class="col bg-white rounded-xl shadow-custom"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="grid grid-cols-12 gap-32 justify-between">
          <div class="col-span-7 p-40">
            <div class="">
              <h5 class="text-xl text-brown font-futurabold">
                {{ project.title }}
              </h5>
              <p>{{ project.description }}</p>
              <div class="flex gap-16">
                <a
                  :href="project.website"
                  v-if="project.website"
                  target="blank"
                >
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-external-link"
                  >
                    <title>External Link</title>
                    <path
                      d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    ></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
                <a :href="project.github" v-if="project.github" target="blank">
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path
                      d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div class="col-span-5">
            <img :src="project.logo" :alt="`${project.logo} Logo`" class="" />
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="py-60 text-center">
      <a href="" class="underline underline-offset-8 decoration-brown"
        >See all</a
      >
    </div> -->
  </section>
</template>

<script>
import Projects from "~/data/projects.json";
export default {
  name: "Portfolio",
  data() {
    return {
      projects: Projects,
    };
  },
  computed: {
    reverseItems() {
      return this.projects.slice().reverse();
    },
  },
};
</script>

<style>
.w-custom {
  width: min(100%-4rem, 20rem);
}
</style>
