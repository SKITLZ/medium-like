import axios from '@/plugins/axios';

export default {
  namespaced: true,

  state: {
    user: {
      email: '',
      role: '',
    },
  },

  mutations: {
    UPDATE_USER(state, payload) {
      state.user = payload;
    },
  },

  actions: {
    async LOGIN({ commit }, { email, password }) {
      await axios.get(`/users?login=${email}`)
        .then(({ data }) => {
          if (!data[0] || String(data[0].password) !== String(password)) {
            throw new Error('Incorrect email or password');
          }
          const user = {
            email: data[0].login,
            role: data[0].role,
          };
          commit('UPDATE_USER', user);
        })
        .catch((error) => Promise.reject(error));
    },
    LOGOUT({ commit }) {
      commit('UPDATE_USER', { email: '', role: '' });
    },
  },

  getters: {
    isLoggedIn: ({ user }) => user.email !== '',
  },
};
