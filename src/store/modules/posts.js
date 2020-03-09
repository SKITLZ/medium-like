import axios from '@/plugins/axios';

export default {
  namespaced: true,

  state: {
    posts: [],
    postsTotal: 0,
    postsPerPage: 10,
    currentPage: 1,
  },

  mutations: {
    UPDATE_POSTS(state, payload) {
      state.posts = payload.data;
      state.postsTotal = parseInt(payload.headers['x-total-count'], 10);
    },
    SET_PAGE(state, payload) {
      state.currentPage = payload;
    },
  },

  actions: {
    async FETCH_POSTS({ commit, state }, page = 1) {
      await axios.get(`/posts?_sort=id&_order=desc&_limit=${state.postsPerPage}&_page=${page}`)
        .then((res) => {
          commit('UPDATE_POSTS', res);
          commit('SET_PAGE', page);
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
    DELETE_POST({ dispatch }, id) {
      axios.delete(`/posts/${id}`, id)
        .then(() => {
          dispatch('FETCH_POSTS');
        })
        .catch((error) => Promise.reject(error));
    },
  },

  getters: {
    totalPages: ({ postsTotal, postsPerPage }) => Math.ceil(postsTotal / postsPerPage),
  },
};
