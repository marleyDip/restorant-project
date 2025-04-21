<template>
  <Header />
  <h1>Hello {{ name }}, Welcome on Home Page</h1>
  <table border="1">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Address</th>
      <th>Cuisine</th>
      <th>Rating</th>
    </tr>

    <tr v-for="restaurant in restaurants" :key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.location }}</td>
      <td>{{ restaurant.cuisine }}</td>
      <td>{{ restaurant.rating }}</td>
    </tr>
  </table>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    Header,
  },
  data() {
    return {
      name: "",
      restaurants: [],
      // Add any other data properties you need here
    };
  },
  async mounted() {
    //console.warn("HomeView mounted");
    // Check if user is logged in
    let userInfo = localStorage.getItem("user-info");
    this.name = JSON.parse(userInfo).name;
    if (!userInfo) {
      // Redirect to login page if not logged in
      this.$router.push({ name: "SignUp" });
    } /* else {
      // User is logged in, you can fetch user data or perform other actions here
      console.warn("User is logged in:", JSON.parse(userInfo));
    } */

    let result = await axios.get("http://localhost:3000/restaurants");
    console.warn(result);
    this.restaurants = result.data;
  },
};
</script>

<style>
td,
th {
  width: 160px;
  height: 40px;
}
</style>