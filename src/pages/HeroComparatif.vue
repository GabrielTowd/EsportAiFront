<template>
    <div class="hero-comparatif">
        <base-widget
            componentRoute="Hero/HeroTile.vue"
            widgetClass="infos"
        />
    </div>
</template>

<script>
import BaseWidget from '../components/BaseWidget.vue'

export default {
  name: 'heroComparatif',
  components: {
    BaseWidget
  } 
}
</script>
