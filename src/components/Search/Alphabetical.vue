<template>
  <div>
    <div>
      <ul class="list-group">
        <div v-for="(alphabet, index) in alphabetical" :key="index">
          <li
            class="list-group-item d-flex justify-content-between align-items-center alphabetList my-1"
          >
            {{ alphabet.id }}
            <span class="badge badge-primary badge-pill">10</span>
          </li>
          <ul class="list-group list-group-flush my-3">
            <li
              v-for="(song, index) in alphabet.songs"
              :key="index"
              class="list-group-item"
            >
              {{ song }}
            </li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import Alphabetical from "../../data/alphabetical.json";

export default {
  data() {
    return {
      alphabetical: Alphabetical.data,
    };
  },
  methods: {
    goToAlphabeticalList(name) {
      console.log(name);
    },
  },
};
</script>

<style>
.alphabetList{
  opacity: 1;
  background: coral;
  border-radius: 20px;
}
</style>