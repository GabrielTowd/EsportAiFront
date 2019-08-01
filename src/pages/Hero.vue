<template>
  <div class="hero">
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
    <base-widget
      :hasHeader="true"
      headerValue="Astuces"
      :hasHeaderNav="true"
      componentRoute="Hero/HeroTips.vue"
      widgetClass="tips"
    />
    <div class="stats"></div>
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
