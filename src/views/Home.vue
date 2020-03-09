<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <h1 class="title">Главная Medium-like</h1>
        <PostList />
        <PostPagination v-if="postsTotal > 10" ref="pagination" />
      </div>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Post/PostList.vue';
import PostPagination from '@/components/Post/PostPagination.vue';

export default {
  name: 'Home',

  components: {
    PostList,
    PostPagination,
  },

  computed: {
    postsTotal() {
      return this.$store.state.posts.postsTotal;
    },
    currentPage() {
      return this.$store.state.posts.currentPage;
    },
  },

  created() {
    this.$store.dispatch('posts/FETCH_POSTS', this.currentPage);
  },
};
</script>

<style lang="scss" scoped>
.home {
  .title {
    text-align: center;
  }
}
</style>
