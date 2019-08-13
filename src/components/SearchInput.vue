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
  computed: {
    ...mapGetters(["showResult"])
  },
  methods: {
    submitQuestion: function(question) {
      this.$store.dispatch("SHOW_RESULT");
      this.$store.dispatch("CLEAR_DATA");
      this.$store.dispatch("QUERY_AI", question).then(res => {
        if (res.status === 200) this.$store.dispatch("SHOW_RESULT")
        document.activeElement.blur()
      })
    }
  }
}
</script>
