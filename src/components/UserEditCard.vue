<template>
  <div class="user-edit-card">
    <div class="card-content">
      <input
        placeholder="Enter First Name"
        id="first_name"
        type="text"
        class="validate"
        v-model="changedData.firstname"
        @input="sendData"
        required
      />
      <label for="first_name">First Name</label>
      <input
        placeholder="Enter Last Name"
        id="last_name"
        type="text"
        class="validate"
        v-model="changedData.lastname"
        @input="sendData"
        required
      />
      <label for="last_name">Last Name</label>
      <input
        placeholder="Enter Email"
        id="email"
        type="email"
        class="validate"
        v-model="changedData.email"
        @input="sendData"
        required
      />
      <label for="email">Email</label>
      <input
        placeholder="Enter a date of Birth"
        id="dateOfBirth"
        type="text"
        class="validate"
        v-model="changedData.dateOfBirth"
        @input="sendData"
        required
      />
      <label for="dateOfBirth">Date of Birth</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEditCard",
  props: {
    changedData: {
      type: Object,
      default() {
        return {
          id: 0,
          firstname: "",
          lastname: "",
          email: "",
          dateOfBirth: "01.01.1970"
        };
      }
    }
  },
  methods: {
    sendData() {
      this.$emit("inputUserData", this.changedData);
    }
  }
};
</script>

<style></style>
