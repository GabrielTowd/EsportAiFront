<template>
  <div class="hero">
    <h1>{{ currentChampion.name }}</h1>
    <!-- <div class="main-left">
      <base-widget componentRoute="Hero/HeroInfos.vue" />
      <base-widget
        :hasHeader="true"
        headerValue="Skins"
        :hasHeaderNav="false"
        componentRoute="Hero/HeroSkins.vue"
      />
    </div>
    <div class="main-right">
      <base-widget :hasHeader="true" headerValue="Sorts" componentRoute="Hero/HeroSpells.vue" />
      <div class="sub-right-bottom">
        <div class="center">
          <base-widget
            :hasHeader="true"
            headerValue="Astuces"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroTips.vue"
          />
          <base-widget
            :hasHeader="true"
            headerValue="Objects Recommandés"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroObjects.vue"
          />
        </div>
        <base-widget :hasHeader="true" headerValue="Stats" componentRoute="Hero/HeroStats.vue" />
      </div>
    </div>-->
  </div>
</template>

<script>
import BaseWidget from "../components/BaseWidget.vue";
import { mapGetters } from "vuex";

export default {
  name: "hero",
  components: {
    BaseWidget
  },
  computed: {
    ...mapGetters(["currentChampion"])
  }
};
</script>
