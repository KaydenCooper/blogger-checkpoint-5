<template>
  <div class="home row">
    <div class="col-4"></div>
  </div>
</template>

<script>
export default {
  name: "home",
  computed: {
    blogs() {
      return this.$store.state.blogs;
    },
  },
  mounted() {
    this.$store.dispatch("getAllBlogs");
  },
  methods: {},
  components: {},
};
</script>
