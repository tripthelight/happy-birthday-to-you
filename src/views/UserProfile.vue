<template>
  <div class="userProfile">
    <h1>User Profile</h1>
    <p>
      <button @click="signOut">
        <span>Sign Out</span>
      </button>
    </p>
    <p>
      <button @click="tokenUpdate">토큰 업데이트</button>
    </p>
    <p>{{ JSON.stringify($store.state.claims, null, 2) }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserProfile',
  methods: {
    async tokenUpdate () {
      const user = this.$firebase.auth().currentUser
      await user.getIdToken(true)
      await this.$store.dispatch('getUser', user)
    },
    async signOut () {
      this.$Progress.start()
      await this.$firebase.auth().signOut().then(() => {
        // Sign-out successful.
        console.log('로그아웃 됨')
      }).catch((error) => {
        // An error happened.
        console.log(error)
      })
    }
  }
}
</script>
