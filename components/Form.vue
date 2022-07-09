<template>
  <div>
    <v-form @submit.prevent="addCustomer">
      <h2>Добавить покупателя:</h2>
      <v-text-field v-model="name"></v-text-field>
      <v-text-field v-model="middlename"></v-text-field>
      <v-text-field v-model="surname"></v-text-field>
      <v-text-field v-model="email"></v-text-field>
      <v-text-field v-model="phone"></v-text-field>
      <v-text-field v-model="address"></v-text-field>
      <v-btn outlined class="mb-10" type="submit">Отправить</v-btn>
    </v-form>
  </div>
</template>

<script>
  export default {
    name: 'Form',
    data: () => ({
      name: '',
      middlename: '',
      surname: '',
      email: '',
      phone: '',
      address: '',
    }),
    methods: {
        addCustomer(e) {
        this.$store.dispatch('createOrder', {
            name: this.name,
            middlename: this.middlename,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            address: this.address,
        })
        this.name = ''
      },
    }
  };
</script>