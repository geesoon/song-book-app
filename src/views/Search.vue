<template>
  <div class="container">
    <div class="col mx-auto">
      <SearchBar />
    </div>
    <div class="col mx-auto">
      <div class="card-deck">
        <div
          class="card indexCard"
          v-for="(item, index) in route"
          :key="index"
          @click="goToPage(item.path)"
          :style="{ background: item.color, height: '130px' }"
        >
          <div class="card-body" style="color: white">
            <h5 class="card-title">{{ item.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from "../components/Search/SearchEngine";

export default {
  data() {
    return {
      route: [
        { name: "Index of Topics", path: "subjects", color: "rgb(199, 80, 0)" },
        {
          name: "Index of Category",
          path: "category",
          color: "rgb(81, 203, 32)",
        },
        {
          name: "Index of Titles & First Lines",
          path: "alphabetical",
          color: "rgb(47, 72, 88)",
        },
      ],
    };
  },
  components: {
    SearchBar,
  },
  methods: {
    goToPage(name) {
      if (this.$route.name != name) this.$router.push({ path: name });
    },
  },
};
</script>
<style>
</style>