<template>
  <v-container>
    <!-- <v-row> -->
      <!-- <Form /> -->
    <!-- </v-row> -->
    <v-row>
      <v-col class="d-flex align-stretch justify-md-space-around flex-wrap">
        <v-card class="mb-10 mr-2" width="300"
        v-for="order in orders" :key="order.id" outlined shaped>
          <v-card-title>Заказ {{ order.id }} </v-card-title>
          <v-card-text>Состав заказа: {{ order.products }} </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'index',
  // data: () => ({
  //   orders : []
  // }),
  // async mounted() {
	// 	this.orders = await this.$axios.$get('http://127.0.0.1:8000/api/order/');
  //   this.orders = this.orders.results;
	// 	console.log(this.orders.results);
	// },
  computed: {
    orders: function () {
      const empty = this.$store.getters.GET_ORDERS_DATA;
      this.$store.dispatch('GET_ORDERS_DATA');
      return this.$store.getters.GET_ORDERS_DATA;
      }
  }
}
</script>

<style>

</style>
