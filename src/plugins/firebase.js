import * as firebase from 'firebase/app'
import firebaseConfig from '../../firebaseConfig'
// import 'firebase/auth'
import 'firebase/firestore'

// const firebaseConfig = {
//   apiKey: 'AIzaSyC5n3ad70itoQE-u6PeryWoXUa86qysyAA',
//   authDomain: 'happybirthdaytoyou-e8bdc.firebaseapp.com',
//   databaseURL: 'https://happybirthdaytoyou-e8bdc.firebaseio.com',
//   projectId: 'happybirthdaytoyou-e8bdc',
//   storageBucket: 'happybirthdaytoyou-e8bdc.appspot.com',
//   messagingSenderId: '605165473630',
//   appId: '1:605165473630:web:cfe065b0a9b17021de09cf',
//   measurementId: 'G-GKMYZFYLE8'
// }

firebase.initializeApp(firebaseConfig)
// firebase.analytics()

firebase.firestore().collection('test').add({ test: 'aaa' })
  .then(r => console.log(r))
  .catch(e => console.error(e))
