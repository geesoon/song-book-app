<template>
  <div>
    <div id="arrowFab">
      <button class="btn btn-dark" @click="goToTop">
        <i class="material-icons">arrow_drop_up</i>
      </button>
    </div>
    <!-- List of Songs -->
    <!-- <div
      v-touch:swipe.left="swipeLeftHandler"
      v-touch:swipe.right="swipeRightHandler"
    > -->
    <div>
      <div v-for="(song, index) in groupList" :key="index">
        <div class="row justify-content-md-center justify-content-sm-center">
          <h3 class="col-3">{{ song.songNumber }}</h3>
          <div class="col">
            <div class="row my-1">
              <!-- TODO: Bind a specific key to toggle specific song -->
              <button
                class="btn btn-info btn-sm"
                @click="toggleSongBody(song.songNumber)"
              >
                <h6>
                  {{ song.title }}
                </h6>
              </button>
              <button
                class="btn btn-primary btn-sm ml-2"
                @click="toggleSongBody(song.songNumber)"
              >
                <i class="material-icons">expand_more</i>
              </button>
            </div>
          </div>
        </div>
        <div
          v-show="expandedSong(song.songNumber)"
          class="row justify-content-center my-3"
        >
          <songBody :songId="song.songNumber" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import song from "../data/song.json";
import songBody from "../components/Song/SongBody";

export default {
  data: function () {
    return {
      songId: Number,
      expanded: false,
      swipeAnimation: "col mx-auto",
      range: { begin: 1, end: 702 },
      songList: [],
    };
  },
  components: {
    songBody,
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
    goToTop() {
      console.log("clicked");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    expandedSong(id) {
      if (id === this.songId && this.expanded === true) return true;
      else return false;
    },
    toggleSongBody(id) {
      if (this.expanded === true) {
        this.expanded = false;
      } else {
        this.songId = id;
        this.expanded = true;
      }
    },
    // swipeRightHandler() {
    //   // this.swipeAnimation =
    //   //   "col mx-auto animate__animated animate__slideInLeft";
    //   this.changeSongList("increment");
    // },
    // swipeLeftHandler() {
    //   // this.swipeAnimation =
    //   //   "col mx-auto animate__animated animate__slideInRight";
    //   this.changeSongList("decrement");
    // },
    // changeSongList(method) {
    //   if (method === "increment") {
    //     if (this.range.end === 600) this.range.end = 702;
    //     if (this.range.end < 600) this.range.end += 100;
    //     if (this.range.begin != 601) this.range.begin += 100;
    //   } else {
    //     // decrement
    //     if (this.range.end === 702) this.range.end = 600;
    //     else if (this.range.end > 100) this.range.end -= 100;
    //     else null;
    //     if (this.range.begin != 1) this.range.begin -= 100;
    //   }
    // },
    // goToSong(number) {
    //   console.log(`/song/${number}`);
    //   this.$router.push(`/song/${number}`);
    // },
  },
  created() {
    for (let i = 0; i < 702; i++) {
      this.songList.push({ songNumber: i + 1, title: "A Common Love" });
    }
  },
};
</script>

<style>
#arrowFab{
  position: fixed; 
  right: 2%; 
  bottom: 10%; 
  z-index: 1;
}
</style>