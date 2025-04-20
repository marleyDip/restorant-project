<template>
  <img src="../assets/restaurant.png" alt="Vue logo" class="logo" />
  <h3>Sign Up</h3>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />

    <input type="email" v-model="email" placeholder="Email" />

    <input type="password" v-model="password" placeholder="Password" />

    <button @click="signUp">Sign Up</button>

    <p>Already have an account? <a href="#">Log in</a></p>
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
      console.warn("Sign Up clicked", this.name, this.email, this.password);
      // You can use this data to send a request to your backend API for registration
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("sign Up Done");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
    },
  },
};
</script>

<style>
.logo {
  width: 100px;
}
.register input {
  width: 300px;
  height: 60px;
  padding-left: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  border: 1px solid skyblue;
}
.register button {
  width: 320px;
  height: 40px;
  background-color: skyblue;
  border: 1px solid skyblue;
  color: #fff;
  cursor: pointer;
}
</style>