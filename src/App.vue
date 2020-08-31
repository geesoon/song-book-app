<template>
  <div id="app">
    <header>
      <div id="navbar" class="col-xs-12 col-sm-12 col-md-12 col-lg-12 bg-light align-items-center">
        <h1
          class="navbar-brand text-primary"
          style="cursor: pointer"
          @click="resetPage"
        >Song Book App</h1>
      </div>
    </header>
    <Song :reset="reset" @pageReset="updateReset"></Song>
    <vue-fab mainBtnColor="#3599DB" v-scroll-to="'#app'" icon="arrow_upward"></vue-fab>
    <footer class="footer">
      <span class="text-muted">@2020 Song Book App</span>
    </footer>
  </div>
</template>

<script>
import Song from "./components/song";

export default {
  components: {
    Song,
  },
  data() {
    return { reset: false };
  },
  methods: {
    resetPage() {
      this.reset = true;
      console.log("Title Clicked!", this.reset);
    },
    updateReset(event) {
      this.reset = event;
      console.log("App.vue", event);
    },
  },
};
</script>

<style>
body {
  height: min-vh-100;
}

header {
  text-align: center;
  font-family: var(--main-font-family);
}

div #navbar {
  padding: 10px;
  font-family: var(--main-font-family);
}

.footer {
  font-family: var(--main-font-family);
  width: 100%;
  position: relative;
  line-height: 50px; /* Vertically center the text there */
  background-color: #f5f5f5;
  text-align: center;
}
</style>