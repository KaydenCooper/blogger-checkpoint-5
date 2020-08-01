<template>
  <div class="blogModal">
    <div class="modal" id="blog-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content bg-secondary text-light">
          <div class="modal-header">
            <h5 class="modal-title">Create a New Blog!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <h5>
                <u>Enter Title:</u>
              </h5>
              <input
                v-model="createBlog.title"
                type="text"
                name
                id
                class="form-control"
                placeholder="Enter Title...."
              />
              <h5>
                <u>Enter Blog:</u>
              </h5>
              <input
                v-model="createBlog.body"
                type="text"
                name
                id
                class="form-control text-wrap"
                placeholder="Enter Blog...."
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="newBlog">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "blogModal",
  data() {
    return {
      createBlog: {},
    };
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
  },
  methods: {
    newBlog() {
      this.createBlog.creatorEmail = this.profile.email;
      this.$store.dispatch("newBlog", this.createBlog);
      this.createBlog = {};
      $("#blog-modal").modal("hide");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>