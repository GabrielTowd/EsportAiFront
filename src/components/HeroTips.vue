<template>
  <div class="content">
    <p>" {{ data.allytips[count % data.allytips.length] }} "</p>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
    count: Number
  }
}
</script>
