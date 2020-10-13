<template>
  <div class="sign">
    <h1>{{ swaplogin?'회원가입':'로그인' }}</h1>
    <!-- login -->
    <div class="loginWrap" v-if="!swaplogin">
      <Email-Login
        v-model="form.emailLogin"
        iptTitle="EMAIL"
        @chgEmailLoginRes="chgEmailLogin"
        @endStateResEmailLogin="esEmailLogin"
      />
      <Password-Login
        v-model="form.passwordLogin"
        iptTitle="PASSWORD"
        @chgPassLoginRes="chgPassLogin"
        @endStateResPassLogin="esPassLogin"
      />
    </div>

    <!-- Sign In -->
    <div class="signInWrap" v-if="swaplogin">
      <Email-Sign
        v-model="form.emailSign"
        iptTitle="EMAIL"
        @chgEmailSignRes="chgEmailSign"
        @endStateResEmailSign="esEmailSign"
      />
      <Password-Sign
        v-model="form.passwordSign"
        iptTitle="PASSWORD"
        @chgPassSignRes="chgPassSign"
        @endStateResPassSign="esPassSign"
      />
      <First-Name-Sign
        v-model="form.firstNameSign"
        iptTitle="FIRST NAME"
        @chgFirstNameSignRes="chgFirstNameSign"
        @endStateResFirstNameSign="esFirstNameSign"
      />
      <Last-Name-Sign
        v-model="form.lastNameSign"
        iptTitle="LAST NAME"
        @chgLastNameSignRes="chgLastNameSign"
        @endStateResLastNameSign="esLastNameSign"
      />
      <Birthday-Sign
        v-model="form.birthdaySign"
        iptTitle="BIRTHDAY"
        @chgBirthdaySignRes="chgBirthdaySign"
        @endStateResBirthdaySign="esBirthdaySign"
      />
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
      <div class="btnLogin" v-if="!swaplogin">
        <button :disabled="btnLogInDisabled" @click="signInWithEmailAndPassword">로그인</button>
      </div>
      <div class="btnSignIn" v-if="swaplogin">
        <button :disabled="btnSignInDisabled" @click="createWithEmailAndPassword">회원가입</button>
      </div>
    </div>

    <div v-if="!swaplogin && stateIOS">
      <!-- Apple login button -->
      <div class="btnLoginApple">
        <button @click="signInWithApple">
          <svg viewBox="0 0 1000 1187.198" id="appleLogo01" inkscape:version="0.91 r13725">
            <path d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z" id="path4" inkscape:connector-curvature="0" />
          </svg>
          <span>Login with Apple</span>
        </button>
      </div>
      <!-- Google login button -->
      <div class="btnLoginGoogle">
        <button @click="signInWithGoogle">
          <svg width="24px" height="24px" viewBox="0 0 533.5 544.3">
            <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
          </svg>
          <span>Login with Google</span>
        </button>
      </div>
    </div>
    <div v-if="!swaplogin && stateAndroid">
      <!-- Google login button -->
      <div class="btnLoginGoogle">
        <button @click="signInWithGoogle">
          <svg width="24px" height="24px" viewBox="0 0 533.5 544.3">
            <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
          </svg>
          <span>Login with Google</span>
        </button>
      </div>
      <!-- Apple login button -->
      <div class="btnLoginApple">
        <button @click="signInWithApple">
          <svg viewBox="0 0 1000 1187.198" id="appleLogo01" inkscape:version="0.91 r13725">
            <path d="m 979.04184,925.18785 c -17.95397,41.47737 -39.20563,79.65705 -63.82824,114.75895 -33.56298,47.8528 -61.04356,80.9761 -82.22194,99.3698 -32.83013,30.192 -68.00529,45.6544 -105.67203,46.5338 -27.04089,0 -59.6512,-7.6946 -97.61105,-23.3035 -38.08442,-15.5358 -73.08371,-23.2303 -105.08578,-23.2303 -33.56296,0 -69.55888,7.6945 -108.06101,23.2303 -38.5608,15.6089 -69.62484,23.7432 -93.37541,24.5493 -36.12049,1.5389 -72.1237,-14.3632 -108.06101,-47.7796 -22.93711,-20.0059 -51.62684,-54.3017 -85.99592,-102.8874 C 92.254176,984.54592 61.937588,924.38175 38.187028,855.7902 12.750995,781.70252 0,709.95986 0,640.50361 0,560.94181 17.191859,492.32094 51.626869,434.81688 78.689754,388.62753 114.69299,352.19192 159.75381,325.44413 c 45.06086,-26.74775 93.74914,-40.37812 146.18212,-41.25019 28.68971,0 66.3125,8.8744 113.06613,26.31542 46.62174,17.49964 76.55727,26.37404 89.68198,26.37404 9.8124,0 43.06758,-10.37669 99.4431,-31.06405 53.31237,-19.18512 98.30724,-27.12887 135.16787,-23.99975 99.8828,8.06098 174.92313,47.43518 224.82789,118.37174 -89.33023,54.12578 -133.51903,129.93556 -132.63966,227.18753 0.8061,75.75115 28.28668,138.78795 82.2952,188.8393 24.47603,23.23022 51.81008,41.18421 82.22186,53.93522 -6.59525,19.12648 -13.557,37.44688 -20.95846,55.03446 z M 749.96366,23.751237 c 0,59.37343 -21.69138,114.810233 -64.92748,166.121963 -52.17652,60.99961 -115.28658,96.24803 -183.72426,90.68597 -0.87204,-7.12298 -1.37769,-14.61967 -1.37769,-22.49743 0,-56.99843 24.81315,-117.99801 68.87738,-167.873453 21.99909,-25.25281 49.978,-46.25018 83.90738,-63.00018 C 686.57507,10.688027 718.59913,1.5631274 748.71783,5.2734376e-4 749.59727,7.9378274 749.96366,15.875627 749.96366,23.750467 Z" id="path4" inkscape:connector-curvature="0" />
          </svg>
          <span>Login with Apple</span>
        </button>
      </div>
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
        <span>Login with Facebook</span>
      </button>
    </div>

    <!-- Twitter login button -->
    <div class="btnLoginTwitter" v-if="!swaplogin">
      <button @click="signInWithTwitter">
        <svg viewBox="126.444 2.281 589 589">
          <circle cx="420.944" cy="296.781" r="294.5" fill="#2daae1"/>
          <path d="M609.773 179.634c-13.891 6.164-28.811 10.331-44.498 12.204 16.01-9.587 28.275-24.779 34.066-42.86a154.78 154.78 0 0 1-49.209 18.801c-14.125-15.056-34.267-24.456-56.551-24.456-42.773 0-77.462 34.675-77.462 77.473 0 6.064.683 11.98 1.996 17.66-64.389-3.236-121.474-34.079-159.684-80.945-6.672 11.446-10.491 24.754-10.491 38.953 0 26.875 13.679 50.587 34.464 64.477a77.122 77.122 0 0 1-35.097-9.686v.979c0 37.54 26.701 68.842 62.145 75.961-6.511 1.784-13.344 2.716-20.413 2.716-4.998 0-9.847-.473-14.584-1.364 9.859 30.769 38.471 53.166 72.363 53.799-26.515 20.785-59.925 33.175-96.212 33.175-6.25 0-12.427-.373-18.491-1.104 34.291 21.988 75.006 34.824 118.759 34.824 142.496 0 220.428-118.052 220.428-220.428 0-3.361-.074-6.697-.236-10.021a157.855 157.855 0 0 0 38.707-40.158z" fill="#fff"/>
        </svg>
        <span>Login with Twitter</span>
      </button>
    </div>
  </div>
