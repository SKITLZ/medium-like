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
      await axios.get('/posts')
        .then(({ data }) => {
          commit('UPDATE_POSTS', data);
        })
        .catch((error) => Promise.reject(error));
    },
    async PATCH_POST({ commit, state }, post) {
      await axios.patch(`/posts/${post.id}`, post)
        .then((res) => {
          const newList = [...state.posts]; // shallow копия для избежания мутации state напрямую
          const noteIndex = newList.findIndex((el) => el.id === res.data.id);
          newList[noteIndex] = res.data;
          commit('UPDATE_POSTS', newList);
        })
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
