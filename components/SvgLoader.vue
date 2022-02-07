<template>
  <span class="icon" v-html="url"></span>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      url: "",
    };
  },

  methods: {
    makeIcon() {
      let path = this.path ? this.path : "svg-icons";
      let dataURI = require(`@/assets/${path}/${this.icon}.svg?raw`);

      this.url = dataURI;

      // this.url = window.atob(dataURI.replace(/data:image\/svg\+xml;base64,/, ''));
    },
  },

  mounted() {
    this.makeIcon();
  },
};
</script>
