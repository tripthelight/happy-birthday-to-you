import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Home.vue'
import About from '../views/About.vue'
import Notes from '../views/lectures/Notes.vue'
import Sign from '../views/Sign.vue'
import Axios from '../views/lectures/Axios.vue'
import Vuex from '../views/lectures/Vuex.vue'
import E404 from '../views/e404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      beforeEnter: (to, from, next) => {
        console.log('bf enter')
        next()
      }
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
      path: '/Axios',
      name: 'Axios',
      component: Axios
    },
    {
      path: '/Vuex',
      name: 'Vuex',
      component: Vuex
    },
    {
      path: '/*',
      component: E404
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  // setTimeout(() => {
  //   console.log('bf each')
  //   if (Vue.prototype.$isFirebaseAuth) next()
  // }, 2000)
  console.log('bf each')
  if (Vue.prototype.$isFirebaseAuth) next()
})
router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
  console.log('af each')
})

export default router
