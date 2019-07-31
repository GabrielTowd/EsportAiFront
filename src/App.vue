<template>
  <div id="app">
    <hero></hero>
  </div>
</template>

<script>
import Hero from './pages/Hero.vue'

export default {
  name: 'app',
  components: {
    Hero
  }
}
</script>

<style lang='scss'>
  @import './assets/style/style.scss';
</style>
