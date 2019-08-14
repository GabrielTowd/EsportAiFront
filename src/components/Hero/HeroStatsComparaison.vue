<template>
  <table class="hero-stats-comparaison">
    <thead>
      <tr>
        <td>{{ this.championData[0].name }}</td>
        <td>Base</td>
        <td>{{ this.championData[1].name }}</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(stat, key) in this.statsProperties" :key="key">
        <td>
          <p
            v-if="vm.statsDiff[key].isFirstChamp && vm.statsDiff[key].value !== 0"
          >+ {{vm.statsDiff[key].value}}</p>
          <p v-else>-</p>
          <p
            v-if="vm.statsDiff[key].isFirstChampPerLvl && vm.statsDiff[key].valuePerLvl !==0"
          >+ {{vm.statsDiff[key].valuePerLvl}}/lvl</p>
          <p v-else>-</p>
        </td>
        <td>{{ stat }}</td>
        <td>
          <p v-if="!vm.statsDiff[key].isFirstChamp">+ {{vm.statsDiff[key].value}}</p>
          <p v-else>-</p>
          <p v-if="!vm.statsDiff[key].isFirstChampPerLvl">+ {{vm.statsDiff[key].valuePerLvl}}/lvl</p>
          <p v-else>-</p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      vm: this,
      statsProperties: [
        "hp",
        "mp",
        "move speed",
        "armor",
        "spell block",
        "attack range",
        "hp regen",
        "mp regen",
        "crit",
        "attack damage",
        "attack speed",
        "attack speed offset"
      ],
      statsDiff: []
    };
  },
  props: {
    championData: {
      type: Array,
      isRequired: true
    }
  },
  created() {
    for (let i = 0; i < this.statsProperties.length; i++) {
      const championOne = this.championData[0].stats;
      const championTwo = this.championData[1].stats;
      const statProperty = this.statsProperties[i].replace(/\s/g, "");
      const statPerLvlProperty =
        this.statsProperties[i].replace(/\s/g, "") + "perlevel";

      const statOne = championOne[statProperty] ? championOne[statProperty] : 0;
      const statTwo = championTwo[statProperty] ? championTwo[statProperty] : 0;

      const statPerLvlOne = championOne[statPerLvlProperty]
        ? championOne[statPerLvlProperty]
        : 0;
      const statPerLvlTwo = championTwo[statPerLvlProperty]
        ? championTwo[statPerLvlProperty]
        : 0;

      let statComparaison = Math.round((statOne - statTwo) * 100) / 100;
      let statPerLvlComparaison =
        Math.round((statPerLvlOne - statPerLvlTwo) * 100) / 100;

      let propertyComparaison = {};

      if (statComparaison < 0) {
        statComparaison = -statComparaison;
        propertyComparaison.isFirstChamp = false;
      } else {
        propertyComparaison.isFirstChamp = true;
      }
      propertyComparaison.value = statComparaison;

      if (statPerLvlComparaison < 0) {
        statPerLvlComparaison = -statPerLvlComparaison;
        propertyComparaison.isFirstChampPerLvl = false;
      } else {
        propertyComparaison.isFirstChampPerLvl = true;
      }
      propertyComparaison.valuePerLvl = statPerLvlComparaison;

      this.statsDiff.push(propertyComparaison);
    }
  }
};
</script>
