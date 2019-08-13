<template>
    <div class="hero-comparatif">
        <div class="flex">
          <base-widget
            componentRoute="Hero/HeroTile.vue"
            :championData="currentChampion[0]"
          />
          <div></div>
          <base-widget
            componentRoute="Hero/HeroTile.vue"
            :championData="currentChampion[1]"
          />
        </div>
        <div class="flex">
          <base-widget
            componentRoute="Hero/HeroStats.vue"
            :championData="currentChampion[0]"
          />
          <div></div>
          <base-widget
            componentRoute="Hero/HeroStats.vue"
            :championData="currentChampion[1]"
          />
        </div>
    </div>
</template>

<script>
import BaseWidget from "../components/BaseWidget.vue"
import { mapGetters } from "vuex"

export default {
  name: "heroComparatif",
  components: {
    BaseWidget
  },
  computed: {
    ...mapGetters(['currentChampion'])
  }
}
</script>
