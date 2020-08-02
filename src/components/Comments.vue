<template>
  <div class="comments">
    <p>
      <button type="button" class="close" aria-label="Close" @click.prevent="deleteComment"></button>
      <u v-if="commentsData.creator">{{commentsData.creator.name}}</u>
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