<template>
  <img src="../assets/restaurant.png" alt="Vue logo" class="logo" />

  <h3>Log In</h3>

  <div class="login">
    <input type="email" v-model="email" placeholder="Email" />

    <input type="password" v-model="password" placeholder="Password" />

    <button @click="login">log In</button>

    <p>
      <router-link to="/signup"> Don't have an account? Sign Up </router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      ///alert("Login function called");
      //console.warn("Login clicked", this.email, this.password);
      // You can use this data to send a request to your backend API for login

      //http://localhost:3000/users?email=dip.akand9899@gmail.com&password=dip@123

      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      //console.warn(result);

      if (result.status == 200 && result.data.length) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));
        this.$router.push({
          name: "Home",
        });
      } /* else {
        alert("User not found");
      } */
    },
  },
  mounted() {
    // Check if user is already logged in
    let userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      this.$router.push({
        name: "Home",
      });
    }
  },
};
</script>

<style>
</style>