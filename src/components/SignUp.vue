<template>
  <img src="../assets/restaurant.png" alt="Vue logo" class="logo" />
  <h3>Sign Up</h3>
  <div class="register">
    <input type="text" placeholder="Enter Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />
    <button>Sign Up</button>
    <p>Already have an account? <a href="#">Log in</a></p>
  </div>
</template>

<script>
export default {
  name: "SignUp",
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