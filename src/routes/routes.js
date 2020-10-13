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

// const levelCheck = (to, from, next) => {
//   if (!store.state.user) return next('/Sign')
//   if (!store.state.claims) return next('/UserProfile')
//   next()
// }

const adminCheck = (to, from, next) => {
  if (!store.state.user) {
    if (to.path !== '/Sign') return next('/Sign')
  } else {
    if (!store.state.user.emailVerified) return next('/UserProfile')
    if (store.state.claims.level > 0) throw Error('관리자만 들어갈 수 있습니다.')
  }
  next()
}
const userCheck = (to, from, next) => {
  if (!store.state.user) {
    if (to.path !== '/Sign') return next('/Sign')
  } else {
    if (!store.state.user.emailVerified) return next('/UserProfile')
    if (store.state.claims.level > 0) throw Error('사용자만 들어갈 수 있습니다.')
  }
  next()
}
const guestCheck = (to, from, next) => {
  if (!store.state.user) {
    if (to.path !== '/Sign') return next('/Sign')
  } else {
    // if (!store.state.user.emailVerified) return next('/UserProfile')
    // if (store.state.claims.level > 0) throw Error('손님만 들어갈 수 있습니다.')
    if (!store.state.user.emailVerified) {
      if (store.state.claims.level === 1 || store.state.claims.level === 2 || store.state.claims.level === undefined) {
        if (to.path !== '/UserProfile') return router.push('/UserProfile')
      }
    } else if (store.state.claims.level > 0) {
      throw Error('손님만 들어갈 수 있습니다.')
    }
  }
  next()
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Main,
      beforeEnter: guestCheck
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign,
      beforeEnter: (to, from, next) => {
        if (store.state.user) return next('/')
        next()
      }
    },
    {
      path: '/test/Lv0',
      component: () => import('../views/test/Lv0.vue'),
      beforeEnter: adminCheck
    },
    {
      path: '/test/Lv1',
      component: () => import('../views/test/Lv1.vue'),
      beforeEnter: userCheck
    },
    {
      path: '/test/Lv2',
      component: () => import('../views/test/Lv2.vue'),
      beforeEnter: guestCheck
    },
    {
      path: '/UserProfile',
      name: 'UserProfile',
      component: UserProfile,
      beforeEnter: (to, from, next) => {
        if (!store.state.user) return next('/Sign')
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
      path: '/*',
      component: E404
    }
  ]
})

const waitFirebase = () => {
  return new Promise((resolve, reject) => {
    let cnt = 0
    const tmr = setInterval(() => {
      if (store.state.firebaseLoaded) {
        clearInterval(tmr)
        resolve()
      } else if (cnt++ > 200) {
        clearInterval(tmr)
        reject(Error('네트워크에 문제가 있습니다.'))
      }
    }, 10)
  })
}

router.beforeEach((to, from, next) => {
  Vue.prototype.$Progress.start()
  // console.log('bf each')
  // if (store.state.firebaseLoaded) next()
  waitFirebase()
    .then(() => next())
    .catch(e => console.log(e))
})

router.afterEach((to, from) => {
  Vue.prototype.$Progress.finish()
  console.log('af each')
})

router.onError(e => {
  Vue.prototype.$Progress.finish()
  console.error(e)
})

export default router
