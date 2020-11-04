<template>
  <div class="userProfile">
    <h1>User Profile</h1><br>
    <div v-if="!pageEmailChk">
      <p>가입하신 계정에 이메일이 존재하지 않습니다.<br>다른 계정으로 로그인해 주세요.</p>
      <br>
      <p>
      <button @click="signOut">
        <span>Sign Out</span>
      </button>
      </p><br>
      <p>{{ emailChkAuth }}</p>
      <p>{{ emailVerChkAuth }}</p>
    </div>
    <div v-if="pageEmailChk">
      <p>
      <button @click="signOut">
        <span>Sign Out</span>
      </button>
      </p>
      <br>
      <p>
        <button @click="tokenUpdate">토큰 업데이트</button>
      </p>
      <br><br>
      <p>{{ emailChkAuth }}</p>
      <p>{{ emailVerChkAuth }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  data () {
    return {
      pageEmailChk: false,
      emailChkAuth: '',
      emailVerChkAuth: ''
    }
  },
  metaInfo: {
    metaInfo: {
      link: [
        { rel: 'stylesheet', href: '/css/inddddex.css' }
      ]
    }
  },
  methods: {
    async tokenUpdate () {
      const user = this.$firebase.auth().currentUser
      await user.getIdToken(true)
      await this.$store.dispatch('getUser', user)
    },
    userCheck () {
      if (!this.$store.state.user.email) {
        this.pageEmailChk = false
        console.log('no have email')
        this.emailChkAuth = 'no have email'
      } else {
        this.pageEmailChk = true
        console.log('have email')
        this.emailChkAuth = 'have email'
      }
      if (!this.$store.state.user.emailVerified) {
        console.log('not emailVerified')
        this.emailVerChkAuth = 'not emailVerified'
      } else {
        console.log('emailVerified OK!')
        this.emailVerChkAuth = 'emailVerified OK!'
      }
    },
    async signOut () {
      this.$Progress.start()
      this.$store.commit('setLoadState', true)
      await this.$firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('logout')
        this.$router.push('/Sign')
      }).catch((error) => {
        // An error happened.
        console.log(error)
        this.$router.push('/Sign')
      })
    }
  },
  mounted () {
    this.userCheck()
    // console.log('user email : ' + this.$store.state.user.email)
    // console.log('user emailVerified : ' + this.$store.state.user.emailVerified)
  }
}
</script>
