<template>
  <PortfolioPage>
    <Details :list="project" />
  </PortfolioPage>
</template>

<script>
export default {
  name: "InferusPage",
  layout: "portfolio",
  data() {
    return {
      project: {
        outcome: [
          "This product is currently in beta testing and the MVP would be released shortly after, this tool is poised to change the way people interact with digital assets and streamline their usage.",
        ],
        description: [
          "Developed a revolutionary wallet aggregation tool that simplifies the crypto payment process by allowing users to aggregate wallet addresses from existing wallets and exchanges into a single payment link.",
          "Handled the UI development using React, Next.js, Tailwind CSS, and RainbowKit.",
          "Ensured that the platform was highly secure and compliant with all relevant regulations.",
          "Implemented various security measures such as encryption and secure key management to protect users' data and funds.",
          "Worked closely with the smart contract and integration team to ensure that the platform was fully integrated with existing wallets and exchanges.",
        ],
      },
    };
  },
};
</script>
