<template>
  <div class="home container-fluid">
    <div class="row justify-content-center">
      <div class="col-3" v-for="blog in blogs" :key="blog.id">
        <div class="card text-center text-white bg-secondary m-3" style="max-width: 20rem;">
          <div class="card-header">
            <h3>{{blog.title}}</h3>
          </div>
          <div class="card-body">
            <p class="card-text">{{blog.body}}</p>
            <hr />
            <p v-if="blog.creator" class="card-text">Creator: {{blog.creator.name}}</p>

            <button class="btn btn-outline-success btn-block" @click="getBlog(blog.id)">Details...</button>
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
