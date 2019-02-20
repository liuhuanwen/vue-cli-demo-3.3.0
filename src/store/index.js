import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, GET_LOGIN_INFO, SHOW_TOAST, SAVE_USER_ID} from "./mutation-types";
import {login} from "../api/userApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      mobile: '',
      userId: ''
    },
    toast: {
      message: '',
      isShow: false
    }
  },
  mutations: {
    [INCREMENT](state, num) {
      state.count = state.count + num;
    },
    [SHOW_TOAST](state, message) {
      state.toast = {message: message, isShow: true};
      setTimeout(() => {
        state.toast = {message: '', isShow: false};
      }, 2000)
    },
    [SAVE_USER_ID](state, userId) {
      state.user.userId = userId;
    }
  },
  actions: {
    async login({commit}, {username, password}) {
      let res = await login(username, password);
      commit(GET_LOGIN_INFO, res);
    }
  },
  getters: {
    totalCount: function (state) {
      return function (outerNum) {
        return state.count + outerNum;
      }
    }
  }
})
