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
  },
  created: function () {
    this.tips = this.$store.state.allytips.concat(this.$store.state.enemytips)
  }
}
</script>
