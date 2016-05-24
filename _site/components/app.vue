<template>
  <div class="container">
    <marker></marker>
  </div>
</template>

<script>
  import Marker from "./marker.vue";

  export default {
    components: {
      marker: Marker,
    }
  }
</script>

<style lang="sass">
  .flex {
    display: flex;
  }
  @for $i from 1 through 12 {
    .flex-#{$i} {
      flex: #{$i};
    }
  }
</style>
