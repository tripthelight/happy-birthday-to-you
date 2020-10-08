import Vue from 'vue'
import App from './App.vue'
import './assets/global.css'
import router from './routes/index'
import store from './store/store'
import './plugins'
import '../error'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
