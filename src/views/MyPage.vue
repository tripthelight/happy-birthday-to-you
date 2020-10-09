<template>
  <div class="myPage">
    <button @click="btnBack">뒤로가기</button>
    <h1>My Page</h1>
    <div class="imgBlock">
      <img :src="$store.state.user.photoURL" alt="">
    </div>
    <div class="nameBlock">
      {{ $store.state.user.displayName }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyPage',
  methods: {
    btnBack () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss" scoped>
.myPage {
  position: relative;
  padding: 0;
  box-sizing: border-box;
  .imgBlock {
    width: 32px;
    height: 32px;
    border: 1px solid #FF0000;
  }
}
</style>
