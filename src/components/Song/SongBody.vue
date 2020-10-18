<template>
  <div class="container">
    <!-- Song lyrics section -->
    <Section>
      <div class="col-md-10 mb-4 mx-auto">
        <div class="row my-4">
          <div class="col">
            <button class="btn btn-dark float-left" @click="previousSong">
              Previous
            </button>
          </div>
          <div class="col">
            <button class="btn btn-dark float-right" @click="nextSong">
              Next
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div
              class="btn-group float-right"
              role="group"
              aria-label="Basic example"
            >
              <button
                type="button"
                class="btn btn-secondary"
                @click="changeFontSize('increase')"
              >
                A +
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                @click="changeFontSize('decrease')"
              >
                <small>A -</small>
              </button>
            </div>
          </div>
        </div>
        <div class="row" id="song">
          <div class="col mx-auto">
            <div>
              <h5 class="text-info">{{ songId }}</h5>
              <h4 class="text-primary">{{ song[songId - 1].title }}</h4>
              <h6 class="text-info">{{ song[songId - 1].author }}</h6>
              <br />
              <pre
                id="songLyrics"
                :style="{ fontSize: this.fontSize + 'px' }"
                >{{ song[songId - 1].lyrics }}</pre
              >
            </div>
          </div>
        </div>
      </div>
      <br />
    </Section>
  </div>
</template>

<script>
import data from "../../data/song.json";

export default {
  data() {
    return {
      fontSize: 16,
      song: data.data,
      songId: Number,
    };
  },
  methods: {
    changeFontSize(item) {
      let max = 40;
      let min = 11;
      if (item == "increase") {
        if (this.fontSize < max) this.fontSize += 5;
      } else {
        if (this.fontSize > min) this.fontSize -= 5;
      }
      console.log("current font size:" + this.fontSize);
    },
    previousSong() {
      if (this.songId != 1) {
        this.songId -= 1;
        this.$route.params.id = this.songId;
      } else null;
    },
    nextSong() {
      if (this.songId < this.song.length) {
        this.songId += 1;
        this.$route.params.id = this.songId;
      }
    },
  },
  created() {
    this.songId = parseInt(this.$route.params.id);
  },
};
</script>

<style>
:root {
  --main-font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

pre {
  font-family: var(--main-font-family);
  font-size: 1em;
  overflow-x: auto;
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  border: 0;
  background-color: transparent;
}
</style>