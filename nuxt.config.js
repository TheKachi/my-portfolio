export default {
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dikachi Nze",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css",
      },
    ],
  },

  css: [],

  plugins: [],

  components: true,

  buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],

  modules: ["@nuxtjs/pwa", "@nuxt/content"],

  pwa: {
    manifest: {
      lang: "en",
    },
  },

  content: {},

  build: {},

  colorMode: {
    classSuffix: "",
  },
};
