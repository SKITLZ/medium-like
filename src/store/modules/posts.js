import axios from '@/plugins/axios';

export default {
  namespaced: true,

  state: {
    posts: [],
  },

  mutations: {
    UPDATE_POSTS(state, payload) {
      state.posts = payload;
    },
  },

  actions: {
    async FETCH_POSTS({ commit }) {
      await axios.get('/posts?_sort=id&_order=desc')
        .then(({ data }) => {
          commit('UPDATE_POSTS', data);
        })
        .catch((error) => Promise.reject(error));
    },
    async PATCH_POST(store, post) {
      await axios.patch(`/posts/${post.id}`, post)
        .catch((error) => Promise.reject(error));
    },
    async CREATE_POST(store, post) {
      await axios.post('/posts', post)
        .catch((error) => Promise.reject(error));
    },
    DELETE_POST({ commit, state }, id) {
      axios.delete(`/posts/${id}`, id)
        .then(() => {
          const newList = state.posts.filter((el) => el.id !== id);
          commit('UPDATE_POSTS', newList);
        })
        .catch((error) => Promise.reject(error));
    },
  },
};
