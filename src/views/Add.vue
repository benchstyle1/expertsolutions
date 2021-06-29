<template>
  <div class="add-user">
    <UserEditCard @inputUserData="user = $event" />
    <div class="card-action">
      <button
        class="waves-effect waves-light btn-small red lighten-2"
        @click="addUser"
      >
        <i class="material-icons left">add</i>
        Add Contact
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import UserEditCard from "@/components/UserEditCard.vue";
export default {
  name: "Add",
  components: {
    UserEditCard
  },
  data() {
    return {
      user: {}
    };
  },
  methods: {
    ...mapActions(["addData"]),
    addUser() {
      this.addData(this.user);
      this.$router.push("/");
    }
  }
};
</script>

<style>
.add-user {
  width: 50%;
  margin: 50px auto 0 auto;
}

.add-user .card-action {
  margin-top: 20px;
}

.add-user .card-action button {
  display: block;
  margin: 0 auto;
}
</style>
