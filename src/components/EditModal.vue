<template>
  <div class="editModal">
    <div class="modal" id="edit-modal" tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content bg-secondary text-light">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <h5>
                <u>Edit Blog:</u>
              </h5>
              <input
                v-model="changedBlog.body"
                type="text"
                class="form-control text-wrap"
                placeholder="Edit Blog...."
              />
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-success" @click="editBlog">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "editModal",
  props: ["editBlogData"],
  data() {
    return {
      changedBlog: {},
    };
  },
  computed: {
    editedblog() {
      return this.$store.state.activeBlog;
    },
  },
  methods: {
    editBlog() {
      debugger;
      this.$store.dispatch("editBlog", {
        body: this.changedBlog,
        _id: this.editBlogData.id,
      });
      this.changedBlog = {};
      $("#edit-modal").modal("hide");
    },
  },
  components: {},
};
</script>


<style scoped>
</style>