<template>
  <div class="col mx-auto">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
            >Previous</a
          >
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
    <ul class="list-group list-group-flush my-4">
      <li
        v-for="(song, index) in groupList"
        :key="index"
        :id="song.songNumber"
        class="list-group-item songList my-1 rounded-pill shadow-sm"
        @click="goToSong(song.songNumber)"
      >
        <span class="">{{ song.songNumber }}. </span>
        <span class="">{{ song.title }}</span>
      </li>
    </ul>
    <button type="button" class="btn btn-primary float-right">Primary</button>
  </div>
</template>

<script>
// import song from "../data/song.json";

export default {
  data: function () {
    return {
      range: { begin: 1, end: 100 },
      // songList: [],
      songGroup: [
        {
          begin: 1,
          end: 100,
        },
        {
          begin: 101,
          end: 200,
        },
        {
          begin: 201,
          end: 300,
        },
        {
          begin: 301,
          end: 400,
        },
        {
          begin: 401,
          end: 500,
        },
        {
          begin: 501,
          end: 600,
        },
        {
          begin: 601,
          end: 702,
        },
      ],
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
    updateSongList({ begin, end }) {
      this.range.begin = begin;
      this.range.end = end;
      console.log(begin, end);
    },
    goToSong(number) {
      console.log(`/song/${number}`);
      this.$router.push(`/song/${number}`);
    },
  },
  created() {
    // for (let i = 0; i < 702; i++) {
    //   this.songList.push({ songNumber: i + 1, title: "A Common Love" });
    // }
  },
};
</script>

<style>
.songList{
  cursor: pointer;
}
</style>