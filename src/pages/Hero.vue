<template>
  <div class="hero">
    <div class="main-left">
      <base-widget 
        componentRoute="Hero/HeroInfos.vue" 
        :championData="currentChampion"
      />
      <base-widget
        :hasHeader="true"
        headerValue="Skins"
        :hasHeaderNav="true"
        componentRoute="Hero/HeroSkins.vue"
        :championData="currentChampion"
      />
    </div>
    <div class="main-right">
      <base-widget 
        :hasHeader="true" 
        headerValue="Sorts" 
        componentRoute="Hero/HeroSpells.vue" 
        :championData="currentChampion"
      />
      <div class="sub-right-bottom">
        <div class="center">
          <base-widget
            :hasHeader="true"
            headerValue="Astuces"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroTips.vue"
            :championData="currentChampion"
          />
          <base-widget
            :hasHeader="true"
            headerValue="Objects Recommandés"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroObjects.vue"
            :championData="currentChampion"
          />
        </div>
        <base-widget 
          :hasHeader="true" 
          headerValue="Stats" 
          componentRoute="Hero/HeroStats.vue" 
          :championData="currentChampion"
        />
      </div>
    </div>
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
