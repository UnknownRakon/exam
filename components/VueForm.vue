<template>
  <div>
    <v-form v-if="loaded">
      <v-select
        v-model="type"
        :items="fields.fields.type.values"
        :rules="[(v) => !!v || 'Item is required']"
        :label="fields.fields.type.title"
        required
      ></v-select>
      <v-select
        v-model="city"
        :items="fields.fields.city.values"
        :rules="[(v) => !!v || 'Item is required']"
        :label="fields.fields.city.title"
        required
      ></v-select>
      <v-text-field
        v-model="address"
        :label="fields.fields.address.title"
        required
      ></v-text-field>
      <v-text-field
        v-model="phone"
        :label="fields.fields.phone.title"
        required
      ></v-text-field>
      <v-text-field
        v-model="price"
        :label="fields.fields.price.title"
        required
      ></v-text-field>
      <div v-if="type == 'car'">
        <v-text-field
          v-model="model"
          :label="fields.reference_fields['type.car'].model.title"
          required
        ></v-text-field>
        <v-select
          v-model="car_type"
          :items="fields.reference_fields['type.car'].car_type.values"
          :rules="[(v) => !!v || 'Item is required']"
          :label="fields.reference_fields['type.car'].car_type.title"
          required
        ></v-select>
        <v-text-field
          v-model="engine_volume"
          :label="fields.reference_fields['type.car'].engine_volume.title"
          required
        ></v-text-field>
        <v-text-field
          v-model="engine_power"
          :label="fields.reference_fields['type.car'].engine_power.title"
          required
        ></v-text-field>
      </div>
      <div v-if="type == 'apartment'">
        <v-text-field
          v-model="rooms"
          :label="fields.reference_fields['type.apartment'].rooms.title"
          required
        ></v-text-field>
        <v-text-field
          v-model="square"
          :label="fields.reference_fields['type.apartment'].square.title"
          required
        ></v-text-field>
      </div>
      <v-btn class="mr-4" @click="validate"> Провалидировать </v-btn>

      <v-btn class="mr-4" :disabled="invalid" @click="submit">
        Отправить
      </v-btn>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'VueForm',
  props: ['getdata'],
  data() {
    return {
      fields: {},
      loaded: false,
      type: '',
      city: '',
      address: '',
      phone: '',
      price: '',
      model: '',
      car_type: '',
      engine_volume: '',
      engine_power: '',
      rooms: '',
      square: '',
      invalid: true,
      getSales: this.getdata,
    }
  },
  beforeMount() {
    this.getForms()
  },
  methods: {
    validate() {
      if (
        (this.type !== '',
        this.city !== '',
        this.address !== '',
        this.phone !== '',
        this.price !== '')
      ) {
        this.invalid = false
      }
    },
    async submit() {
      const formData = new FormData()
      formData.append('type', this.type)
      formData.append('city', this.city)
      formData.append('address', this.address)
      formData.append('phone', this.phone)
      formData.append('price', this.price)

      if (this.type === 'car') {
        formData.append('model', this.model)
        formData.append('car_type', this.car_type)
        formData.append('engine_volume', this.engine_volume)
        formData.append('engine_power', this.engine_power)
      } else if (this.type === 'apartment') {
        formData.append('rooms', this.rooms)
        formData.append('square', this.square)
      }

      await this.$axios
        .create({
          baseURL: 'https://demo-api.vsdev.space/',
          headers: { 'Content-Type': 'application/json' },
        })
        .post('/api/brom/sales', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log(res.data)
          this.$emit('add')
        })
      this.clear()
    },
    clear() {
      this.type = ''
      this.city = ''
      this.address = ''
      this.phone = ''
      this.price = ''
      this.model = ''
      this.car_type = ''
      this.engine_volume = ''
      this.engine_power = ''
      this.rooms = ''
      this.square = ''
    },

    async getForms() {
      await fetch('https://demo-api.vsdev.space/api/brom/sales/form', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
        .then((res) => {
          return res.json()
        })
        .then(
          (result) => {
            this.fields = result
            this.loaded = true
          },
          (error) => {
            console.log(error)
          }
        )
    },
  },
}
</script>

<style></style>
