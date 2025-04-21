<template>
  <div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="add">Add Restaurant</router-link>
    <router-link to="update">Update Restaurant</router-link>
    <a @click="logout" href="#">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
  methods: {
    logout() {
      // Implement logout logic here
      //console.log("User logged out");
      localStorage.clear();
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.nav {
  background-color: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  text-decoration: none;
  padding: 16px 14px;
  font-size: 16px;
  margin-right: 4px;
}
.nav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>