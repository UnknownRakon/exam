<template>
  <v-container fluid>
    <v-btn v-if="!load" elevation="2" @click="show">Показать форму</v-btn>
    <vue-form v-if="form" @add="fetchData" />
    <vue-loader v-if="load" />
    <vue-sales v-else :sales="sales" />
  </v-container>
</template>

<script>
import VueLoader from '../components/Loader.vue'
import VueSales from '../components/Sale.vue'
import VueForm from '../components/VueForm.vue'

export default {
  name: 'ArticlesPage',
  components: { VueLoader, VueSales, VueForm },
  data() {
    return { load: true, form: false }
  },
  computed: {
    sales() {
      return this.$store.getters.SALES
    },
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      await this.$store.dispatch('GET_SALES')
      this.load = false
    },
    show() {
      this.form = !this.form
    },
  },
}
</script>
