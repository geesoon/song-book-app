<template>
  <div class="container h-100 my-3">
    <!-- filter section -->
    <Section>
      <!-- Input field-->
      <div class="col-md-6 mx-auto">
        <div class="my-2">
          <input
            class="form-control"
            type="number"
            v-bind="index"
            @input="searchSongNumber($event)"
            placeholder="Search song number"
          />
          <div>
            <input
              class="form-control my-2"
              type="search"
              placeholder="Search song title"
              v-model="keyword"
              @input="filteredList"
            />
          </div>
        </div>

        <!-- Feature (View All & Indexes) button -->
        <div class="my-2">
          <button
            class="btn btn-primary mr-2"
            @click="showAllSong = !showAllSong; showIndexOpt = false; clearResult()"
          >View All</button>
          <button
            class="btn btn-primary mr-2"
            @click="showIndexOpt = !showIndexOpt; showAllSong = false; showSubjects = false; clearResult()"
          >Index</button>
        </div>

        <!-- Search Result : Song Number -->
        <div class="wrapper my-2" v-if="showSongNumberResult">
          <label>{{showSongNumberResultMessage}}</label>
        </div>

        <!-- Search Result : Song title -->
        <div class="wrapper my-2" v-if="showSearchResult">
          <div v-if="searchResult.length >0">
            <label>Search result for: {{keyword}}</label>
            <br />
            <button
              v-for="(song, index) in searchResult"
              :key="index"
              class="btn btn-outline-info btn-sm m-2"
              @click="displaySong(song.id)"
              v-scroll-to="'#song'"
            >{{song.id}}. {{song.title}}</button>
          </div>
          <div v-else>
            <p>There's no result for {{keyword}}.</p>
          </div>
        </div>

        <!-- Show all songs -->
        <div v-if="showAllSong" class="my-2">
          <div v-for="(song, index) in AppSong" :key="index">
            <button
              v-scroll-to="'#song'"
              class="btn btn-outline-dark btn-sm my-1"
              @click="displaySong(song.id)"
              style="cursor:pointer;"
            >{{song.id}}. {{song.title}}</button>
          </div>
        </div>
      </div>

      <!-- Show and list subjects -->
      <div class="col-md-12 mx-auto">
        <div class="m-4" v-if="showIndexOpt">
          <button class="btn btn-info mr-4 mb-1" @click="renderSubj">Subjects</button>
          <div v-if="showSubjects">
            <button
              class="btn btn-outline-primary btn-sm my-2 mr-2"
              v-for="(subject, index) in SongSubjects"
              :key="index"
              @click="showSubjList(index)"
            >{{subject}}</button>
          </div>

          <!-- List subj song -->
          <div class="wrapper my-2">
            <div v-if="subjList.length>0">
              <div v-for="(song, index) in subjList" :key="index">
                <button
                  class="btn btn-outline-info btn-sm m-2"
                  @click="displaySong(song.id)"
                  v-scroll-to="'#song'"
                >{{song.id}}. {{song.title}}</button>
              </div>
            </div>
          </div>

          <!-- List alphabetical search -->
          <div class="btn-group flex-wrap my-4" data-toggle="buttons" role="group">
            <button
              v-for="(letter, index) in alphabet"
              :key="index"
              class="btn btn-info mb-1"
            >{{letter}}</button>
          </div>
        </div>
      </div>
    </Section>

    <hr />

    <!-- Song lyrics section -->
    <Section>
      <div class="container h-100">
        <div class="col-md-6 my-4 mx-auto">
          <div class="row">
            <div class="col align-self-start">
              <button class="btn btn-dark float-left" @click="previousSong">Previous</button>
            </div>
            <div class="col align-self-end">
              <button class="btn btn-dark float-right" @click="nextSong">Next</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container h-100" id="song">
        <div class="col-md-6 mx-auto">
          <div>
            <h5 class="text-info">{{num = index+1}}</h5>
            <h4 class="text-primary">{{AppSong[index].title}}</h4>
            <h6 class="text-info">{{AppSong[index].author}}</h6>
            <br />
            <pre>{{AppSong[index].lyrics}}</pre>
          </div>
        </div>
      </div>
    </Section>

    <!-- Floating scrollToTop button -->
    <vue-fab mainBtnColor="#3599DB" v-scroll-to="'#app'" icon="arrow_upward"></vue-fab>
  </div>
</template>

<script>
import data from "../data/song.json";
import subjects from "../data/subjects.json";

export default {
  data() {
    return {
      AppSong: data.data,
      SongSubjects: subjects.subjects,
      index: 0,
      showSongNumberResult: false,
      showSearchResult: false,
      showIndexOpt: false,
      showAllSong: false,
      showSubjects: false,
      showSubjList: false,
      searchResult: [],
      subjList: [],
      keyword: "",
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
    };
  },
  props: {
    reset: Boolean,
  },
  watch: {
    keyword: function () {
      if (this.keyword == "") {
        this.showSearchResult = false;
      }
    },
    reset: function () {
      if (this.reset == true) {
        this.showSearchResult = false;
        this.showIndexOpt = false;
        this.showAllSong = false;
        this.showSubjects = false;
        this.keyword = "";
        this.searchResult = [];
        this.subjList = [];
      }
      this.reset = false;
      this.$emit("pageReset", this.reset);
    },
  },
  methods: {
    clearResult() {
      this.showSearchResult = false;
      this.searchResult = [];
      this.subjList = [];
      this.keyword = "";
    },
    filteredList() {
      this.searchResult = this.AppSong.filter((song) => {
        return song.title.toLowerCase().includes(this.keyword.toLowerCase());
      });
      this.showSearchResult = true;
      this.showIndexOpt = false;
      this.showAllSong = false;
      this.showSubjects = false;
    },
    displaySong(index) {
      this.index = index - 1;
    },
    previousSong() {
      if (this.index > 0) {
        this.index -= 1;
        console.log(this.index);
      } else null;
    },
    nextSong() {
      if (this.index < this.AppSong.length - 1) {
        this.index += 1;
        console.log(this.index);
      }
    },
    searchSongNumber(event) {
      if (event.target.value > this.AppSong.length || event.target.value <= 0) {
        this.showSongNumberResult = true;
        this.songNumberResultMessage = "The song number is invalid!";
      } else {
        this.showSongNumberResult = false;
        this.index = event.target.value - 1;
        this.showIndexOpt = false;
        this.showAllSong = false;
        this.showSubjects = false;
        this.showSearchResult = false;
      }
    },
    listSubjSong() {
      for (var subject in this.SongSubjects) {
        console.log(this.SongSubjects[subject]);
        var temp = this.AppSong.filter((song) => {
          return song.subject
            .toLowerCase()
            .includes(this.SongSubjects[subject].toLowerCase());
        });
        this.subjList.push(temp);
      }
      console.log(this.subjList);
    },
    renderSubj() {
      this.showSubjects = !this.showSubjects;
      this.clearResult();
      this.listSubjSong();
    },
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