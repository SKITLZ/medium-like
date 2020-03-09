import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import LoginPage from '../views/LoginPage.vue';
import PostPage from '../views/PostPage.vue';

import store from '../store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login/',
    name: 'LoginPage',
    component: LoginPage,
    beforeEnter: (to, from, next) => {
      // Запрещает авторизованным пользователям переходить на страницу авторизации
      if (store.getters['user/isLoggedIn']) next('/');
      else next();
    },
  },
  {
    path: '/post/:id',
    name: 'PostPage',
    component: PostPage,
    beforeEnter: (to, from, next) => {
      // Запрещает пользователям с ролью, отличной от 'writer'
      // переходить на страницу редактирвоания
      if (!store.getters['user/userIsWriter']) next('/');
      else next();
    },
  },
];

// Не использую history mode чтобы не настраивать сервер
const router = new VueRouter({
  routes,
});

export default router;
