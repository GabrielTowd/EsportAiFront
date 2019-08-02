<template>
  <div class="hero">
    <div class="main-left">
      <base-widget
        componentRoute="Hero/HeroInfos.vue"
        widgetClass="infos"
      />
      <base-widget
        :hasHeader="true"
        headerValue="Skins"
        :hasHeaderNav="false"
        componentRoute="Hero/HeroSkins.vue"
        widgetClass="skins"
      />
    </div>
    <div class="main-right">
      <base-widget
        :hasHeader="true"
        headerValue="Sorts"
        componentRoute="Hero/HeroSpells.vue"
        widgetClass="spells"
      />
      <div class="sub-right-bottom">
        <div class="center">
          <base-widget
            :hasHeader="true"
            headerValue="Astuces"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroTips.vue"
            widgetClass="tips"
          />
          <base-widget
            :hasHeader="true"
            headerValue="Objects Recommandés"
            :hasHeaderNav="true"
            componentRoute="Hero/HeroObjects.vue"
            widgetClass="objects"
          />
        </div>
        <base-widget
          :hasHeader="true"
          headerValue="Stats"
          componentRoute="Hero/HeroStats.vue"
          widgetClass="stats"
        />
      </div>
    </div>
  </div>
</template>

<script>
import BaseWidget from '../components/BaseWidget.vue'

export default {
  name: 'hero',
  components: {
    BaseWidget
  },
  props: {
    heroName: {
      type: String,
      isRequired: true
    }
  }
}
</script>
