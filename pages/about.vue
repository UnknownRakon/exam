<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-card class="mx-auto my-3" max-width="1200">
        <v-card-text>
          <v-row align="center" class="mx-0 my-5">
            <div class="grey--text ms-4" v-html="about.text" />
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'AboutPage',
  computed: {
    about() {
      return this.$store.getters.ABOUT
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$store.dispatch('GET_ABOUT')
    },
  },
}
</script>
