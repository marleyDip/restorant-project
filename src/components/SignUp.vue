<template>
  <img src="../assets/restaurant.png" alt="Vue logo" class="logo" />

  <h3>Sign Up</h3>

  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />

    <input type="email" v-model="email" placeholder="Enter Email" />

    <input type="password" v-model="password" placeholder="Enter Password" />

    <button @click="signUp">Sign Up</button>

    <!-- <p>Already have an account? <a href="#">Log in</a></p> -->

    <p>
      <router-link to="/login">Already Have an account? Log In </router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      // Handle sign-up logic here
      //console.warn("Sign Up clicked", this.name, this.email, this.password);
      // You can use this data to send a request to your backend API for registration
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({
          name: "Home",
        });

        // this.$router.push("/");
      }
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