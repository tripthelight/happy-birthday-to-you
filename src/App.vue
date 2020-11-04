<template>
  <div id="app">
    <!-- <Header /> -->
    <div id="container">
      <!-- <router-link to="/">main</router-link>
      <router-link to="/About">about</router-link> -->
      <router-view></router-view>
      <vue-progress-bar></vue-progress-bar>
      <!-- <div v-if="!$isFirebaseAuth">로딩중</div> -->
      <div class="lodingWrap loding" v-if="$store.state.loadState"><span>로딩중11</span></div>
      <div class="lodingWrap loadEnd" v-if="!$store.state.loadState"><span>로딩끝11</span></div>
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
#app {
  .lodingWrap {
    &.loding,
    &.loadEnd {
      position: fixed;
      z-index: 90000;
      top: 0;
      span {
        display: block;
        width: 100%;
        height: 20px;
        line-height: 20px;
        font-size: 20px;
      }
    }
    &.loding {
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(0,0,0,0.8);
      span {
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -10px 0 0 -50%;
        text-align: center;
        color: #FFF;
      }
    }
    &.loadEnd {
      right: 0;
      span {
        text-align: right;
        color: #000;
      }
    }
  }
}
</style>
