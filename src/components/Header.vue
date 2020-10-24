<template>
  <div class="container" id="appHeader">
    <div class="col">
      <header>
        <h3
          v-show="this.$route.name == 'Home'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Home')"
        >
          ♬ Songs List
        </h3>
        <h3
          v-show="this.$route.name == 'Search'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Search')"
        >
          🔍 Search
        </h3>
        <h3
          v-show="this.$route.name == 'Alphabetical'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Alphabetical')"
        >
          🔤 Alphabetical
        </h3>
        <h3
          v-show="this.$route.name == 'Subjects'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Subjects')"
        >
          📖 Topic
        </h3>
        <h3
          v-show="this.$route.name == 'Category'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Category')"
        >
          ❑ Category
        </h3>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoRoute(pathName) {
      if (this.$route.name != pathName)
        this.$router.push({ path: `/${pathName}` });
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