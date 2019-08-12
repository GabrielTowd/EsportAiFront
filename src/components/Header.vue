<template>
  <div class="header">
    <img src="../assets/img/close.svg" alt="close button" @click="this.back">
    <h1>{{ this.setTitle(answerType, currentChampion.name) }}</h1>
    <p></p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { setTimeout } from 'timers';

export default {
  mounted: function () {
    setTimeout(
      function () {
        window.scrollTo({top: window.innerHeight - 30, behavior: 'smooth'})
      },
      100
    )
  },
  computed : {
    ...mapGetters(['currentChampion', 'answerType'])
  },
  methods : {
    back: function () {
      const vm = this;
      window.scrollTo({top: 0, behavior: 'smooth'});
      setTimeout( 
        function () {
          vm.$store.dispatch("SHOW_RESULT");
          vm.$store.dispatch("CLEAR_DATA");
        },
        800
      )
    },
    setTitle : function (answerTypeValue, currentChampionName) {
      switch (answerTypeValue) {
        case "ask_champion" :
          return "Descriptif du champion " + currentChampionName;
      }
      
    }
  }
}
</script>
