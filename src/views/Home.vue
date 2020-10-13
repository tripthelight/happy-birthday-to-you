<template>
  <div class="home">
    <div class="myWrap">
      <button @click="myPage">click</button>
    </div>
    <div class="btnWrap">
      <button @click="signOut">
        <svg viewBox="0 0 512 512">
          <g>
            <g>
              <path d="M255.15,468.625H63.787c-11.737,0-21.262-9.526-21.262-21.262V64.638c0-11.737,9.526-21.262,21.262-21.262H255.15
                c11.758,0,21.262-9.504,21.262-21.262S266.908,0.85,255.15,0.85H63.787C28.619,0.85,0,29.47,0,64.638v382.724
                c0,35.168,28.619,63.787,63.787,63.787H255.15c11.758,0,21.262-9.504,21.262-21.262
                C276.412,478.129,266.908,468.625,255.15,468.625z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M505.664,240.861L376.388,113.286c-8.335-8.25-21.815-8.143-30.065,0.213s-8.165,21.815,0.213,30.065l92.385,91.173H191.362c-11.758,0-21.262,9.504-21.262,21.262c0,11.758,9.504,21.263,21.262,21.263h247.559l-92.385,91.173c-8.377,8.25-8.441,21.709-0.213,30.065c4.167,4.21,9.653,6.336,15.139,6.336c5.401,0,10.801-2.041,14.926-6.124l129.276-127.575c4.04-3.997,6.336-9.441,6.336-15.139C512,250.302,509.725,244.88,505.664,240.861z"/>
            </g>
          </g>
          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
        <span>Sign Out</span>
      </button>
    </div>
    <div>
      {{ JSON.stringify($store.state.claims, null, 2) }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      valid: false
    }
  },
  methods: {
    async signOut () {
      this.$Progress.start()
      await this.$firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('로그아웃 됨')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      })
    },
    myPage () {
      this.$router.push({ path: 'MyPage' })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 0;
  box-sizing: border-box;
  .myWrap {
    position: fixed;
    right: 24px;
    top: 24px;
    width: 24px;
    height: 24px;
    z-index: 900;
    button {
      width: 24px;
      height: 24px;
      background-color: #fff;
      color: #000;
      border: 0 none;
    }
  }
  .btnWrap {
    position: relative;
    display: block;
    padding: 90px 0 0 0;
    button {
      position: relative;
      width: 100%;
      display: block;
      padding: 13px 0;
      text-align: center;
      border: 0 none;
      background-color: #e9e9e9;
      border-radius: 4px;
      box-sizing: border-box;
      svg {
        position: absolute;
        left: 0;
        top: 50%;
        width: 24px;
        height: 24px;
        margin-top: -12px;
        left: 20px;
      }
      span {
        display: block;
        padding: 0;
        margin: 0;
        text-align: center;
        font-size: 14px;
        padding: 0 0 0 20px;
        color: #555;
      }
      &:active {
        background-color: #e0e0e0;
      }
    }
  }
}
</style>
