<template>
  <table class="hero-stats">
    <thead>
      <tr>
        <td>Nom</td>
        <td>Base</td>
        <td>Aug./LVL</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(stat, key) in this.statsProperties" :key=key>
        <td>{{stat}}</td>
        <td v-if="vm.championData.stats[stat.replace(/\s/g, '')]">
          {{ vm.championData.stats[stat.replace(/\s/g, '')] }}
        </td>
        <td v-else>/</td>
        <td v-if="vm.championData.stats[stat.replace(/\s/g, '') + 'perlevel']">
          {{ vm.championData.stats[stat.replace(/\s/g, '') + 'perlevel'] }}
        </td>
        <td v-else>/</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      vm: this,
      statsProperties: [
        'hp',
        'mp',
        'move speed',
        'armor',
        'spell block',
        'attack range',
        'hp regen',
        'mp regen',
        'crit',
        'attack damage',
        'attack speed',
        'attack speed offset'
      ]
    }
  },
  props: {
    championData: {
      type: Object,
      isRequired: true
    }
  }
}
</script>
