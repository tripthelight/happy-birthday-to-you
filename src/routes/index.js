import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Home.vue'
import About from '../views/About.vue'
import Notes from '../views/lectures/Notes.vue'
import Sign from '../views/Sign.vue'
import E404 from '../views/e404.vue'

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
    },
    {
      path: '/Notes',
      component: Notes
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/*',
      component: E404
    }
  ]
})
