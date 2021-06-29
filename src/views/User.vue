<template>
  <div class="user">
    <router-link
      class="waves-effect waves-light btn-small red lighten-2"
      to="/"
    >
      <i class="material-icons left">arrow_back</i>Home
    </router-link>
    <UserCard :userData="user" @inputUserData="user = $event" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserCard from "@/components/UserCard.vue";

export default {
  name: "User",
  components: {
    UserCard
  },
  data() {
    return {
      user: ""
    };
  },
  created() {
    this.user = this.getUserById(this.$route.params.id);
  },
  computed: {
    ...mapGetters(["getUserById"])
  }
};
</script>

<style>
.user {
  display: flex;
  flex-direction: column;
}

.user a {
  margin: 50px 10% 20px auto;
  float: right;
}
</style>
