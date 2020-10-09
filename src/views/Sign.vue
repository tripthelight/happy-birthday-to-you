<template>
  <div class="sign">
    <h1>{{ swaplogin?'회원가입':'로그인' }}</h1>
    <!-- email password signin -->
    <div class="loginWrap">
      <Input-Basic iptTitle="EMAIL" iptType="text" />
      <Input-Basic iptTitle="PASSWORD" iptType="password" />
      <Input-Basic iptTitle="FIRST NAME" iptType="text" v-if="swaplogin" />
      <Input-Basic iptTitle="LAST NAME" iptType="text" v-if="swaplogin" />
      <Input-Date iptTitle="BIRTHDAY" iptType="date" v-if="swaplogin" />
    </div>

    <!-- login info -->
    <div class="bottomWrap">
      <div class="fromWrap">
        <div class="formBlock" v-if="!swaplogin">
          <input type="checkbox" id="loginSaveInfo" />
          <label for="loginSaveInfo">로그인 정보 저장</label>
        </div>
        <div class="btnJoin">
          <button @click="swapJoin">{{ swapTitle }}</button>
        </div>
      </div>
      <div class="btnLogin">
        <button>{{ swaplogin?'회원가입':'로그인' }}</button>
      </div>
    </div>

    <!-- Google login button -->
    <div class="btnLoginGoogle" v-if="!swaplogin">
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

    <!-- Facebook login button -->
    <div class="btnLoginFacebook" v-if="!swaplogin">
      <button @click="signInWithFacebook">
        <svg viewBox="0 0 300 300.00223" height="300.00223" width="300">
          <defs>
            <clipPath clipPathUnits="userSpaceOnUse" id="facebookID">
              <path d="M 0,500 1024,500 1024,0 0,0 0,500 Z" />
            </clipPath>
          </defs>
          <g transform="translate(-33.466291,-429.48076)">
            <g transform="matrix(1.1165523,0,0,-1.1165523,-103.48743,863.08638)">
              <g clip-path="url(#facebookID)">
                <g transform="translate(375.7163,120.5527)">
                  <path d="m 0,0 c 8.134,0 14.73,6.596 14.73,14.73 l 0,237.434 c 0,8.137 -6.596,14.731 -14.73,14.731 l -237.433,0 c -8.137,0 -14.73,-6.594 -14.73,-14.731 l 0,-237.434 c 0,-8.134 6.593,-14.73 14.73,-14.73 L 0,0 Z" style="fill:#3b5998;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                </g>
                <g transform="translate(307.7046,120.5527)">
                  <path d="m 0,0 0,103.355 34.693,0 5.194,40.28 -39.887,0 0,25.717 c 0,11.662 3.238,19.609 19.962,19.609 l 21.33,0.01 0,36.026 c -3.69,0.49 -16.351,1.587 -31.081,1.587 -30.753,0 -51.806,-18.771 -51.806,-53.244 l 0,-29.705 -34.781,0 0,-40.28 34.781,0 L -41.595,0 0,0 Z" style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" />
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span>Sign in with Facebook</span>
      </button>
    </div>

    <!-- Twitter login button -->
    <div class="btnLoginTwitter" v-if="!swaplogin">
      <button @click="signInWithTwitter">
        <svg viewBox="126.444 2.281 589 589">
          <circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"/>
          <path d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z" fill="#fff"/>
        </svg>
        <span>Sign in with Twitter</span>
      </button>
    </div>
  </div>
</template>

<script>
import InputBasic from '@/components/InputBasic.vue'
import InputDate from '@/components/InputDate.vue'

export default {
  name: 'Sign',
  components: {
    InputBasic,
    InputDate
  },
  data () {
    return {
      valid: false,
      swaplogin: false,
      swapTitle: '회원가입'
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
    },
    async signInWithFacebook () {
      const provider = new this.$firebase.auth.FacebookAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
    },
    async signInWithTwitter () {
      const provider = new this.$firebase.auth.TwitterAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
    },
    // async signOut () {
    //   await this.$firebase.auth().signOut().then(() => {
    //     // Sign-out successful.
    //     console.log('로그아웃 됨')
    //   }).catch((error) => {
    //     // An error happened.
    //     console.log(error)
    //   })
    // }
    swapJoin () {
      this.swaplogin = !this.swaplogin
      if (this.swaplogin) {
        this.swapTitle = '로그인'
      } else {
        this.swapTitle = '회원가입'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.sign {
  position: relative;
  padding: 24px;
  box-sizing: border-box;
  .loginWrap {
    position: relative;
    padding: 10px 0 0 0;
  }
  .btnLoginGoogle,
  .btnLoginFacebook,
  .btnLoginTwitter {
    position: relative;
    display: block;
    padding: 5px 0 0 0;
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
  .bottomWrap {
    margin: 20px 0 0 0;
    position: relative;
    .fromWrap {
      min-height: 22px;
      .formBlock {
        width: 100%;
      }
      .btnJoin {
        position: absolute;
        right: 0;
        top: 0;
        button {
          font-size: 12px;
          color: #1e90ff;
        }
      }
    }
    .btnLogin {
      width: 100%;
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
        &:active {
          background-color: #e0e0e0;
        }
      }
    }
  }
}
</style>
