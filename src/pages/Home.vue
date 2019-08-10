<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <hero></hero>
  </div>
</template>


<script>
import Hero from "./Hero.vue";
import Search from "../components/SearchInput.vue";

export default {
  name: "app",
  components: {
    Search,
    Hero
  }
};
</script>