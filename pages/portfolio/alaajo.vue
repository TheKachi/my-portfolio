<template>
  <PortfolioPage>
    <Details :list="project" />
  </PortfolioPage>
</template>

<script>
export default {
  name: "AlaajoPage",
  layout: "portfolio",
  data() {
    return {
      project: {
        description: [
          "Responsible for building 80% of the front end with minimal supervision",
          "Connected the web app to external fintech APIs like Stripe and Mono for various features such as Account name verification, Credit Score Checks, and Card & Web Payments.",
          "Designed the platform to handle a large number of users and transactions, but it was important to ensure that the platform could handle the load without any downtime or performance issues.",
          " Implemented various performance optimization techniques such as caching, load balancing, and database optimization.",
          "Implemented a custom authentication system using JWT and Redis to ensure that the platform was secure and could handle a large number of users.",
          "Set up various performance testing and monitoring tools to identify and address any bottlenecks in the system ",
        ],
        outcome: [
          "A highly efficient and scalable platform that can handle a high volume of transactions and user activity.",
        ],
      },
    };
  },
};
</script>
