<template>
  <div id="app">
    <!-- <Header /> -->
    <div id="container">
      <!-- <router-link to="/">main</router-link>
      <router-link to="/About">about</router-link> -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Header from './components/Header'
export default {
  name: 'app',
  components: {
    // Header
  }
}
</script>

<style scoped lang="scss">
#container {
  padding: 0 0 0 0;
  box-sizing: border-box;
}
</style>
