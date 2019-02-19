import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, SAVE_MOBILE, SHOW_CAPTCHA, HIDE_CAPTCHA, GET_LOGIN_INFO} from "./mutation-types";
import {login} from "../api/userApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    user: {
      mobile: ''
    },
    isShowCaptcha: false
  },
  mutations: {
    [INCREMENT](state, num) {
      state.count = state.count + num;
    },
    [SAVE_MOBILE](state, mobile) {
      state.user = {
        mobile: mobile
      }
    },
    [SHOW_CAPTCHA](state) {
      state.isShowCaptcha = true;
    },
    [HIDE_CAPTCHA](state) {
      state.isShowCaptcha = false;
    },
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
