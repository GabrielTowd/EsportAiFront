<template>
    <div class="hero-comparatif">
        <div class="flex">
          <base-widget
            componentRoute="Hero/HeroTile.vue"
            :championData="data[0]"
          />
          <base-widget
            headerValue="Comparatif des Héros"
            componentRoute="Hero/HeroTileComparaison.vue"
            :championData="data"
          />
          <base-widget
            componentRoute="Hero/HeroTile.vue"
            :championData="data[1]"
          />
        </div>
        <div class="flex">
          <base-widget
            headerValue="Stats"
            componentRoute="Hero/HeroStats.vue"
            :championData="data[0]"
          />
          <base-widget
            headerValue="Comparatif des stats"
            componentRoute="Hero/HeroStatsComparaison.vue"
            :championData="data"
          />
          <base-widget
            headerValue="Stats"
            componentRoute="Hero/HeroStats.vue"
            :championData="data[1]"
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
    ...mapGetters(['data'])
  }
}
</script>
