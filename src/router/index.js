import Vue from 'vue'
import Router from 'vue-router'
import container from '../views/container'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: container,
      children: [
        {
          path: '/login',
          component: () => import(/* webpackChunkName: "login" */ '../views/login.vue')
        },
        {
          path: '/home',
          component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
          children: [
            {
              path: '/index',
              component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
            },
            {
              path: '/discovery',
              component: () => import(/* webpackChunkName: "discovery" */ '../views/discovery/discovery.vue'),
            },
            {
              path: '/order',
              component: () => import(/* webpackChunkName: "order" */ '../views/order/order.vue'),
            },
            {
              path: '/mine',
              component: () => import(/* webpackChunkName: "mine" */ '../views/mine/mine.vue'),
            }
          ]
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
