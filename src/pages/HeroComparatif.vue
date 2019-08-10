<template>
    <div class="hero-comparatif">
        <base-widget
            componentRoute="Hero/HeroTile.vue"
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
