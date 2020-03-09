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
    FETCH_POSTS({ commit }) {
      axios.get('/posts')
        .then(({ data }) => {
          commit('UPDATE_POSTS', data);
        })
        .catch((error) => Promise.reject(error));
    },
  },
};
