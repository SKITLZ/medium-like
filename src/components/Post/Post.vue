<template>
<div class="post card">
  <div class="card-content">
    <p class="title">{{ title }}</p>
    <p>{{ description }}</p>
    <footer>
      <span class="created">{{ createdAgo }}</span>

      <template v-if="userRole === 'reader'">
        <b-button type="is-primary" outlined @click="increaseClaps">
          <fa-icon class="button__icon" icon="sign-language" />
          {{ clapsCopy }}
        </b-button>
      </template>

      <template v-else-if="userRole === 'writer'">
        <b-button type="is-primary" outlined>
          <fa-icon class="button__icon" icon="edit" />
          Изменить
        </b-button>
        <b-button type="is-primary" outlined @click="deletePost">
          <fa-icon class="button__icon" icon="trash-alt" />
          Удалить
        </b-button>
      </template>

    </footer>
  </div>
</div>
</template>

<script>
import wordMorph from '@/helpers/wordMorph';

export default {
  name: 'Post',

  props: {
    id: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    claps: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: String,
      default: '2020-01-01T00:00:00.000Z',
    },
    updateAt: {
      type: String,
      default: '2020-01-01T00:00:00.000Z',
    },
    userId: {
      type: Number,
      default: 0,
    },
  },

  data: () => ({
    clapTimer: null,
    clapsCopy: 0,
  }),

  computed: {
    createdAgo() {
      const createdAt = new Date(this.createdAt);
      const now = new Date();
      const difference = new Date(now - createdAt);
      const daysAgo = Math.floor(difference / (1000 * 60 * 60 * 24));
      const morphed = wordMorph(daysAgo, ['день', 'дня', 'дней']);
      return `${daysAgo} ${morphed} назад`;
    },
    userRole() {
      return this.$store.state.user.user.role;
    },
  },

  created() {
    this.clapsCopy = this.claps;
  },

  methods: {
    increaseClaps() {
      this.clapsCopy += 1;
      clearTimeout(this.clapTimer);
      this.clapTimer = setTimeout(() => {
        const post = {
          id: this.id,
          claps: this.clapsCopy,
        };
        this.$store.dispatch('posts/PATCH_POST', post);
      }, 1000 * 0.5); // Ожидает следующий клик 0.5сек перед отпраки запроса на обновление
    },
    deletePost() {
      this.$store.dispatch('posts/DELETE_POST', this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.post {
  footer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .created {
    margin-top: auto;
    margin-right: auto;
    padding-right: 10px;
  }

  .button {
    margin-top: 8px;
    &:not(:last-of-type) {
      margin-right: 8px
    }
    &__icon {
      margin-right: 10px;
    }
  }
}
</style>
