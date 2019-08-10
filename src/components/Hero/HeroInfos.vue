<template>
  <div class="hero-infos">
    <div class="back">
      <img src="../../assets/img/arrow-left.svg">
      <span @click="this.back">Retour</span>
    </div>
    <img :src="this.heroUrlPic" alt="Hero pic square" class="hero-pic">
    <h1>{{ this.$store.state.name }}</h1>
    <h2>{{ this.$store.state.title }}</h2>
    <div class="main-infos">
      <div class="role">
        <p class="label">Rôle</p>
        <p class="value">
          <span :key="key" v-for="(role, key) in this.$store.state.tags">{{ role }} </span>
        </p>
      </div>
      <div class="difficulty">
        <p class="label">Difficulté</p>
        <p class="value">{{ this.$store.state.info.difficulty }}/5</p>
      </div>
    </div>
    <div class="sub-infos">
      <div class="attack">
        <p class="label">Attaque</p>
        <p class="value">{{ this.$store.state.info.attack }}</p>
      </div>
      <div class="defense">
        <p class="label">Defense</p>
        <p class="value">{{ this.$store.state.info.defense }}</p>
      </div>
      <div class="magic">
        <p class="label">Magie</p>
        <p class="value">{{ this.$store.state.info.magic }}</p>
      </div>
    </div>
    <div class="history">
      <p class="label">Histoire du héro</p>
      <p class="content">{{ this.$store.state.blurb }}</p>
      <div class="see-more">
        <p>Lire la suite</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // GET VERSION DYNAMICALLY !
      heroUrlPic: `${this.$store.state.baseUrl}img/champion/${this.$store.state.name}.png`
    }
  },
  methods: {
    back: function () {
      this.$store.commit('toggleHasResult') 
      window.scrollTo(0,0)
    }
  }
}
</script>
