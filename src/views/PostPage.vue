<template>
<div class="post-page">
  <PostEdit />
</div>
</template>

<script>
import PostEdit from '@/components/Post/PostEdit.vue';

export default {
  name: 'PostPage',

  components: {
    PostEdit,
  },
};
</script>

<style lang="scss" scoped>
.post-page {
  .post-edit {
    max-width: 720px;
    margin: 1rem auto 0;
  }
}
</style>
