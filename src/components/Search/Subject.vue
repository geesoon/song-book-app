<template>
  <div>
    <div class="row">
      <div
        class="card m-1"
        v-for="(subj, index) in subject"
        :key="index"
        @click="goToSubjectList(subj)"
        style="background-color: lightblue"
      >
        <div class="card-body" style="color: white">
          <h6 class="card-title">{{ subj }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Subjects from "../../data/subjects.json";

export default {
  data() {
    return {
      subject: Subjects.data,
    };
  },
  methods: {
    goToSubjectList(subj) {
      console.log(subj);
    },
  },
};
</script>

<style>
</style>