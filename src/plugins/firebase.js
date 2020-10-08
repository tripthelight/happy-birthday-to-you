import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import 'firebase/auth'
import 'firebase/firestore'
import store from '../store/store'
import router from '../routes/index'

firebase.initializeApp(firebaseConfig)
// firebase.analytics()

// firebase.firestore().collection('test').add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase
Vue.prototype.$isFirebaseAuth = false

firebase.auth().onAuthStateChanged((user) => {
  Vue.prototype.$isFirebaseAuth = true
  if (user) {
    // User is signed in.
    // router.push('/')
    router.push('/')
  } else {
    // No user is signed in.
    router.push('/Sign')
  }
  // console.log(user)
  // store.commit('setUser', user)
  store.dispatch('getUser', user)
})
