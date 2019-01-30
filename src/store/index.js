import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT} from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    [INCREMENT](state, num) {
      state.count = state.count + num;
    }
  },
  actions: {

  }
})
