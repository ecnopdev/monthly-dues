import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import(/* webpackChunkName: "login" */ '../views/Checkout.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "login" */ '../views/Dashboard.vue')
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import(/* webpackChunkName: "login" */ '../views/Invoice.vue')
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import(/* webpackChunkName: "login" */ '../views/Review.vue')
  },
  {
    path: '/success',
    name: 'Success',
    component: () => import(/* webpackChunkName: "login" */ '../views/Success.vue')
  },
  {
    path: '/viewpdf',
    name: 'View PDF',
    component: () => import(/* webpackChunkName: "login" */ '../views/ViewPDF.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
