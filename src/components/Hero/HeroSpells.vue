<template>
  <div class="spells">
    <div class="spells-details">
      <div v-for="(spell, key) in this.$store.state.spells" :key="key">
        <div class="top">
          <img :src="getKeyboardImgUrl(keyboardKeys[key])">
          <img :src="vm.$store.state.baseUrl + 'img/spell/' + spell.image.full" alt="Champion's abbility"/>
        </div>
        <h2>{{ spell.name }}</h2>
        <p class="description">{{ spell.description }}</p>
      </div>
      <div>
        <div class="top">
          <span>Passive</span>
          <img :src="vm.$store.state.baseUrl + 'img/passive/' + this.$store.state.passive.image.full" alt="Champion's passive"/>
        </div>
        <h2>{{ this.$store.state.passive.name }}</h2>
        <p class="description">{{ this.$store.state.passive.description }}</p>
      </div>
    </div>
    <img src="../../assets/img/arrow-down.svg" alt="See more button" class="see-more">
  </div>
</template>

<script>
export default {
  data () {
    return {
      vm: this,
      keyboardKeys: ['Q', 'W', 'E', 'R']
    }
  },
  methods: {
    getKeyboardImgUrl(keyboard) {
      var images = require.context('../../assets/img/', false, /\.svg$/)
      return images('./' + keyboard + ".svg")
    }
  }
}
</script>

