<template>
  <aside class="h-screen">
    <div class="fixed top-1/3 w-[inherit] h-[inherit] px-36">
      <ul
        class="after:h-100 after:w-1 after:bg-brown dark:after:bg-white flex flex-col justify-center items-center gap-y-36 my-auto"
      >
        <li v-for="(nav, i) in navs" :key="i" class="">
          <a
            :href="nav.link"
            target="blank"
            class="flex flex-col items-center gap-y-16 no-underline"
          >
            <i
              class="hover:text-orange-500"
              :class="nav.icon"
              :aria-label="nav.title"
              :alt="`Link to my ${nav.title}`"
            ></i>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          title: "Github",
          link: "https://github.com/thekachi",
          icon: "fab fa-github",
        },
        {
          title: "Twitter",
          link: "https://twitter.com/thekachii",
          icon: "fab fa-twitter",
        },
        {
          title: "Linkedin",
          link: "https://linkedin.com/in/thekachi",
          icon: "fab fa-linkedin-in",
        },
        {
          title: "Email",
          link: "mailto:nzebenflorence@gmail.com",
          icon: "fas fa-envelope",
        },
      ],
    };
  },

  methods: {
    // activePage(link, title) {
    //   let path = link.split("/")[1];
    //   let name = title === "Contact us" ? "support" : title;
    //   let re = new RegExp(path, "g");
    //   if (name.toLowerCase() === path && re.test(link)) return true;
    //   return false;
    // },
  },

  components: {
    // SvgLoader,
  },
};
</script>
