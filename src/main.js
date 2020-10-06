import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import { router } from './routes/index.js'
import './plugins/firebase'
import './plugins/axios'
import '../error'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
