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
            <p v-if="blog.creator" class="card-text text-center">Creator: {{blog.creator.name}}</p>
            <button
              type="button"
              data-toggle="modal"
              data-target="#edit-modal"
              class="btn btn-outline-info btn-block"
            >Edit</button>
            <editModal />
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
                  <button class="btn btn-outline-success" type="submit">Submit</button>
                </div>
              </div>
            </form>
            <comments v-for="comment in activeComments" :commentsData="comment" :key="comment.id" />
          </div>
          <button type="button" class="btn btn-danger btn-block" @click="deleteBlog">DELETE BLOG</button>
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
</style>