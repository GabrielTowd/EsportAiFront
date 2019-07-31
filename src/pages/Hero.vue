<template>
  <div class="hero">
    <base-widget 
      :hasHeader='true'
      headerValue='Astuces'
      :hasHeaderNav='true'
      componentRoute='HeroTips.vue'
      :data='this.tipsData'
      widgetClass='tips'
    />
  </div>
</template>

<script>
import BaseWidget from '../components/BaseWidget.vue'

export default {
  name: 'hero',
  components: {
    BaseWidget
  },
  data: function () {
    return {
      tipsData: {
        allytips: [
          "Avoid engaging in a fight with low health unless your Blood Well is full so that you regain enough health to continue fighting.",
          "Building Life Steal can be very potent on Aatrox to help compensate for his health costs.",
          "Massacre is great at turning the tide of a battle. Make sure to use it at the right moment to maximize its benefits."
        ],
        enemytips:[
          "When Aatrox takes fatal damage he is healed for the amount currently in his resource bar, landing a fatal blow on him while the resource bar is low will result in him reviving with a lower amount of Health.",
          "When Aatrox casts Dark Flight towards your location, avoid being knocked up by moving away from the center of impact.",
          "Aatrox is auto attack reliant for most of his damage and survivability, reducing his attack speed by purchasing Randuin's Omen or Frozen Heart can help reduce both of those components greatly."
        ]
      }
    }
  }
  
}
</script>
