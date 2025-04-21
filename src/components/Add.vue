<template>
  <Header />
  <h1>Hello User, Welcome on Add Restaurant Page</h1>
  <form class="add">
    <input
      type="text"
      v-model="restaurant.name"
      placeholder="Enter Name"
      name="name"
    />
    <input
      type="text"
      v-model="restaurant.location"
      placeholder="Enter Location"
      name="location"
    />
    <input
      type="text"
      v-model="restaurant.cuisine"
      placeholder="Enter Cuisine"
      name="cuisine"
    />
    <input
      type="number"
      v-model="restaurant.rating"
      placeholder="Enter Rating"
      name="contact"
    />

    <button type="button" @click="addRestaurant">Add Restaurant</button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "AddView",
  components: {
    Header,
  },

  data() {
    return {
      restaurant: {
        name: "",
        location: "",
        cuisine: "",
        rating: "",
      },
    };
  },
  methods: {
    async addRestaurant() {
      console.warn(this.restaurant);
      // Add restaurant to the database
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurant.name,
        location: this.restaurant.location,
        cuisine: this.restaurant.cuisine,
        rating: this.restaurant.rating,
      });
      // Check if the restaurant was added successfully
      //console.warn("result", result);
      if (result.status == 201) {
        this.$router.push({
          name: "Home",
        }); // Redirect to home page after adding restaurant
      } else {
        alert("Failed to add restaurant. Please try again.");
      }
      console.warn("results", result);
    },
  },

  mounted() {
    //console.warn("HomeView mounted");
    // Check if user is logged in
    let userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      // Redirect to login page if not logged in
      this.$router.push({ name: "SignUp" });
    } /* else {
      // User is logged in, you can fetch user data or perform other actions here
      console.warn("User is logged in:", JSON.parse(userInfo));
    } */
  },
};
</script>

<style>
</style>