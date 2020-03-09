<template>
<div class="post-list">
  <h2 class="subtitle">Список постов</h2>
  <ul>
    <li
      v-for="item in postList"
      :key="item.id"
    >
      <Post v-bind="item" />
    </li>
  </ul>
</div>
</template>

<script>
import Post from '@/components/Post/Post.vue';

export default {
  name: 'PostList',

  components: {
    Post,
  },

  computed: {
    postList() {
      return this.$store.state.posts.posts;
    },
  },
};
</script>

<style lang="scss" scoped>
.post-list {
  .subtitle {
    text-align: center;
  }

  ul {
    max-width: 720px;
    margin: 0 auto;
  }

  li {
    &:not(:first-of-type) {
      margin-top: 40px;
    }
  }
}
</style>
