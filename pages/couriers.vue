<template>
  <v-row>
    <v-col class="d-flex align-stretch justify-md-space-around flex-wrap">
      <v-card v-for="c in couriers" :key="c.id" :c="c" outlined shaped>
        <v-card-title> Курьер {{ c.id }} </v-card-title>
        <v-card-text>Имя: {{ c.name }} </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'couriers',
  data: () => ({
    couriers : []
  }),
  async mounted() {
		this.couriers = await this.$axios.$get('http://127.0.0.1:8000/api/courier/');
    this.couriers = this.couriers.results;
		console.log(this.couriers.results);
	},
}
</script>

<style>

</style>