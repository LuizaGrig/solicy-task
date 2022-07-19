<template>
  <div>
    <header>
      <h1>Accounts List</h1>
    </header>
    <section>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Created On</th>
            <th>Owner</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="account in accounts" :key="account.id">
            <td>{{ account.id }}</td>
            <td>{{ account.name }}</td>
            <td>{{ account.createdOn }}</td>
            <td>{{ account.owner }}</td>
            <td @click="view(account.id)"><a href="#">View</a></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "UsersAccounts",
  data() {
    return {
      accounts: [],
      userAccount: [],
    };
  },
  mounted() {
    axios
      .get(" http://localhost:8000/api/accounts")
      .then((response) => (this.accounts = response.data));
  },
  methods: {
    view(id) {
      this.$router.push({
        name: "userAccount",
        params: { id: id },
      });
    },
  },
};
</script>
