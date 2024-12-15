import colors from "tailwindcss/colors";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon"],
  tailwindcss: {
    config: {
      theme: {
        extend: {
          container: {
            center: true,
            padding: {
              "2xl": "3rem",
            },
          },
        },
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "My Portfolio | React Developer",
      link: [{ rel: "icon", type: "image/x-icon", href: "/mr-robot1.png" }],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "A portfolio of a React developer",
        },
      ],
    },
  },
});
