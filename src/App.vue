<template>
  <div id="app">
    <gnb />
    <div id="container">
      <!-- <router-link to="/">main</router-link>
      <router-link to="/About">about</router-link> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Gnb from './components/Gnb/Gnb'
export default {
  name: 'app',
  components: {
    Gnb
  }
}
</script>

<style scoped lang="scss">
#container {
  padding: 48px 0 0 0;
  box-sizing: border-box;
}
</style>
