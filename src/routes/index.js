import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main
    },
    {
      path: '/About',
      component: About
    }
  ]
})
