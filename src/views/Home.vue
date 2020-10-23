<template>
  <div>
    <div style="position: fixed; left: 0%; top: 0%; bottom: 50%">
      <button
        @click="changeSongList('decrement')"
        style="fontsize: 50px; height: 100vh"
        class="btn"
      >
        ‹
      </button>
    </div>
    <div style="position: fixed; right: 0%; top: 0%; bottom: 50%">
      <button
        @click="changeSongList('increment')"
        style="fontsize: 50px; height: 100vh"
        class="btn"
      >
        ›
      </button>
    </div>
    <!-- List of Songs -->
    <div
      class="col mx-auto"
      v-touch:swipe.left="swipeLeftHandler"
      v-touch:swipe.right="swipeRightHandler"
    >
      <div class="row">
        <div
          v-for="(song, index) in groupList"
          :key="index"
          class="card my-3 small"
          @click="goToSong(song.songNumber)"
          style="background-color: rgb(33, 118, 174); margin: 3px"
        >
          <div class="card-body" style="color: white">
            <h6 class="card-title">
              <span
                ><strong>{{ song.songNumber }}</strong></span
              ><br />
              <span
                ><small>{{ song.title }}</small></span
              >
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import song from "../data/song.json";

export default {
  data: function () {
    return {
      swipeAnimation: "col mx-auto",
      range: { begin: 1, end: 100 },
      songList: [],
    };
  },
  computed: {
    groupList: function () {
      let begin = this.range.begin;
      let end = this.range.end;
      let list = [];
      for (let i = begin; i <= end; i++) {
        list.push({ songNumber: i, title: "A Common Love" });
      }
      return list;
    },
  },
  methods: {
    swipeRightHandler() {
      // this.swipeAnimation =
      //   "col mx-auto animate__animated animate__slideInLeft";
      this.changeSongList("increment");
    },
    swipeLeftHandler() {
      // this.swipeAnimation =
      //   "col mx-auto animate__animated animate__slideInRight";
      this.changeSongList("decrement");
    },
    changeSongList(method) {
      if (method === "increment") {
        if (this.range.end === 600) this.range.end = 702;
        if (this.range.end < 600) this.range.end += 100;
        if (this.range.begin != 601) this.range.begin += 100;
      } else {
        // decrement
        if (this.range.end === 702) this.range.end = 600;
        else if (this.range.end > 100) this.range.end -= 100;
        else null;
        if (this.range.begin != 1) this.range.begin -= 100;
      }
    },
    goToSong(number) {
      console.log(`/song/${number}`);
      this.$router.push(`/song/${number}`);
    },
  },
  created() {
    for (let i = 0; i < 702; i++) {
      this.songList.push({ songNumber: i + 1, title: "A Common Love" });
    }
  },
};
</script>

<style>
</style>