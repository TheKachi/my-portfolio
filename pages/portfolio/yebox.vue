<template>
  <PortfolioPage>
    <Details :list="project" />
  </PortfolioPage>
</template>

<script>
export default {
  name: "YeboxPage",
  layout: "portfolio",
  data() {
    return {
      project: {
        description: [
          "Responsible for building the entire website from scratch with Nuxt.js framework and SCSS/Bootstrap",
          "Added visually stunning animations and transitions, interactive elements, a responsive design, high-quality images and videos, and a modern layout to improve user experience and make the website more engaging and interactive.",
          "Implemented effective SEO strategies to increase the company's visibility on search engines and boost its content reach.",
          "Ensured that the website was built in record time, while also maintaining a high level of quality and functionality.",
        ],
        outcome: [
          "The successful launch of a new and improved website which helped to increase engagement, drive conversions, generate leads for the company, improved user experience, and increase the company's online presence and visibility.",
        ],
      },
    };
  },
};
</script>
