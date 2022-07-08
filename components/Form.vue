<template>
    <div>
        <div>
            <v-form @submit.prevent="addTestToList">
                    <!-- <v-btn outlined class="mb-10" @click="show = !show">Скрыть форму</v-btn> -->
                    <v-text-field v-model="products"></v-text-field>

                    <v-btn outlined class="mb-10" style="margin-top: 20px; display: block;" type="submit">Отправить</v-btn>
            </v-form>
        </div>
        <!-- <div>
            <v-btn outlined class="mb-10">Показать форму</v-btn>
        </div> -->
    </div>
</template>

<script>
  export default {
    name: `Form`,
    data: () => ({
      show: true,
      products: ``,
    }),
    methods: {
        addTestToList(e) {
        this.$store.dispatch('createTest', {
            products: this.products,
        })
        this.products = ''
    },
    }
    // methods: {
    //     send: function (evt) {
    //         evt.preventDefault();
    //         this.$store.dispatch('SEND_FORM_DATA', {
    //                 products: this.products
    //             });
            
    //             this.products = ``
    //             this.$store.dispatch('GET_ORDERS_DATA');
    //         }
    //     },
    // computed: {
    //   form: function () {
    //     this.$store.dispatch('GET_FORM_DATA');
    //     return this.$store.getters.GET_FORM_DATA;
    //   }
    // }
  };
</script>