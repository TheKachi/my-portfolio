<template>
  <PortfolioPage>
    <Details :list="project" v-if="project.description.length && project.outcome.length" />
  </PortfolioPage>
</template>

<script>
export default {
  name: "MyPortfolioPage",
  layout: "portfolio",
  data() {
    return {
      project: {
        description: [],
        outcome: [],
      },
    };
  },
};
</script>
