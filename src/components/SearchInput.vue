<template>
  <div class="search">
    <input
      type="text"
      placeholder="Poser votre question ici…"
      v-on:keyup.enter="submitQuestion(questionValue)"
      v-model="questionValue"
    />
    <img
      src="../assets/img/enter.svg"
      alt="Enter button"
      v-on:click="submitQuestion(questionValue)"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "search",
  data() {
    return {
      questionValue: ""
    };
  },
  created() {
    // window.addEventListener("scroll", () => this.watchScroll(this.showView));
  },
  computed: {
    ...mapGetters(["showResult"])
  },
  methods: {
    submitQuestion: function(question) {
      let screenHeight = window.innerHeight;
      this.$store.dispatch("QUERY_AI", question).then(res => {
        if (res.status === 200) this.$store.dispatch("SHOW_RESULT");
        console.log("fooo");
        window.scrollTo(0, screenHeight);
      });
      document.activeElement.blur();
    },
    watchScroll: function(shouldScroll) {
      let screenHeight = window.innerHeight;
      let scrollPosition = window.pageYOffset;
      if (shouldScroll) {
        scrollPosition < screenHeight ? window.scrollTo(0, screenHeight) : null;
      } else {
        window.scrollTo(0, 0);
      }
    }
  }
};
</script>
