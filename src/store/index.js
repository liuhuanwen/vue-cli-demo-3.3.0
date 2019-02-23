import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createPersiste from 'vue-savedata'

Vue.use(Vuex);

const state = {
  count: 0,
  user: {
    username: ''
  },
  userId: 0,
  toast: {
    message: '',
    isShow: false
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersiste()]
})
