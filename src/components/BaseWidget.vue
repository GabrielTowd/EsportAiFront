<template>
  <div class="widget">
    <div class="header" v-if="headerValue">
      <h2>{{ headerValue }}</h2>
      <div v-if="hasHeaderNav">
        <img src="../assets/img/arrow-left.svg" v-on:click="count--">
        <img src="../assets/img/ellipse.svg">
        <img src="../assets/img/arrow-right.svg" v-on:click="count++">
      </div>
    </div>
    <component
      :is='currentComponent'
      v-bind:count='count'
      v-bind:championData='championData'
    ></component>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  props: {
    headerValue: String,
    hasHeaderNav: {
      type: Boolean,
      default: false
    },
    componentRoute: {
      type: String,
      isRequired: true
    },
    championData: {
      type: [Object, Array],
      isRequired: true
    }
  },
  computed: {
    currentComponent: function () {
      return () => import(`./${this.componentRoute}`)
    }
  }
}
</script>
