<template>
  <v-row class="d-flex justify-center align-center loader">
    <v-progress-circular
      :size="70"
      :width="7"
      indeterminate
      color="primary"
    ></v-progress-circular>
  </v-row>
</template>

<script>
export default {
  name: 'VueLoader',
}
</script>
<style lang="scss">
.loader {
  padding: 10px;
  width: 100%;
  height: 400px;
  box-sizing: border-box;
}
</style>
