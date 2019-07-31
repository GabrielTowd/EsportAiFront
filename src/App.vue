<template>
  <div id="app">
    <base-widget 
      :hasHeader='true'
      headerValue='Sorts'
      componentRoute='test.vue'
      :data='this.someProperties'
    />
  </div>
</template>

<script>
import BaseWidget from './components/BaseWidget.vue'

export default {
  name: 'app',
  components: {
    BaseWidget
  },
  data: function () {
    return {
      someProperties: {
        test: 'toto',
        testdeux: 'tata'
      }
    }
  }
}
</script>

<style lang='scss'>
  @import './assets/style/style.scss';
</style>
