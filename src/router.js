import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: App,
      children: [
        {
          path: '/login',
          component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
        },
        {
          path: '/aspect',
          component: () => import(/* webpackChunkName: "login" */ './components/AspectRatio.vue')
        },
        {
          path: '/about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    }
  ]
})
