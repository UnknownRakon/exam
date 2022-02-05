<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <vue-loader v-if="load" />
      <v-card v-if="!load" class="mx-auto my-3" max-width="1200">
        <v-img height="500" :src="home.image"></v-img>
        <v-card-text>
          <v-row align="center" class="mx-0 my-5">
            <vue-loader v-if="load" />
            <div class="grey--text ms-4">{{ home.text }}</div>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import VueLoader from '../components/Loader.vue'
export default {
  name: 'ArticlesPage',
  components: { VueLoader },
  data() {
    return { load: true }
  },
  computed: {
    home() {
      return this.$store.getters.HOME
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('GET_HOME')
      this.load = false
    },
  },
}
</script>
