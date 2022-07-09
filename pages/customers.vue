<template>
  <v-row>
    <Form />
    <v-col class="ml-10 d-flex align-stretch justify-md-space-around flex-wrap">
      <v-card class="mb-10 mr-2" width="300" 
      v-for="c in customers" :key="c.id" :c="c" outlined shaped>
        <v-card-title> Покупатель {{ c.id }} </v-card-title>
        <v-card-text>Имя: {{ c.name }} </v-card-text>
        <v-card-text>Отчество: {{ c.middlename }} </v-card-text>
        <v-card-text>Фамилия: {{ c.surname }} </v-card-text>
        <v-card-text>Email: {{ c.email }} </v-card-text>
        <v-card-text>Телефон: {{ c.phone }} </v-card-text>
        <v-card-text>Адрес: {{ c.address }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Form from "../components/Form";

export default {
  name: 'customers',
  data: () => ({
    customers : []
  }),
  async mounted() {
		this.customers = await this.$axios.$get('https://mari525.pythonanywhere.com/api/customer/');
		console.log(this.customers);
	},
}
</script>

<style>

</style>