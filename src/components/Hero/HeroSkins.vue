<template>
  <div>
    <img 
      alt="Champion skin" 
      v-for="(item, key) in this.skinUrls" 
      :src="item" 
      :key="key"
    >
  </div>
</template>

<script>
export default { 
  data () {
    return {
      skinUrls: []
    }
  },
  created: function () {
    const vm = this
    const store = vm.$store.state
    store.skins.forEach(skin => {
      let skinUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${store.name}_${skin.num}.jpg`
      vm.skinUrls.push(skinUrl)
    })
  } 
}
</script>
