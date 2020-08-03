<template>
  <div class="comments">
    <p v-if="commentsData.creator">
      <button type="button" class="close" aria-label="Close" @click.prevent="deleteComment"></button>

      <img class="img-fluid border rounded" width="35vw" :src="commentsData.creator.picture" alt />
      {{commentsData.creator.name}}
      : {{commentsData.body}}
    </p>
    <hr />
  </div>
</template>


<script>
export default {
  name: "comments",
  props: ["commentsData"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    deleteComment() {
      this.$store.dispatch("deleteComment", this.commentsData.id);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>