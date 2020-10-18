<template>
  <div id="app">
    <div class="container">
      <AppHeader />
      <router-view />
    </div>
    <NaviBar />
  </div>
</template>

<script>
import AppHeader from "./components/Header";
import NaviBar from "./components/NaviBar";

export default {
  components: {
    NaviBar,
    AppHeader,
  },
  data() {
    return { reset: false };
  },
  methods: {},
};
</script>

<style>
body {
  height: min-vh-100;
}
</style>