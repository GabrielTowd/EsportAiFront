<template>
  <div>
    <div class="search-page">
      <search></search>
    </div>
    <hero rankPosition="1"></hero>
  </div>
</template>


<script>
import Hero from './HeroComparatif.vue'
import Search from '../components/SearchInput.vue'

export default {
  name: 'app',
  components: {
    Hero,
    Search
  }
}
</script>