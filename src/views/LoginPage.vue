<template>
<div class="login-page">
  <section class="section">
    <div class="container">
      <h1 class="title">Авторизация</h1>
      <AuthForm />
    </div>
  </section>
</div>
</template>

<script>
import AuthForm from '@/components/AuthForm.vue';

export default {
  name: 'LoginPage',

  components: {
    AuthForm,
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  .title {
    text-align: center;
  }

  form {
    max-width: 600px;
    margin: 0 auto;
  }
}
</style>
