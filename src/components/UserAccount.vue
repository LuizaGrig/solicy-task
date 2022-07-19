<template>
  <div>
    <h2>{{ userAccount.name }}</h2>
    <div>
      <table class="table">
        <tbody>
          <tr>
            <th>ID</th>
            <td>{{ userAccount.id }}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{{ userAccount.name }}</td>
          </tr>
          <tr>
            <th>Owner</th>
            <td>{{ userAccount.owner }}</td>
          </tr>
          <tr>
            <th>Created On</th>
            <td>{{ userAccount.createdOn }}</td>
          </tr>
          <tr>
            <th>Updated On</th>
            <td>{{ userAccount.createdOn }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      id: this.$route.params.id,
      userAccount: {},
    };
  },
  mounted() {
    axios
      .get(`http://localhost:8000/api/accounts/${this.id}`)
      .then(
        (response) => (
          (this.userAccount = response.data), console.log(this.userAccount)
        )
      );
  },
};
</script>
