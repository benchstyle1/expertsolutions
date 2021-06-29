<template>
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>Имя</th>
        <th>Фамилия</th>
        <th>Email</th>
        <th>Дата рождения</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="row in tableData"
        :key="row.Id"
        :class="{ birthday: isBirthday(row) }"
        @click="watchUser(row)"
      >
        <td v-for="cell in row" :key="cell">{{ cell }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "CustomTable",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    isBirthday(row) {
      if (row.dateOfBirth) {
        const now = new Date(Date.now());
        let day = now.getDate();
        let month = () => {
          let monthIndex = now.getMonth();
          if (monthIndex < 10) {
            return `0${monthIndex + 1}`;
          } else {
            return `${monthIndex}`;
          }
        };

        let year = now.getFullYear();
        let date = `${day}.${month()}.${year}`;

        if (row.dateOfBirth.substring(0, 5) === date.substring(0, 5)) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    watchUser(row) {
      this.$router.push({ name: "User", params: { id: row.id } });
    }
  }
};
</script>

<style>
table {
  width: 80%;
  margin: 0 auto;
}

table > tbody > tr:hover {
  cursor: pointer;
}

.birthday {
  background-color: #ee6e73;
}
</style>
