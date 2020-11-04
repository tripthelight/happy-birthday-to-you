import App from './App.vue'

const router = App.$router
const meta = App.$meta()

export default (context) => {
  router.push(context.url)
  context.meta = meta
  return App
}
