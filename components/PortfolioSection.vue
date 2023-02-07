<template>
  <section class="px-0 sm:px-20 pt-[150px] pb-60" id="projects">
    <h2 class="mb-80 text-center text-xl sm:text-2xl md:text-3xl font-bold">
      Some of the things I've built...
    </h2>

    <div class="grid gap-y-40 md:gap-y-60 px-20 lg:px-[80px]">
      <div class="col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </section>
</template>

<script>
import Projects from "~/data/projects.json";
import ProjectCard from "./ProjectCard.vue";
export default {
  name: "PortfolioSection",
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
