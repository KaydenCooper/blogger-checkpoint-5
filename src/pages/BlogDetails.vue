<template>
  <div class="blog-details container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 text-center">
        <div class="card shadow-lg text-white bg-secondary m-3">
          <div class="card-header text-uppercase bg-primary text-center">
            <h1>
              <u>{{blog.title}}</u>
            </h1>
          </div>
          <div class="card-body">
            <h2 class="card-text text-center">{{blog.body}}</h2>
            <hr />
            <p v-if="blog.creator" class="card-text text-center">Creator: {{blog.creator.name}}</p>

            <hr />

            <h3 class="text-center">
              <u>COMMENTS:</u>
            </h3>
            <form @submit.prevent="addComment(blog._id)">
              <div class="input-group mb-3">
                <input
                  v-model="newComment.body"
                  type="text"
                  class="form-control"
                  placeholder="Add New Comment..."
                />
                <div class="input-group-append">
                  <button class="btn btn-primary" type="submit">Submit</button>
                </div>
              </div>
            </form>
            <button
              class="btn btn-primary border-light btn-block"
              type="button"
              data-target="#comment"
              data-toggle="collapse"
            >Comments</button>
            <hr />
            <div id="comment" class="collapse">
              <comments
                v-for="comment in activeComments"
                :commentsData="comment"
                :key="comment.id"
              />
            </div>
          </div>
          <button
            v-if="blog.creator.email == $auth.user.email"
            type="button"
            data-toggle="modal"
            data-target="#edit-modal"
            class="btn btn-primary btn-block"
          >Edit</button>
          <editModal :editBlogData="blog" />
          <button
            v-if="blog.creator.email == $auth.user.email"
            type="button"
            class="btn btn-danger btn-block border-primary"
            @click="deleteBlog"
          >DELETE BLOG</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import EditModal from "../components/EditModal";
import Comments from "../components/Comments";
export default {
  name: "blog-details",
  data() {
    return {
      newComment: {},
    };
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
    addComment(id) {
      this.$store.dispatch("addComment", {
        body: this.newComment.body,
        blogId: id,
      });
      this.newComment = {};
      form.reset();
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blog.id);
    },
  },
  components: {
    Comments,
    EditModal,
  },
};
</script>


<style scoped>
.shadow-lg {
  box-shadow: 0 0rem 1rem rgba(255, 255, 255, 0.288) !important;
}
</style>