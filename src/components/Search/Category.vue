<template>
  <div class="container">
    <div class="col mx-auto">
      <h2>Index of Category</h2>
      <div class="row">
        <div
          class="card m-1"
          v-for="(cate, index) in category"
          :key="index"
          @click="goToCategoryList(cate)"
        >
          <div class="card-body" style="color: white">
            <h6 class="card-title">{{ cate }}</h6>
          </div>
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