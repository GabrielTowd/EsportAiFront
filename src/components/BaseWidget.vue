<template>
  <div class="widget" :class="widgetClass" >
    <div class="header" v-if="hasHeader">
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
    hasHeader: {
      type: Boolean,
      default: false
    },
    headerValue: String,
    hasHeaderNav: {
      type: Boolean,
      default: false
    },
    widgetClass: String,
    componentRoute: {
      type: String,
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
