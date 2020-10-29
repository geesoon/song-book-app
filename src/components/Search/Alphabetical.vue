<template>
  <div>
    <div class="arrowFab">
      <button class="btn btn-dark" @click="goToTop">
        <i class="material-icons">arrow_drop_up</i>
      </button>
    </div>
    <div class="btn-group d-flex mb-2">
      <button
        class="btn btn-primary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Filter
      </button>
      <div class="dropdown-menu" style="width: 100%">
        <span
          class="dropdown-item"
          v-for="(alphabet, index) in alphabetical"
          :key="index"
          @click="applyFilter(alphabet.letter)"
        >
          {{ alphabet.letter.toUpperCase() }}
        </span>
      </div>
    </div>
    <ul class="list-group">
      <div v-for="(alphabet, index) in alphabeticalSongList" :key="index">
        <li
          class="list-group-item d-flex justify-content-between align-items-center alphabetList my-1"
        >
          <strong
            ><h4>{{ alphabet.letter.toUpperCase() }}</h4></strong
          >
          <span class="badge badge-primary badge-pill">10</span>
        </li>
        <ul class="list-group list-group-flush my-3">
          <li
            v-for="(song, index) in alphabet.songs"
            :key="index"
            class="list-group-item"
          >
            <div class="row">
              <div class="col-1">
                {{ song.id }}
              </div>
              <div class="col">
                {{ song.title }}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </ul>
  </div>
</template>

<script>
import Alphabetical from "../../data/alphabetical.json";

export default {
  data() {
    return {
      filterLetter: "all",
      alphabetical: Alphabetical.data,
    };
  },
  computed: {
    alphabeticalSongList() {
      if (this.filterLetter === "all") {
        return this.alphabetical.filter(
          (list) => list.letter.toUpperCase() !== "ALL"
        );
      } else {
        return this.alphabetical.filter(
          (list) => list.letter === this.filterLetter
        );
      }
    },
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    applyFilter(letter) {
      this.filterLetter = letter;
    },
  },
};
</script>

<style>
.alphabetList{
  opacity: 1;
}
</style>