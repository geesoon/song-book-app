<template>
  <div>
    <form>
      <div class="form-group">
        <input
          v-model="searchInput"
          class="form-control-lg"
          style="width: 100%"
          type="text"
          placeholder="song number, lyrics, titles"
        />
      </div>
    </form>
    <div v-show="searchInput != ''">search result shows here.</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    searchResult: function () {
      return null;
    },
  },
};
</script>

<style>
</style>