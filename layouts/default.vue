<template>
  <v-app dark>
    <v-container fluid>
      <v-app-bar color="green darken-4" class="d-flex">
        <h1 class="mr-16">Delivery</h1>
        <nuxt-link class="white--text text-button mr-5" to="/">
          Заказы
        </nuxt-link>
        <nuxt-link class="white--text text-button mr-5" to="/couriers">
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
      Мария Шерстнева, 201-321
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>
