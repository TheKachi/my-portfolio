<template>
  <PortfolioPage>
    <Details
      :list="project"
      v-if="project.description.length && project.outcome.length"
    />
  </PortfolioPage>
</template>

<script>
export default {
  name: "CountrypediaPage",
  layout: "portfolio",
  data() {
    return {
      project: {
        description: [
          "Countrypedia is a web application that allows users to search for information about countries around the world. It is built with Vue.js and uses the REST Countries API to fetch data.",
          "The application is fully responsive and works on all devices. It is also accessible and has been tested with the WAVE Web Accessibility Evaluation Tool.",
        ],
        outcome: [
          "I built this application to practice my skills in Vue.js and to learn how to use the REST Countries API. I also wanted to create a simple application that I could use to learn more about countries around the world.",
        ],
      },
    };
  },
};
</script>
