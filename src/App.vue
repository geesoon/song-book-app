<template>
  <div id="app">
    <div class="container">
      <div class="my-4">
        <AppHeader />
      </div>
      <div class="col mx-auto">
        <router-view />
      </div>
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
a, span {
  cursor: pointer;
}

a{
  text-decoration: none;
}

.card {
  opacity: 1;
  background: gray;
  border-radius: 20px;
}
</style>