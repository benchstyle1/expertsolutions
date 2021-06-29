<template>
  <div class="user__card">
    <div class="card" v-if="!isEdit">
      <div class="card-content">
        <span class="card-title">{{ userData.firstname }} {{ userData.lastname }}</span>
        <p><b>Email:</b> {{ userData.email }}</p>
        <p><b>Date of Birth:</b> {{ userData.dateOfBirth }}</p>
      </div>
      <div class="card-action">
        <button
          class="waves-effect waves-light btn-small red lighten-2"
          @click="editContact()"
        >
          <i class="material-icons left">edit</i>Edit Contact
        </button>
        <button
          class="waves-effect waves-light btn-small red lighten-2"
          @click="deleteContact(userData.id)"
        >
          <i class="material-icons right">delete</i>Delete Contact
        </button>
      </div>
    </div>
    <div class="card" v-else>
      <UserEditCard :changedData="changedData" />
      <div class="card-action">
        <button
          class="waves-effect waves-light btn-small red lighten-2"
          @click="saveContact"
        >
          <i class="material-icons left">save</i>Save Changes
        </button>
        <button
          class="waves-effect waves-light btn-small red lighten-2"
          @click="discardChanges"
        >
          <i class="material-icons right">cancel</i>Discard Changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import UserEditCard from "@/components/UserEditCard.vue";

export default {
  name: "UserCard",
  components: {
    UserEditCard
  },
  data() {
    return {
      isEdit: false,
      changedData: {}
    };
  },
  props: {
    userData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  created() {
    this.restoreOriginalData();
  },
  methods: {
    ...mapMutations(["deleteUser", "editUser"]),
    deleteContact(id) {
      this.deleteUser(id);
      this.$router.push("/");
    },
    editContact() {
      this.isEdit = true;
    },
    saveContact() {
      this.editUser(this.changedData);
      this.isEdit = false;
      this.$emit("inputUserData", this.changedData);
    },
    discardChanges() {
      this.restoreOriginalData();
      this.isEdit = false;
    },
    restoreOriginalData() {
      Object.assign(this.changedData, this.userData);
    }
  }
};
</script>

<style>
.card {
  width: 50%;
  margin: 50px auto 0 auto;
}

.card-action {
  display: flex;
  justify-content: space-between;
}
</style>
