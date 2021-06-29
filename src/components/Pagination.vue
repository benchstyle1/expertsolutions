<template>
  <ul class="pagination">
    <li @click="previousPage" v-if="currentPage > 1">
      <a href="#"><i class="material-icons">chevron_left</i></a>
    </li>
    <li class="disabled" v-else>
      <a href="#"><i class="material-icons">chevron_left</i></a>
    </li>
    <li
      class="waves-effect"
      v-for="page in pagesCount"
      :key="page"
      :class="{ active: page === currentPage }"
      @click="selectPage(page)"
    >
      <a href="#">{{ page }}</a>
    </li>
    <li @click="nextPage" v-if="currentPage < pagesCount">
      <a href="#"><i class="material-icons">chevron_right</i></a>
    </li>
    <li class="disabled" v-else>
      <a href="#"><i class="material-icons">chevron_right</i></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    pagesCount: {
      type: Number,
      default() {
        return 3;
      },
    },
    currentPage: {
      type: Number,
      default() {
        return 1;
      },
    },
  },
  methods: {
    selectPage(page) {
      this.$emit("onPageChange", page);
    },
    previousPage() {
      this.$emit("onPreviousPage");
    },
    nextPage() {
      this.$emit("onNextPage");
    },
  },
};
</script>

<style>
.pagination {
  text-align: center;
  margin: 20px auto 0 auto;
  width: 50%;
}
</style>
