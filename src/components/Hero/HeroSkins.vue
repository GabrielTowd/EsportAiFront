<template>
  <div class="hero-skins">
    <img 
      alt="Champion skin" 
      v-for="(item, key) in this.skinUrls[count % this.skinUrls.length]" 
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
  props: {
    count: Number,
    championData: {
      type: Object,
      isRequired: true
    }
  },
  mounted: function () {
    const vm = this
    const store = vm.championData
    let skinCount = 0
    let skinSubArray = []
    store.skins.forEach(skin => {
      let skinUrl = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${store.name}_${skin.num}.jpg`
      if (skinCount % 4 === 0 && skinCount !== 0) {
        vm.skinUrls.push(skinSubArray)
        skinSubArray = []
        skinSubArray.push(skinUrl)
      } else skinSubArray.push(skinUrl)
      skinCount++
      if (skinCount === store.skins.length) vm.skinUrls.push(skinSubArray)
    })
  } 
}
</script>
