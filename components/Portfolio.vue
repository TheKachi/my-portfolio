<template>
  <section class="px-20 pt-[150px] pb-60">
    <h2 class="mb-80 text-center text-2xl md:text-3xl font-bold">
      Some of the things I've built w/ Vue...
    </h2>

    <div class="grid gap-y-40 md:gap-y-80 px-0 lg:px-[100px]">
      <div class="col" v-for="project in reversedProjects" :key="project.id">
        <div
          class="grid grid-cols-12 gap-x-40 justify-between items-center bg-white dark:bg-[#112240] rounded-md shadow-[0_4px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]"
        >
          <div class="col-span-12 lg:col-span-6 bg-brown">
            <img
              :src="project.logo"
              :alt="`A screenshot of ${project.title}'s home page`"
              class="h-auto"
            />
          </div>
          <div class="col-span-12 lg:col-span-6">
            <h5
              class="pt-40 pb-8 pl-24 lg:pl-0 text-[28px] font-futurabold border-b-8"
              :class="[project.class]"
            >
              {{ project.title }}
            </h5>
            <div class="pb-40 pl-24 lg:pl-0 pr-24 pt-20">
              <!-- px-20 sm:px-40 -->
              <p class="text-[20px]">{{ project.description }}</p>
              <ul class="flex gap-x-24 py-24 font-mono">
                <li
                  v-for="skill in project.skills"
                  :key="skill"
                  class="text-lg"
                >
                  {{ skill }}
                </li>
              </ul>
              <div class="flex items-center gap-16">
                <a
                  :href="project.website"
                  v-if="project.website"
                  target="blank"
                >
                  visit site
                </a>
                <a :href="project.github" v-if="project.github" target="blank">
                  source code
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

<style lang="postcss" scoped>
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
