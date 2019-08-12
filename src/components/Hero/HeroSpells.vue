<template>
  <div class="hero-spells">
    <div class="spells-details">
      <div v-for="(spell, key) in this.championData.spells" :key="key">
        <div class="top">
          <img :src="getKeyboardImgUrl(keyboardKeys[key])">
          <img :src="dataDragonBaseUrl + '/img/spell/' + spell.image.full" alt="Champion's abbility"/>
        </div>
        <h2>{{ spell.name }}</h2>
        <p class="description">{{ spell.description }}</p>
      </div>
      <div>
        <div class="top">
          <span>Passive</span>
          <img :src="dataDragonBaseUrl + '/img/passive/' + this.championData.passive.image.full" alt="Champion's passive"/>
        </div>
        <h2>{{ this.championData.passive.name }}</h2>
        <p class="description">{{ this.championData.passive.description }}</p>
      </div>
    </div>
    <img src="../../assets/img/arrow-down.svg" alt="See more button" class="see-more">
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data () {
    return {
      vm: this,
      keyboardKeys: ['Q', 'W', 'E', 'R']
    }
  },
  props: {
    championData: {
      type: Object,
      isRequired: true
    },
  },
  computed: {
    ...mapGetters(["dataDragonBaseUrl"])
  },
  methods: {
    getKeyboardImgUrl(keyboard) {
      var images = require.context('../../assets/img/', false, /\.svg$/)
      return images('./' + keyboard + ".svg")
    }
  }
}
</script>

