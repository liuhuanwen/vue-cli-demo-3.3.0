import Vue from 'vue'
import Vuex from 'vuex'
import {INCREMENT, GET_ALL_COUNTRY_LIST, GET_LOGIN_INFO} from "./mutation-types";
import {getAllCountryList} from '../api/itopApi';
import {login} from "../api/userCenterApi";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    countryList: [],
    user: {
      account: '',
      userId: 0,
      name: '',
      isMustChangePwd: 0
    }
  },
  mutations: {
    [INCREMENT](state, num) {
      state.count = state.count + num;
    },
    [GET_ALL_COUNTRY_LIST](state, res) {
      state.countryList = res;
    },
    [GET_LOGIN_INFO](state, res) {
      state.user = {
        account: res.account,
        userId: res.userId,
        name: res.userName,
        isMustChangePwd: res.toChangePassword
      }
    }
  },
  actions: {
    async getAllCountryList({commit}) {
      let res = await getAllCountryList();
      commit(GET_ALL_COUNTRY_LIST, res);
    },
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
