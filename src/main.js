import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import { router } from './routes/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')