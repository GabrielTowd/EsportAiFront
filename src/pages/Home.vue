<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <hero v-if="answerType === 'ask_champion'"></hero>
  </div>
</template>


<script>
import Hero from "./Hero.vue";
import Search from "../components/SearchInput.vue";
import { mapGetters} from "vuex";

export default {
  name: "app",
  components: {
    Search,
    Hero
  },
  computed: {
    ...mapGetters(["answerType"])
  },

};
</script>