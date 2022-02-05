<template>
  <v-container>
    <v-row dense>
      <v-col cols="12">
        <vue-loader v-if="load" />
        <v-card class="mx-auto" color="secondary" width="200px">
          <v-img src="/left_widget_img.jpg"></v-img>
          <v-card-text>
            Объявления о продаже авто: {{ counts.cars }}
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="mx-auto" color="secondary" width="200px">
          <v-img src="/left_widget_img.jpg"></v-img>
          <v-card-text>
            Объявления о продаже квартир: {{ counts.apartments }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import VueLoader from '../components/Loader.vue'
export default {
  name: 'LeftWidget',
  components: { VueLoader },
  data() {
    return { load: true }
  },
  computed: {
    counts() {
      return this.$store.getters.COUNT
    },
  },
  mounted() {
    this.fetchCounts()
  },
  methods: {
    async fetchCounts() {
      await this.$store.dispatch('GET_COUNT')
      this.load = false
    },
  },
}
</script>

<style></style>
