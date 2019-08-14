<template>
  <div class="hero flex">
    <div class="main-left">
      <base-widget
        componentRoute="Hero/HeroInfos.vue" 
        :championData="data"
      />
      <base-widget
        headerValue="Skins"
        :hasHeaderNav="true"
        componentRoute="Hero/HeroSkins.vue"
        :championData="data"
      />
    </div>
    <div class="main-right">
      <base-widget
        headerValue="Sorts" 
        componentRoute="Hero/HeroSpells.vue" 
        :championData="data"
      />
      <div class="sub-right-bottom">
        <div class="center">
          <base-widget
            headerValue="Astuces"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroTips.vue"
            :championData="data"
          />
          <base-widget
            headerValue="Objects Recommandés"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroObjects.vue"
            :championData="data"
          />
        </div>
        <base-widget 
          headerValue="Stats" 
          componentRoute="Hero/HeroStats.vue" 
          :championData="data"
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
    ...mapGetters(["data"])
  }
};
</script>
