<template>
  <div class="home">
    <SearchBar
      @onInputFistname="search.firstname = $event"
      @onInputLastname="search.lastname = $event"
    />
    <router-link
      class="waves-effect waves-light btn-small red lighten-2 add"
      to="/add"
    >
      <i class="material-icons left">add</i>
      Add Contact
    </router-link>
    <CustomTable :tableData="paginatedUsers" />
    <Pagination
      @onPageChange="pagination.currentPage = $event"
      @onPreviousPage="pagination.currentPage--"
      @onNextPage="pagination.currentPage++"
      :currentPage="pagination.currentPage"
      :pagesCount="pagesCount"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CustomTable from "@/components/CustomTable.vue";
import Pagination from "@/components/Pagination.vue";
import SearchBar from "@/components/SearchBar.vue";

export default {
  name: "Home",
  components: {
    CustomTable,
    Pagination,
    SearchBar
  },
  data() {
    return {
      pagination: {
        rowCount: 5,
        currentPage: 1
      },
      search: {
        firstname: "",
        lastname: ""
      }
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters(["getUsers"]),
    filteredUsers() {
      if (this.search.firstname || this.search.lastname) {
        let filterResults = this.getUsers;

        if (this.search.firstname) {
          filterResults = filterResults.filter(
            user =>
              user.firstname
                .substring(0, this.search.firstname.length)
                .toLowerCase() === this.search.firstname.toLowerCase()
          );
        }

        if (this.search.lastname) {
          filterResults = filterResults.filter(
            user =>
              user.lastname
                .substring(0, this.search.lastname.length)
                .toLowerCase() === this.search.lastname.toLowerCase()
          );
        }

        if (filterResults.length) {
          return filterResults;
        } else {
          return [{}];
        }
      } else {
        return this.getUsers;
      }
    },
    paginatedUsers() {
      return this.filteredUsers.slice(
        (this.pagination.currentPage - 1) * this.pagination.rowCount,
        (this.pagination.currentPage - 1) * this.pagination.rowCount +
          this.pagination.rowCount
      );
    },
    pagesCount() {
      return Math.ceil(this.getUsers.length / this.pagination.rowCount);
    }
  },
  methods: {
    ...mapActions(["fetchData"])
  }
};
</script>

<style>
.home {
  display: flex;
  flex-direction: column;
}

.add {
  float: right;
  margin: 50px 10% 20px auto;
}
</style>
