<template>
  <div class="hero-tips">
    <p>" {{ tips[count % tips.length] }} "</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tips: [],
    }
  },
  props: {
    count: Number,
    championData: {
      type: Object,
      isRequired: true
    }
  },
  created: function () {
    this.tips = this.championData.ally_tips.concat(this.championData.enemy_tips)
  }
}
</script>
