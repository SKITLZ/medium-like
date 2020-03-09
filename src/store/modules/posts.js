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
    PATCH_POST({ commit, state }, post) {
      axios.patch(`/posts/${post.id}`, post)
        .then((res) => {
          const newList = [...state.posts]; // shallow копия для избежания мутации state напрямую
          const noteIndex = newList.findIndex((el) => el.id === res.data.id);
          newList[noteIndex] = res.data;
          commit('UPDATE_POSTS', newList);
        })
        .catch((error) => Promise.reject(error));
    },
  },
};
