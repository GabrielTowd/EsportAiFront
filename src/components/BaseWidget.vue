<template>
  <div class="widget">
    <div class="header" v-if="hasHeader">
      <h2>{{ headerValue }}</h2>
    </div>
    <component
      :is='currentComponent'
      v-bind:data='currentData'
    ></component>
  </div>
</template>

<script>
export default {
  props: {
    hasHeader: Boolean,
    headerValue: String,
    componentRoute: {
      type: String,
      isRequired: true
    },
    data: {
      type: Object,
      isRequired: true
    }
  },
  computed: {
    currentComponent: function () {
      return () => import(`./${this.componentRoute}`)
    },
    currentData: function () {
      return this.data
    }
  }
}
</script>