</template>

<script>
import EmailLogin from '@/components/inputBasic/EmailLogin.vue'
import PasswordLogin from '@/components/inputBasic/PasswordLogin.vue'
import EmailSign from '@/components/inputBasic/EmailSign.vue'
import PasswordSign from '@/components/inputBasic/PasswordSign.vue'
import FirstNameSign from '@/components/inputBasic/FirstNameSign.vue'
import LastNameSign from '@/components/inputBasic/LastNameSign.vue'
import BirthdaySign from '@/components/inputBasic/BirthdaySign.vue'

export default {
  name: 'Sign',
  components: {
    EmailLogin,
    PasswordLogin,
    EmailSign,
    PasswordSign,
    FirstNameSign,
    LastNameSign,
    BirthdaySign
  },
  data () {
    return {
      stateAndroid: false,
      stateIOS: false,
      stateOther: false,
      valid: false,
      swaplogin: false,
      swapTitle: '회원가입',
      btnSignInDisabled: true,
      btnLogInDisabled: true,
      formStateLogin: {
        emailLogin: false,
        passwordLogin: false
      },
      formStateSign: {
        emailSign: false,
        passwordSign: false,
        firstNameSign: false,
        lastNameSign: false,
        birthdaySign: false
      },
      formGetChk: {
        emailLogin: false,
        passwordLogin: false,
        emailSign: false,
        passwordSign: false,
        firstNameSign: false,
        lastNameSign: false,
        birthdaySign: true
      },
      form: {
        emailLogin: '',
        passwordLogin: '',
        emailSign: '',
        passwordSign: '',
        firstNameSign: '',
        lastNameSign: '',
        birthdaySign: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
      }
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      const user = this.$firebase.auth().currentUser
      await user.getIdToken()
      await this.$store.dispatch('getUser', user)
      if (this.$store.state.claims.level === undefined) return this.$router.push('/UserProfile')
      this.$router.push('/')
    },
    async signInWithFacebook () {
      const provider = new this.$firebase.auth.FacebookAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      const user = this.$firebase.auth().currentUser
      await user.getIdToken()
      await this.$store.dispatch('getUser', user)
      if (this.$store.state.claims.level === undefined) return this.$router.push('/UserProfile')
      this.$router.push('/')
    },
    async signInWithTwitter () {
      const provider = new this.$firebase.auth.TwitterAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      const user = this.$firebase.auth().currentUser
      await user.getIdToken()
      await this.$store.dispatch('getUser', user)
      if (this.$store.state.claims.level === undefined) return this.$router.push('/UserProfile')
      this.$router.push('/')
    },
    async signInWithApple () {
      const provider = new this.$firebase.auth.OAuthProvider('apple.com')
      provider.setCustomParameters({
        locale: 'ko'
      })
      await this.$firebase.auth().signInWithPopup(provider)
      await this.$firebase.auth().currentUser.getIdToken(true)
      const user = this.$firebase.auth().currentUser
      await user.getIdToken()
      await this.$store.dispatch('getUser', user)
      if (this.$store.state.claims.level === undefined) return this.$router.push('/UserProfile')
      this.$router.push('/')
    },
    async createWithEmailAndPassword () {
      await this.$firebase.auth().createUserWithEmailAndPassword(this.form.emailSign, this.form.passwordSign)
      const user = this.$firebase.auth().currentUser
      await user.updateProfile({
        displayName: `${this.form.firstNameSign} ${this.form.lastNameSign}`
      })
      await this.$firebase.auth().signOut()
      this.swapJoin()
    },
    async signInWithEmailAndPassword () {
      await this.$firebase.auth().signInWithEmailAndPassword(this.form.emailLogin, this.form.passwordLogin)
      const user = this.$firebase.auth().currentUser
      await user.getIdToken()
      await this.$store.dispatch('getUser', user)
      if (this.$store.state.claims.level === undefined) return this.$router.push('/UserProfile')
      this.$router.push('/')
    },
    swapJoin () {
      this.swaplogin = !this.swaplogin
      this.btnLogInDisabled = true
      this.btnSignInDisabled = true
      if (this.swaplogin) {
        this.swapTitle = '로그인'
      } else {
        this.swapTitle = '회원가입'
      }
      if (!this.formGetChk.emailLogin) {
        this.form.emailLogin = ''
      }
      if (!this.formGetChk.passwordLogin) {
        this.form.passwordLogin = ''
      }
      if (!this.formGetChk.emailSign) {
        this.form.emailSign = ''
      }
      if (!this.formGetChk.passwordSign) {
        this.form.passwordSign = ''
      }
      if (!this.formGetChk.firstNameSign) {
        this.form.firstNameSign = ''
      }
      if (!this.formGetChk.lastNameSign) {
        this.form.lastNameSign = ''
      }
      if (!this.formGetChk.birthdaySign) {
        this.form.birthdaySign = new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
      }
    },
    chgEmailLogin (value) {
      this.form.emailLogin = value
    },
    chgPassLogin (value) {
      this.form.passwordLogin = value
    },
    chgEmailSign (value) {
      this.form.emailSign = value
    },
    chgPassSign (value) {
      this.form.passwordSign = value
    },
    chgFirstNameSign (value) {
      this.form.firstNameSign = value
    },
    chgLastNameSign (value) {
      this.form.lastNameSign = value
    },
    chgBirthdaySign (value) {
      this.form.birthdaySign = value
    },
    esEmailLogin (value) {
      // email login 유효성 상태
      this.formStateLogin.emailLogin = value
      this.btnLoginState()
    },
    esPassLogin (value) {
      // password login 유효성 상태
      this.formStateLogin.passwordLogin = value
      this.btnLoginState()
    },
    esEmailSign (value) {
      // email sign 유효성 상태
      this.formStateSign.emailSign = value
      this.btnSignState()
    },
    esPassSign (value) {
      // password sign 유효성 상태
      this.formStateSign.passwordSign = value
      this.btnSignState()
    },
    esFirstNameSign (value) {
      // first name sign 유효성 상태
      this.formStateSign.firstNameSign = value
      this.btnSignState()
    },
    esLastNameSign (value) {
      // last name sign 유효성 상태
      this.formStateSign.lastNameSign = value
      this.btnSignState()
    },
    esBirthdaySign (value) {
      // last name sign 유효성 상태
      this.formStateSign.birthdaySign = value
      this.btnSignState()
    },
    btnLoginState () {
      if (this.formStateLogin.emailLogin && this.formStateLogin.passwordLogin) {
        this.btnLogInDisabled = false
      } else {
        this.btnLogInDisabled = true
      }
    },
    btnSignState () {
      if (this.formStateSign.emailSign && this.formStateSign.passwordSign && this.formStateSign.firstNameSign && this.formStateSign.lastNameSign && this.formStateSign.birthdaySign) {
        this.btnSignInDisabled = false
      } else {
        this.btnSignInDisabled = true
      }
    },
    checkMobile () {
      // userAgent 값 얻기
      const varUA = navigator.userAgent.toLowerCase()
      if (varUA.indexOf('android') > -1) {
        // 안드로이드
        console.log('android')
        this.stateIOS = false
        this.stateOther = false
        this.stateAndroid = true
        return 'android'
      } else if (varUA.indexOf('iphone') > -1 || varUA.indexOf('ipad') > -1 || varUA.indexOf('ipod') > -1) {
        // IOS
        console.log('ios')
        this.stateOther = false
        this.stateAndroid = false
        this.stateIOS = true
        return 'ios'
      } else {
        // 아이폰, 안드로이드 외
        console.log('other')
        this.stateAndroid = false
        this.stateIOS = false
        this.stateOther = true
        return 'other'
      }
    }
  },
  mounted () {
    this.checkMobile()
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  }
}
</script>

<style lang="scss" scoped>
.sign {
  position: relative;
  padding: 24px;
  box-sizing: border-box;
  .loginWrap,
  .signInWrap {
    position: relative;
    padding: 10px 0 0 0;
  }
  .btnLoginGoogle,
  .btnLoginFacebook,
  .btnLoginTwitter,
  .btnLoginApple {
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
    .btnLogin,
    .btnSignIn {
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
