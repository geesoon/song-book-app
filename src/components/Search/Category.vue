<template>
  <div class="col mx-auto">
    <div class="row">
      <div
        class="card m-1"
        v-for="(cate, index) in category"
        :key="index"
        @click="goToCategoryList(cate)"
        style="background-color: lightgreen"
      >
        <div class="card-body" style="color: white">
          <h6 class="card-title">{{ cate }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "../../data/category.json";

export default {
  data() {
    return {
      category: Category.data,
    };
  },
  methods: {
    goToCategoryList(name) {
      console.log(name);
    },
  },
};
</script>

<style>

</style>