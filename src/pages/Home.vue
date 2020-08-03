<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-3" v-for="blog in blogs" :key="blog.id">
        <div
          class="card text-center shadow-lg text-white bg-secondary m-3"
          style="max-width: 20rem;"
        >
          <div class="card-header text-uppercase bg-primary">
            <h3>{{blog.title}}</h3>
          </div>
          <div class="card-body">
            <p v-if="blog.creator" class="card-text">
              <u>Author:</u>
              <br />
              <img class="img-fluid img-thumbnail" width="100vw" :src="blog.creator.picture" alt />
              <br />
              {{blog.creator.name}}
            </p>

            <button
              class="btn btn-primary border-light btn-block"
              @click="getBlog(blog.id)"
            >READ BLOG...</button>
          </div>
        </div>
      </div>
    </div>
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
  methods: {
    getBlog(id) {
      this.$router.push({
        name: "blogdetails",
        params: { id: id },
      });
    },
  },

  components: {},
};
</script>
<style >
.shadow-lg {
  box-shadow: 0 0rem 1rem rgba(255, 255, 255, 0.288) !important;
}
</style>
