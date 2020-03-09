<template>
<div class="post-pagination">
  <b-pagination
    :total="postsTotal"
    :per-page="postsPerPage"
    :current="currentPage"
    order="is-centered"
    range-before="1"
    range-after="1"
    icon-prev="arrow-left"
    icon-next="arrow-right"
    aria-next-label="Next page"
    aria-previous-label="Previous page"
    aria-page-label="Page"
    aria-current-label="Current page"
    @change="handleChange">
  </b-pagination>
</div>
</template>

<script>
export default {
  nane: 'PostPagination',

  computed: {
    postsTotal() {
      return this.$store.state.posts.postsTotal;
    },
    postsPerPage() {
      return this.$store.state.posts.postsPerPage;
    },
    currentPage() {
      return this.$store.state.posts.currentPage;
    },
  },

  methods: {
    handleChange(page) {
      this.$store.dispatch('posts/FETCH_POSTS', page);
      this.$store.commit('posts/SET_PAGE', page);
    },
  },
};
</script>

<style lang="scss" scoped>
.post-pagination {
  max-width: 720px;
  margin: 3rem auto 0;
}
</style>
