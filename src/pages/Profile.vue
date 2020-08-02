<template>
  <div class="about text-center text-white">
    <h1>Welcome {{ profile.name }}</h1>
    <p>{{ profile.email }}</p>
    <img class="rounded" :src="profile.picture" alt />
    <hr />
    <h3>My Blogs:</h3>
  </div>
</template>

<script>
export default {
  name: "Profile",
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      this.$store.dispatch("getProfile");
    },
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
