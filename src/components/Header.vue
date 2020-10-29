<template>
  <div id="appHeader">
    <div class="col">
      <header>
        <h3
          v-show="this.$route.name == 'Home'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Home')"
        >
          ♬ Ainesis
        </h3>
        <h3
          v-show="this.$route.name == 'Search'"
          class="text-capitalize"
          style="cursor: pointer"
          @click="gotoRoute('Search')"
        >
          🔍 Search
        </h3>
        <div class="row" v-show="this.$route.name == 'Alphabetical'">
          <button class="btn float-left" @click="$router.go(-1)">
            <i class="material-icons">arrow_back_ios</i>
          </button>
          <h3
            class="text-capitalize"
            style="cursor: pointer"
            @click="gotoRoute('Alphabetical')"
          >
            🔤 Alphabetical
          </h3>
        </div>
        <div class="row" v-show="this.$route.name == 'Subjects'">
          <button class="btn float-left" @click="$router.go(-1)">
            <i class="material-icons">arrow_back_ios</i>
          </button>
          <h3
            v-show="this.$route.name == 'Subjects'"
            class="text-capitalize"
            style="cursor: pointer"
            @click="gotoRoute('Subjects')"
          >
            📖 Topic
          </h3>
        </div>
        <div class="row" v-show="this.$route.name == 'Category'">
          <button class="btn float-left" @click="$router.go(-1)">
            <i class="material-icons">arrow_back_ios</i>
          </button>
          <h3
            v-show="this.$route.name == 'Category'"
            class="text-capitalize"
            style="cursor: pointer"
            @click="gotoRoute('Category')"
          >
            ❑ Category
          </h3>
        </div>
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