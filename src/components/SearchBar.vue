<template>
  <div class="search-bar">
    <input
      placeholder="Enter first name"
      id="first_name"
      type="text"
      class="validate"
      v-model="searchData.firstname"
      @input="changeFirstname"
    />
    <label for="first_name">First Name</label>
    <input
      placeholder="Enter last name"
      id="last_name"
      type="text"
      class="validate"
      v-model="searchData.lastname"
      @input="changeLastname"
    />
    <label for="last_name">Last Name</label>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchData: {
        firstname: "",
        lastname: "",
      },
    };
  },
  methods: {
    changeFirstname() {
      this.$emit("onInputFistname", this.searchData.firstname);
    },
    changeLastname() {
      this.$emit("onInputLastname", this.searchData.lastname);
    },
  },
};
</script>

<style>
.search-bar {
  width: 40%;
  text-align: center;
  margin: 50px auto 0 auto;
}
</style>
