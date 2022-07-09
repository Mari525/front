import Vue from "vue";
import Vuex from "vuex";
import {ApiRoutes, createApi} from "./api";

const api = createApi();

Vue.use(Vuex);

export default () => new Vuex.Store({
  state: {
    orders: [],
  },
  mutations: {
    SET_ORDERS(state, payload) {
      state.orders = payload;
    },
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
  async createOrder(payload) {
      const res = await this.$axios.$post(
        'https://mari525.pythonanywhere.com/api/customer/', payload
      )
        .catch(function (error) {
          if (error.response) {
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
    },
  },
  modules: {},
  getters: {
    GET_ORDERS_DATA: state => state.orders
  }
})