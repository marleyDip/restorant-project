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

    <button type="button" @click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "UpdateView",
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
    async updateRestaurant() {
      console.warn(this.restaurant);
      // Update restaurant in the database
      const result = await axios.put(
        `http://localhost:3000/restaurants/${this.$route.params.id}`,
        {
          name: this.restaurant.name,
          location: this.restaurant.location,
          cuisine: this.restaurant.cuisine,
          rating: this.restaurant.rating,
        }
      );
      console.warn(result);
      if (result.status == 200) {
        alert("Restaurant updated successfully");
        this.$router.push({
          name: "Home",
        });
      }
    },
  },

  async mounted() {
    let userInfo = localStorage.getItem("user-info");
    if (!userInfo) {
      this.$router.push({ name: "SignUp" });
    }
    // Fetch restaurant data for the given ID from the URL parameter
    console.warn(this.$route.params.id);

    /* let result = await axios.get(
      `http://localhost:3000/restaurants/4); */

    // let result = await axios.get(
    //   'http://localhost:3000/restaurants/+{this.$route.params.id}'
    let result = await axios.get(
      `http://localhost:3000/restaurants/${this.$route.params.id}`
    );
    console.warn(result.data);
    this.restaurant = result.data;
  },
};
</script>

