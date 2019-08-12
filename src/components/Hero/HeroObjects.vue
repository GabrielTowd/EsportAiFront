<template>
  <div class="hero-objects">
    <div 
      v-for="(mode, key) in this.championData.recommended[this.count % this.championData.recommended.length].blocks" 
      :key="key"
      class="content"
    >
      <p>{{ mode.type }}</p>
      <div>
        <img 
          v-for="(object, objKey) in mode.items" 
          :key="objKey" 
          :src="dataDragonBaseUrl + '/img/item/' + object.id + '.png'" 
          alt="Recommended object"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data () {
    return {
      vm: this
    }
  },
  props: {
    count: Number,
    championData: {
      type: Object,
      isRequired: true
    }
  },
  computed: {
    ...mapGetters(["dataDragonBaseUrl"])
  }
}
</script>
