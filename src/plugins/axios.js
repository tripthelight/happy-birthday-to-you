import Vue from 'vue'
import axios from 'axios'

const firebaseAPI = axios.create({
  baseURL: 'http://localhost:5001/happybirthdaytoyou-e8bdc/us-central1',
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

firebaseAPI.interceptors.request.use(function (config) {
  config.headers.authorization = Math.random()
  return config
}, function (error) {
  return Promise.reject(error)
})

Vue.prototype.$axios = firebaseAPI
