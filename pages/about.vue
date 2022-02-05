<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <vue-loader v-if="load" />
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
import VueLoader from '../components/Loader.vue'

export default {
  name: 'AboutPage',
  components: { VueLoader },
  data() {
    return { load: true }
  },
  computed: {
    about() {
      return this.$store.getters.ABOUT
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('GET_ABOUT')
      this.load = false
    },
  },
}
</script>
