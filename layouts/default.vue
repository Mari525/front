<template>
  <v-app dark>
    <v-container fluid>
      <v-app-bar color="green darken-4" class="d-flex">
        <h1>Delivery</h1>
        <nuxt-link to="/">
          Заказы
        </nuxt-link>
        <nuxt-link to="/couriers">
          Курьеры
        </nuxt-link>
      </v-app-bar>
    </v-container>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer>
      (c) Мария Шерстнева, 201-321
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
