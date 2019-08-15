<template>
  <radar-chart :chartData="this.chartData" :options="this.options" :styles="myStyles"/>
</template>


<script>
import RadarChart from "../Chart/Radar.vue";

export default {
  data() {
    return {
      chartData: {},
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          defaultFontSize: 20
        }
      }
    };
  },
  props: {
    championData: {
      type: Array,
      isRequired: true
    }
  },
  components: {
    RadarChart
  },
  watch: {
    data: {
      handler(newVal) {
        if (newVal) this.data = newVal;
      }
    }
  },
  computed: {
    myStyles() {
      return {
        maxHeight: "25vh",
        position: "relative"
      };
    }
  },
  beforeMount() {
    let infosData = [];
    this.championData.forEach(hero => {
      let heroData = [];
      heroData.push(hero.infos.attack);
      heroData.push(hero.infos.defense);
      heroData.push(hero.infos.difficulty);
      heroData.push(hero.infos.magic);
      infosData.push(heroData);
    });
    this.chartData = {
      labels: ["Attaque", "Defense", "Difficulté", "Magie"],
      datasets: [
        {
          label: this.championData[0].name,
          data: infosData[0],
          backgroundColor: "rgba(255, 77, 77, .2)",
          borderColor: "rgba(255, 77, 77, 1)",
          borderWidth: 1,
          lineTension: 0
        },
        {
          label: this.championData[1].name,
          data: infosData[1],
          backgroundColor: "rgba(77, 125, 255, .2)",
          borderColor: "rgba(77, 125, 255, 1)",
          borderWidth: 1,
          lineTension: 0
        }
      ]
    };
  }
};
</script>
