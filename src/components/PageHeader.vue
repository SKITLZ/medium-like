<template>
<div class="page-header">
  <b-navbar wrapper-class="container" type="is-primary">
    <template slot="start">
      <b-navbar-item tag="router-link" to="/">Главная</b-navbar-item>
      <b-navbar-item
        v-if="userIsWriter"
        tag="router-link"
        to="/post/new"
        >Создать пост</b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item v-if="isLoggedIn" @click="logOut">Выйти</b-navbar-item>
      <b-navbar-item v-else tag="router-link" to="/login/">Войти</b-navbar-item>
    </template>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'PageHeader',

  computed: {
    isLoggedIn() {
      return this.$store.getters['user/isLoggedIn'];
    },
    userIsWriter() {
      return this.$store.getters['user/userIsWriter'];
    },
  },

  methods: {
    logOut() {
      this.$store.dispatch('user/LOGOUT');
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss">

</style>
