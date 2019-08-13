<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <header-component v-if="answerType !== null"/>
    <hero v-if="answerType === 'ask_champion'"/>
    <hero-comparatif v-if="answerType === 'compare_champion'"/>
  </div>
</template>


<script>
import Search from "../components/SearchInput.vue";
import HeaderComponent from "../components/Header.vue";
import Hero from "./Hero.vue";
import HeroComparatif from "./HeroComparatif.vue";
import { mapGetters} from "vuex";

export default {
  name: "app",
  components: {
    Search,
    HeaderComponent,
    Hero,
    HeroComparatif
  },
  computed: {
    ...mapGetters(["answerType"])
  }
};
</script>