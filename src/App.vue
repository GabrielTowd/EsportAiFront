<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang='scss'>
@import "./assets/style/style.scss";
</style>
