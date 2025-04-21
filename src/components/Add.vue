<template>
  <Header />
  <h1>Hello User, Welcome on Add Restaurant Page</h1>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "AddView",
  components: {
    Header,
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