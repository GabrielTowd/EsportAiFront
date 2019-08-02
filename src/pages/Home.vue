<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <hero heroName="Aatrox"></hero>
  </div>
</template>


<script>
import Hero from './Hero.vue'
import Search from '../components/SearchInput.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Search
  }
}
</script>