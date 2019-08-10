<template>
  <div class="objects">
    <div 
      v-for="(mode, key) in this.$store.state.recommended[this.count % this.$store.state.recommended.length].blocks" 
      :key="key"
      class="content"
    >
      <p>{{ mode.type }}</p>
      <div>
        <img 
          v-for="(object, objKey) in mode.items" 
          :key="objKey" 
          :src="vm.$store.state.baseUrl + 'img/item/' + object.id + '.png'" 
          alt="Recommended object"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: Number
  },
  data () {
    return {
      vm: this
    }
  }
}
</script>
