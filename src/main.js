import Vue from 'vue'
import app from './app'
import './style/global.css'
import store from './store'
import router from './router'

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(app)
}).$mount('#app');
