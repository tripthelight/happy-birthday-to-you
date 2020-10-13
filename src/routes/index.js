import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/store'
import Main from '../views/Home.vue'
import About from '../views/About.vue'
import Notes from '../views/lectures/Notes.vue'
import Sign from '../views/Sign.vue'
import Axios from '../views/lectures/Axios.vue'
import Vuex from '../views/lectures/Vuex.vue'
import MyPage from '../views/MyPage.vue'
import UserProfile from '../views/UserProfile.vue'
import E404 from '../views/e404.vue'

Vue.use(VueRouter)

const levelCheck = (to, from, next) => {
  if (store.state.claims.level === undefined) next('/UserProfile')
  next()
}

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      beforeEnter: levelCheck
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
      path: '/MyPage',
      name: 'MyPage',
      component: MyPage
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile
    },
    {
      path: '/*',
      component: E404
    }
  ]
})

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  console.log('bf each')
  if (store.state.firebaseLoaded) next()
})
router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
  console.log('af each')
})

export default router
