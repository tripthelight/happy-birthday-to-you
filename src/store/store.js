import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '원래 제목',
    loadState: false,
    user: null,
    token: '',
    claims: null,
    firebaseLoaded: false,
    angSteDateMonth: 0,
    angSteDateDay: 0,
    monthSelect: 0,
    daySelect: 0,
    popBirthState: false
  },
  mutations: {
    setTitle (state, p) {
      state.title = p
    },
    setLoadState (state, getLoad) {
      state.loadState = getLoad
    },
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
    },
    setClaims (state, claims) {
      state.claims = claims
    },
    setFirebaseLoaded (state) {
      state.firebaseLoaded = true
    },
    setAngStateMonth (state, angSteDateMonth) {
      state.angSteDateMonth = angSteDateMonth
    },
    setAngStateDay (state, angSteDateDay) {
      state.angSteDateDay = angSteDateDay
    },
    setMonthSelect (state, monthSelect) {
      state.monthSelect = monthSelect
    },
    setDaySelect (state, daySelect) {
      state.daySelect = daySelect
    },
    setPopBirthState (state, popBirthState) {
      state.popBirthState = popBirthState
    }
  },
  actions: {
    async getUser ({ commit }, user) {
      commit('setFirebaseLoaded')
      commit('setUser', user)
      if (!user) return null
      const token = await user.getIdToken()
      commit('setToken', token)
      const { claims } = await user.getIdTokenResult()
      commit('setClaims', claims)

      return true
    }
  }
})
