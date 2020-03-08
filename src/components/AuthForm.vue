<template>
<form class="auth-form">
  <b-field label="Email">
    <b-input type="email" v-model="email" />
  </b-field>

  <b-field label="Password">
    <b-input type="password" v-model="password" />
  </b-field>

  <b-button
    class="submit"
    type="is-primary"
    size="is-medium"
    outlined
    @click="logIn"
  >Войти</b-button>
</form>
</template>

<script>
export default {
  name: 'AuthForm',

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    logIn() {
      // Заглушка
    },
  },
};
</script>

<style lang="scss" scoped>
.auth-form {
  .submit {
    margin-top: 20px;
  }
}
</style>
