<template>
  <div>
    <div class="arrowFab">
      <button class="btn btn-dark" @click="goToTop">
        <i class="material-icons">arrow_drop_up</i>
      </button>
    </div>
    <!-- List of Songs -->
    <div>
      <div v-for="(song, index) in songList" :key="index">
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
                v-if="isExpandSongBody(song.songNumber)"
                class="btn btn-primary btn-sm ml-2"
                @click="toggleSongBody(song.songNumber)"
              >
                <i class="material-icons">expand_less</i>
              </button>
              <button
                v-else
                class="btn btn-primary btn-sm ml-2"
                @click="toggleSongBody(song.songNumber)"
              >
                <i class="material-icons">expand_more</i>
              </button>
            </div>
          </div>
        </div>
        <div
          v-show="isExpandSongBody(song.songNumber)"
          class="row justify-content-center my-3"
        >
          <songBody :songId="song.songNumber" />
        </div>
      </div>
    </div>
    <div class="row justify-content-center my-3">
      <small>The End</small>
    </div>
  </div>
</template>

<script>
import songBody from "../components/Song/SongBody";

export default {
  data: function () {
    return {
      songId: Number,
      songList: [], // list of song
    };
  },
  components: {
    songBody,
  },
  methods: {
    goToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    isExpandSongBody(songNumber) {
      if (this.songList[songNumber - 1].expanded === true) return true;
      else return false;
    },
    toggleSongBody(songNumber) {
      if (this.songList[songNumber - 1].expanded === true) {
        this.songList[songNumber - 1].expanded = false;
      } else {
        this.songList[songNumber - 1].expanded = true;
      }
    },
  },
  created() {
    for (let i = 0; i < 100; i++) {
      this.songList.push({
        songNumber: i + 1,
        title: "A Common Love",
        expanded: false,
      });
    }
  },
};
</script>

<style>

</style>