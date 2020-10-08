<template>
  <div class="sign">
    <h1>Sign</h1>
    <div class="btnWrap">
      <button @click="signInWithGoogle">
        <svg width="24px" height="24px" viewBox="0 0 533.5 544.3">
          <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
        </svg>
        <span>Sign in with Google</span>
      </button>
      <!-- <button @click="signOut">
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
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sign',
  data () {
    return {
      valid: false
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
    }
    // async signOut () {
    //   await this.$firebase.auth().signOut().then(() => {
    //     // Sign-out successful.
    //     console.log('로그아웃 됨')
    //   }).catch((error) => {
    //     // An error happened.
    //     console.log(error)
    //   })
    // }
  }
}
</script>

<style lang="scss" scoped>
.sign {
  position: relative;
  padding: 24px;
  box-sizing: border-box;
  .btnWrap {
    position: relative;
    display: block;
    padding: 20px 0 0 0;
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
