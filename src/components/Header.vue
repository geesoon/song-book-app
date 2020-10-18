<template>
  <div class="col mx-auto">
    <div class="col">
      <header>
        <h1
          v-show="currentPath"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoHome"
        >
          Songs
        </h1>
        <h1
          v-show="!currentPath"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoHome"
        >
          Search
        </h1>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoHome: function () {
      if (this.$route.name != "Home") this.$router.push({ path: "/" });
    },
  },
  computed: {
    currentPath() {
      if (this.$route.name == "Search") return false;
      else return true;
    },
  },
};
</script>

<style>
header {
  text-align: left;
  font-family: var(--main-font-family);
}
</style>