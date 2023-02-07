<template>
  <PortfolioPage>
    <Details :list="project" />
  </PortfolioPage>
</template>

<script>
export default {
  name: "ProsperoPage",
  layout: "portfolio",
  data() {
    return {
      project: {
        description: [
          "Built and delivered the frontend of this platform using a stack of Vue 3, Tailwind CSS, and Ethers.js",
          "Overcame challenges, such as limited support for Vue in web3 development, by leveraging my problem-solving skills and expertise in JavaScript",
        ],
        outcome: [
          "A fully functional and user-friendly platform that received positive feedback from users and stakeholders.",
        ],
      },
    };
  },
};
</script>
