<template>
  <div class="home">
    <section class="section">
      <div class="container">
        <h1 class="title">Главная Medium-like</h1>
        <PostList :list="postList" />
      </div>
    </section>
  </div>
</template>

<script>
import PostList from '@/components/Post/PostList.vue';

export default {
  name: 'Home',

  components: {
    PostList,
  },

  computed: {
    postList() {
      return this.$store.state.posts.posts;
    },
  },

  created() {
    this.$store.dispatch('posts/FETCH_POSTS');
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
