<template>
<form class="auth-form" @submit.prevent="logIn">
  <ValidationObserver ref="observer">
    <ValidationProvider rules="required|email" name="Email" v-slot="{ errors, valid }">
      <b-field
        label="Email"
        :type="{ 'is-danger': errors[0], 'is-success': valid }"
        :message="errors"
      >
        <b-input type="email" v-model="email"></b-input>
      </b-field>
    </ValidationProvider>

    <ValidationProvider rules="required" name="Password" v-slot="{ errors, valid }">
      <b-field
        label="Password"
        :type="{ 'is-danger': errors[0], 'is-success': valid }"
        :message="errors"
      >
        <b-input type="password" v-model="password"></b-input>
      </b-field>
    </ValidationProvider>

    <b-button
      class="submit"
      native-type="submit"
      type="is-primary"
      size="is-medium"
      outlined
    >Войти</b-button>
  </ValidationObserver>
</form>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  name: 'AuthForm',

  components: {
    ValidationObserver,
    ValidationProvider,
  },

  data: () => ({
    email: '',
    password: '',
  }),

  methods: {
    logIn() {
      this.$refs.observer.validate().then((success) => {
        if (!success) {
          console.log('not validated');
          return;
        }

        console.log('validated!');
      });
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
