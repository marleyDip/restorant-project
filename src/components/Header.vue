<template>
  <div class="nav">
    <a href="">Home</a>
    <a href="">Add Restaurant</a>
    <a href="">Update Restaurant</a>
    <a href="">Logout</a>
  </div>
</template>

<script>
export default {
  name: "HeaderView",
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