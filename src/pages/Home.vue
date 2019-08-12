<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <header-component v-if="answerType !== null"></header-component>
    <hero v-if="answerType === 'ask_champion'"></hero>
  </div>
</template>


<script>
import Hero from "./Hero.vue";
import Search from "../components/SearchInput.vue";
import HeaderComponent from "../components/Header.vue";
import { mapGetters} from "vuex";

export default {
  name: "app",
  components: {
    Search,
    Hero,
    HeaderComponent
  },
  computed: {
    ...mapGetters(["answerType"])
  }
};
</script>