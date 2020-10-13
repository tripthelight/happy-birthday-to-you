import Vue from 'vue'
import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
import 'firebase/auth'
import 'firebase/firestore'
import store from '../store/store'
// import router from '../routes/routes'

firebase.initializeApp(firebaseConfig)
// firebase.analytics()

// firebase.firestore().collection('test').add({ test: 'aaa' })
//   .then(r => console.log(r))
//   .catch(e => console.error(e))

Vue.prototype.$firebase = firebase

firebase.auth().onAuthStateChanged((user) => {
  store.dispatch('getUser', user)
// .then(() => {
//   if (user) {
//     router.push('/')
//   } else {
//     router.push('/Sign')
//   }
// })
})
