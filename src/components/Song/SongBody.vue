<template>
  <div class="container" id="songBody">
    <!-- Song lyrics section -->
    <div>
      <div class="row">
        <div class="col">
          <button type="button" class="btn btn-info btn-sm">
            <i class="material-icons">share</i>
          </button>
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
      <div class="row justify-content-center">
        <div>
          <h6 class="text-info">{{ song[songId - 1].author }}</h6>
          <br />
          <pre id="songLyrics" :style="{ fontSize: this.fontSize + 'px' }">{{
            song[songId - 1].lyrics
          }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fontSize: 14,
      song: [],
    };
  },
  props: {
    songId: Number,
  },
  methods: {
    changeFontSize(item) {
      let max = 40;
      let min = 14;
      if (item == "increase") {
        if (this.fontSize < max) this.fontSize += 2;
      } else {
        if (this.fontSize > min) this.fontSize -= 2;
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
    for (let i = 0; i < 702; i++) {
      this.song.push({
        id: "1",
        title: "A Common Love",
        author: "Charles F Brown",
        subject: "CHURCH - LOVE FOR OTHERS (SOCIAL CONCERN)",
        lyrics:
          "\tA common love for each other\r\n\tA common gift to the Saviour\r\n\tA common bond holding us to the Lord\r\n\tA common strength when we’re weary\r\n\tA common hope for tomorrow\r\n\tA common joy in the truth of\r\n\tGod’s word\r\n\nIn his family, we can meet each one’s needs\r\nWe can light each one’s path\r\nWe can bear each one’s grief\r\nAs his children we can comfort each care\r\nWe can build each one’s faith\r\nWe can work, we can share\r\n\nIn his family, all the love that we show\r\nAll the help that we give\r\nAll the life we bestow\r\nAs his children, they’re an offering we make\r\nNot expecting return, just a gift for his sake\r\n",
      });
    }
  },
};
</script>

<style>
#songBody{
  width: 90vw;
}

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