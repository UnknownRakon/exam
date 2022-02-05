<template>
  <v-row dense>
    <v-col v-for="sale in array" :key="sale.id" class="d-inline">
      <v-card
        v-if="sale.type == 'car'"
        class="mx-auto my-3"
        width="400"
        height="1000"
      >
        <v-img src="/car.png"></v-img>
        <v-card-title class="px-8">{{ sale.model }}</v-card-title>
        <v-card-text>
          <div class="px-8 mb-2 text-subtitle-1">{{ sale.car_type }}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-title class="px-8">{{ sale.price }}</v-card-title>
        <v-card-text>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Телефон</v-list-item-title>
              <v-list-item-subtitle>{{ sale.phone }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Город</v-list-item-title>
              <v-list-item-subtitle>{{ sale.city }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Адресс</v-list-item-title>
              <v-list-item-subtitle>{{ sale.address }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Объём двигателя</v-list-item-title>
              <v-list-item-subtitle>{{
                sale.engine_volume
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Мощность</v-list-item-title>
              <v-list-item-subtitle>{{
                sale.engine_power
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
      <v-card
        v-if="sale.type == 'apartment'"
        class="mx-auto my-3"
        width="400"
        height="1000"
      >
        <v-img src="/home.png"></v-img>
        <v-card-title class="px-8">{{ sale.address }}</v-card-title>
        <v-card-text>
          <div class="px-8 mb-2 text-subtitle-1">{{ sale.city }}</div>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-title class="px-8">{{ sale.price }}</v-card-title>
        <v-card-text>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Телефон</v-list-item-title>
              <v-list-item-subtitle>{{ sale.phone }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Количество комнат</v-list-item-title>
              <v-list-item-subtitle>{{ sale.rooms }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Площадь</v-list-item-title>
              <v-list-item-subtitle>{{ sale.square }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'VueSales',
  props: ['sales'],
  data() {
    return {
      array: this.sales,
    }
  },
}
</script>
