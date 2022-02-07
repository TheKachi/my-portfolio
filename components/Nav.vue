<template>
  <div>
    🦄
    <div class="">
      <button id="hamburger" @click="getSticky" :class="{ open: isActive }">
        <!-- <svg width="100" viewBox="0 0 100 100">
          <path
            class="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path class="line line2" d="M 20,50 H 80" />
          <path
            class="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg> -->
      </button>

      <!-- <button id="theme-display" title="Select a color scheme" class="control">
        <svg
          class="svg-inline--fa fa-moon fa-w-16 fa-lg text-white"
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="moon"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          data-fa-i2svg=""
        >
          <path
            fill="currentColor"
            d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"
          ></path>
        </svg>
      </button> -->
    </div>

    <!-- Navs -->
    <div class="text-center mnav" id="navbarNav">
      <ul class="navbar-nav mr-auto my-lg-2 ml-lg-64">
        <li v-for="(nav, i) in navs" :key="i" class="nav-item">
          <a
            :href="nav.link"
            class="nav-link fw-bold nl-nav"
            :class="{ active: $route.name === nav.link }"
          >
            {{ nav.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      navs: [
        {
          title: "Projects",
          link: "#borrow",
          active: false,
        },
        {
          title: "Contact",
          link: "#lend",
          active: false,
        },
      ],
    };
  },

  methods: {
    getSticky() {
      this.isActive = this.isActive ? false : true;
      // this.classList.toggle('open');
    },
  },

  mounted() {
    let els = document.querySelectorAll(".nl-nav");
    let _that = this;
    for (let i = 0; i < els.length; i++) {
      els[i].addEventListener("click", () => {
        _that.isActive = false;
        document.getElementById("navbarNav").classList.remove("show");
      });
    }
  },
};
</script>

<style></style>
