import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

// Не использую history mode чтобы не настраивать сервер
const router = new VueRouter({
  routes,
});

export default router;
