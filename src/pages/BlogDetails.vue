<template>
  <div class="blog-details">
    <div class="row justify-content-center">
      <div class="col-3">
        <div class="card text-white bg-secondary m-3" style="max-width: 20rem;">
          <div class="card-header text-center">
            <h1>{{blog.title}}</h1>
          </div>
          <div class="card-body">
            <p class="card-text text-center">{{blog.body}}</p>
            <p class="card-text text-center">Creator: {{blog.creator.name}}</p>
            <hr />
            <h3 class="text-center">
              <u>COMMENTS:</u>
            </h3>
            <comments v-for="comment in activeComments" :commentsData="comment" :key="comment.id" />
          </div>
          <button type="button" class="btn btn-danger btn-block" @click="deleteBlog">DELETE</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Comments from "../components/Comments";
export default {
  name: "blog-details",
  data() {
    return {};
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog;
    },
    activeComments() {
      return this.$store.state.activeComments;
    },
  },
  mounted() {
    this.$store.dispatch("getBlog", this.$route.params.id);
  },
  methods: {
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog.id);
    },
  },
  components: {
    Comments,
  },
};
</script>


<style scoped>
</style>