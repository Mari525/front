import Vue from "vue";
import Vuex from "vuex";
import {ApiRoutes, createApi} from "./api";

const api = createApi();

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    orders: [],
    // form: {},
  },
  mutations: {
    SET_ORDERS(state, payload) {
      state.orders = payload;
    },
    // SET_FORM(state, payload) {
    //   state.form = payload;
    // }
    // addTests(state, orders) {
    //   state.orders = orders.filter(el => state.orders.findIndex(x => x.id == el.id) == -1).concat(state.orders);
    // },
  },
  actions: {
    GET_ORDERS_DATA({commit}) {
      if (this.state.orders.length === 0) {
        api.get(ApiRoutes.GET_ORDERS)
        .then(({data}) => {
          commit('SET_ORDERS', data);
        })
        .catch((err) => {
          console.log(err);
        })
      }
    },
  async createTest(context, payload) {
      const res = await this.$axios.$post(
        'http://127.0.0.1:8000/api/order/', payload
      )
        .catch(function (error) {
          if (error.response) {
            // console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
  
      console.log(payload, res)
      // context.commit('addTests', [res])
    },
  },
  //   GET_FORM_DATA({commit}) {
  //     if (Object.keys(this.state.form).length === 0) {
  //       api.get(ApiRoutes.GET_FORM)
  //       .then(({data}) => {
  //         commit('SET_FORM', data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //     }
  //   },
  //   SEND_FORM_DATA({commit}, {products}) {
  //     let payload = new FormData();
  //     payload.append("products", products);

  //     new api.post(ApiRoutes.ADD_ORDER, payload)
  //     .then((res) => {
  //     })
  //     .catch((err) => console.log(err));

  //     api.get(ApiRoutes.GET_ORDERS)
  //       .then(({data}) => {
  //         commit('SET_ORDERS', data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       })
  //   }
  // },
  modules: {},
  getters: {
    GET_ORDERS_DATA: state => state.orders,
    // GET_FORM_DATA: state => state.form,
  }
})