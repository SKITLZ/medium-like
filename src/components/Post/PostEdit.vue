<template>
<div class="post-edit">
  <div class="card-content">
    <p class="title">{{ item.title }}</p>
    <p>{{ item.description }}</p>
    <form @submit.prevent="saveChanges">
      <b-field label="title">
        <b-input type="text" v-model="item.title" required></b-input>
      </b-field>
      <b-field label="description" >
        <b-input type="text" v-model="item.description" required></b-input>
      </b-field>

      <b-button
        class="submit"
        native-type="submit"
        type="is-primary"
        outlined
      >Сохранить изменения</b-button>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostEdit',

  data: () => ({
    item: {
      id: 0,
      title: '',
      description: '',
      claps: 0,
      createdAt: '2020-01-01T00:00:00.000Z',
      updateAt: '2020-01-01T00:00:00.000Z',
      userId: 0,
    },
  }),

  computed: {
    postList() {
      return this.$store.state.posts.posts;
    },
  },

  created() {
    this.loadPage();
  },

  methods: {
    loadPage() {
      if (this.postList.length) {
        this.getPost();
        return;
      }

      this.$store.dispatch('posts/FETCH_POSTS')
        .then(() => {
          this.getPost();
        });
    },
    getPost() {
      const id = parseInt(this.$route.params.id, 10);
      const post = this.postList.find((el) => el.id === id);
      if (!post) {
        this.$router.push('/');
        return;
      }
      Object.assign(this.item, post);
    },
    saveChanges() {
      this.item.updateAt = new Date().toISOString();
      this.$store.dispatch('posts/PATCH_POST', this.item)
        .then(() => {
          this.$router.push('/');
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.post-edit {
  form {
    margin-top: 1rem;
  }

  .submit {
    margin-top: 1rem;
  }

  .button {
    margin-left: auto;
  }
}
</style>
