import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '/login',
          component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
        },
        {
          path: '/aspect',
          component: () => import(/* webpackChunkName: "login" */ '../components/aspectRatio.vue')
        },
        {
          path: '/about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
        }
      ]
    }
  ]
})
