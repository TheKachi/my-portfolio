<template>
  <section class="px-20 lg:px-60 py-60">
    <h2 class="mb-80 text-3xl text-black font-bold capitalize">
      Some Things I've' Built With Vue...
    </h2>

    <div class="grid gap-100">
      <div class="col" v-for="project in reversedProjects" :key="project.id">
        <div
          class="grid grid-cols-12 gap-y-32 gap-x-40 justify-between items-center bg-white rounded-md shadow-[0_4px_50px_rgba(0,0,0,0.1)]"
        >
          <div class="col-span-6">
            <img
              :src="project.logo"
              :alt="`${project.logo} Logo`"
              class="h-auto"
            />
          </div>
          <div class="col-span-6">
            <h5
              class="pt-40 pb-8 text-[28px] text-brown font-futurabold border-b-8"
              :class="[project.class]"
            >
              {{ project.title }}
            </h5>
            <div class="pb-40 pr-40 pt-20">
              <p class="text-[20px]">{{ project.description }}</p>
              <ul class="flex gap-16 pt-20 font-mono">
                <li
                  v-for="skill in project.skills"
                  :key="skill"
                  class="list-disc list-inside text-lg"
                >
                  <a href="">{{ skill }}</a>
                </li>
              </ul>
              <div class="flex items-center gap-16 pt-20">
                <a
                  :href="project.website"
                  v-if="project.website"
                  target="blank"
                  class="underline underline-offset-1 decoration-slate-400 text-slate-600 hover:text-brown hover:decoration-brown transform transition duration-500 hover:scale-110"
                >
                  visit site
                  <!-- <svg
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
                  </svg> -->
                </a>
                <a
                  :href="project.github"
                  v-if="project.github"
                  target="blank"
                  class="underline underline-offset-1 decoration-slate-400 text-slate-600 hover:text-brown hover:decoration-brown transform transition duration-500 hover:scale-110"
                >
                  source code
                  <!-- <svg
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
                  </svg> -->
                </a>
              </div>
            </div>
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
    reversedProjects() {
      return this.projects.slice().reverse();
    },
  },
};
</script>

<style lang="postcss">
.w-custom {
  width: min(100%-4rem, 20rem);
}

.pink {
  @apply border-pink-600;
}

.amber {
  @apply border-amber-500;
}

.orange {
  @apply border-orange-500;
}

.teal {
  @apply border-teal-500;
}
</style>
