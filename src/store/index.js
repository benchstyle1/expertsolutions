import Vue from "vue";
import Vuex from "vuex";
import users from "@/fixture/users.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    loadUsers(state, users) {
      state.users = users;
    },
    deleteUser(state, id) {
      let userIndex = state.users.findIndex(user => user.id === id);
      state.users.splice(userIndex, 1);
    },
    editUser(state, payload) {
      let userIndex = state.users.findIndex(user => user.id === payload.id);
      state.users.splice(userIndex, 1, payload);
    },
    addUser(state, payload) {
      state.users.push(payload);
    }
  },
  actions: {
    fetchData(ctx) {
      //Имитация API...Get users
      ctx.commit("loadUsers", users);
      console.log("users loaded");
    },
    deleteData(ctx, id) {
      //Имитация API...delete user by id
      console.log(`user #${id} was deleted`);
    },
    addData(ctx, user) {
      //Имитация API...post user
      //response.data.user с уникальным id от бэкэнда
      //в качестве имитации - максимальный id++
      debugger;
      let users = [...ctx.state.users];
      user.id = users.sort((prev, next) => next.id - prev.id)[0].id;
      user.id += 1;
      console.log(`user ${user.id} was created`);
      ctx.commit("addUser", user);
    }
  },
  modules: {},
  getters: {
    getUsers: state => {
      return state.users;
    },
    getUserById: state => id => {
      return state.users.find(user => user.id === id);
    }
  }
});
