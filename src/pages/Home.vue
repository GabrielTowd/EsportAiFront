<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <header-component v-if="answerType !== null"/>
    <hero v-if="answerType === 'ask_champion'"/>
    <hero-comparaison v-if="answerType === 'compare_champion'"/>
  </div>
</template>


<script>
import Search from "../components/SearchInput.vue";
import HeaderComponent from "../components/Header.vue";
import Hero from "./Hero.vue";
import HeroComparaison from "./HeroComparaison.vue";
import { mapGetters} from "vuex";

export default {
  name: "app",
  components: {
    Search,
    HeaderComponent,
    Hero,
    HeroComparaison
  },
  computed: {
    ...mapGetters(["answerType"])
  }
};
</script>