import Vue from 'vue'
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  position: 'bottom'
})

Vue.toasted.register('error', (payload) => {
  return payload
}, {
  position: 'bottom-center',
  duration: 5000,
  action: {
    text: 'cancle',
    onClick: (e, toastObject) => {
      toastObject.goAway(0)
    }
  }
})
