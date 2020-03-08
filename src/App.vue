<template>
  <div id="app">
    <PageHeader />
    <router-view />
  </div>
</template>

<script>
import PageHeader from '@/components/PageHeader.vue';

export default {
  components: {
    PageHeader,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
