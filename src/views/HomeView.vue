<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Home msg="Welcome to Your Vue.js App" />
    <button @click="logOut">Log Out</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "HomeView",
  components: {
    Home,
  },
  methods: {
    logOut() {
      localStorage.removeItem("user-data");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
button {
  width: 350px;
  padding: 10px;
  font-weight: 600;
  text-transform: uppercase;
  border: 0;
  border-radius: 50px;
  background-color: palevioletred;
  color: white;
}
</style>
