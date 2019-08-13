<template>
  <div class="hero-tile">
    <div class="top">
      <div class="pic">
        <!-- <div class="rank">1</div> -->
        <img
          :src="`${this.$store.state.dataDragonBaseUrl}/img/champion/${this.championData.name}.png`"
          alt="Hero pic square"
          class="hero-pic"
        >
      </div>
      <div>
        <h2>{{ this.championData.name }}</h2>
        <h3>{{ this.championData.title }}</h3>
        <p>
          <span :key="key" v-for="(role, key) in this.championData.tags">{{ role }}</span>
        </p>
      </div>
    </div>
    <div class="stats">
      <div :key="key" v-for="(stat, key) in this.stats">
        <p class="label">{{stat[0]}}</p>
        <p class="value">
          {{ vm.championData.infos[stat[1]] }}
          <span v-if="key === 0">/5</span>
        </p>
      </div>
    </div>
    <div class="see-more">Voir le hero</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      vm: this,
      stats: [
        ["Dificulté", "difficulty"],
        ["Attaque", "attack"],
        ["Defense", "defense"],
        ["Magie", "magic"]
      ]
    };
  },
  props: {
    rankPosition: String,
    championData: {
      type: Object,
      isRequired: true
    }
  }
};
</script>
