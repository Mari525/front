<template>
  <div>
    <v-form @submit.prevent="addCustomer">
      <h2 class="mb-5">Добавить покупателя:</h2>
      <label>*Имя: <v-text-field v-model="name"></v-text-field></label>
      <label>Отчество: <v-text-field v-model="middlename"></v-text-field></label>
      <label>*Фамилия: <v-text-field v-model="surname"></v-text-field></label>
      <label>*Email: <v-text-field v-model="email"></v-text-field></label>
      <label>*Телефон: <v-text-field v-model="phone"></v-text-field></label>
      <label>*Адрес: <v-text-field v-model="address"></v-text-field></label>
      <p class="red">{{ error }}</p>
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
      error: ''
    }),
    methods: {
      addCustomer(e) {
        e.preventDefault();
        this.error = '';
        if (!this.name || !this.surname || !this.email || !this.phone || !this.address) {
          this.error = 'Заполните необходимые поля'
        }
        else {
          this.$store.dispatch('createOrder', {
            name: this.name,
            middlename: this.middlename,
            surname: this.surname,
            email: this.email,
            phone: this.phone,
            address: this.address,
        })
        this.name = '',
        this.middlename = '',
        this.surname = '',
        this.email = '',
        this.phone = '',
        this.address = ''
        }
      },
    }
  };
</script>