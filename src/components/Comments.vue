<template>
  <div class="comments">
    <p>
      <button type="button" class="close" aria-label="Close"></button>
      <u>{{commentsData.creator.name}}</u>
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
  methods: {},
  components: {},
};
</script>


<style scoped>
</style>