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
      <th>Action</th>
    </tr>

    <tr v-for="restaurant in restaurants" :key="restaurant.id">
      <td>{{ restaurant.id }}</td>
      <td>{{ restaurant.name }}</td>
      <td>{{ restaurant.location }}</td>
      <td>{{ restaurant.cuisine }}</td>
      <td>{{ restaurant.rating }}</td>
      <td>
        <router-link :to="'/update/' + restaurant.id">Update</router-link>
        <button @click="deleteRestaurant(restaurant.id)">Delete</button>
      </td>
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

  methods: {
    async deleteRestaurant(id) {
      //console.warn(id);
      // Delete restaurant from the database

      let result = await axios.delete(
        `http://localhost:3000/restaurants/${id}`
      );
      console.warn(result);
      if (result.status == 200) {
        // Remove the deleted restaurant from the local array
        /*  this.restaurants = this.restaurants.filter(
          (restaurant) => restaurant.id !== id
        );
      } else {
        alert("Restaurant not found");
      } */
        this.loadData();
      }
    },
    async loadData() {
      let userInfo = localStorage.getItem("user-info");
      this.name = JSON.parse(userInfo).name;
      if (!userInfo) {
        // Redirect to login page if not logged in
        this.$router.push({ name: "SignUp" });
      }
      let result = await axios.get("http://localhost:3000/restaurants");
      console.warn(result);
      this.restaurants = result.data;
    },
  },

  async mounted() {
    this.loadData();
    // Check if user is logged in
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