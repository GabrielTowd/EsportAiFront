<template>
  <table>
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
        <td>{{ vm.$store.state.stats[stat.replace(/\s/g, '')] }}</td>
        <td>{{ vm.$store.state.stats[stat.replace(/\s/g, '') + 'perlevel'] }}</td>
      </tr>
      <tr>
        <td>attack speed offset</td>
        <td>{{ vm.$store.state.stats.attackspeedoffset }}</td>
        <td>{{ vm.$store.state.stats.attackspeedperlevel }}</td>
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
        'attack damage'
      ]
    }
  }
}
</script>
