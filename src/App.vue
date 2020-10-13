<template>
  <div id="app">
    <!-- <Header /> -->
    <div id="container">
      <!-- <router-link to="/">main</router-link>
      <router-link to="/About">about</router-link> -->
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
      <!-- <div v-if="!$isFirebaseAuth">로딩중</div> -->
      <div v-if="!$store.state.firebaseLoaded">로딩중</div>
    </div>
    <!-- <p>{{ $store.state.user ? $store.state.user.displayName : '아직 로그인 안함' }}</p>
    <p>{{ $store.state.token ? $store.state.token : '아직 로그인 안함' }}</p> -->
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
