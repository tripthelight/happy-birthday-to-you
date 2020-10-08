<template>
  <div class="vuex">
    <h1>Vuex</h1>
    <button @click="set">set</button>
  </div>
</template>

<script>
export default {
  name: 'Vuex',
  methods: {
    set () {
      this.$store.commit('setTitle', '와우')
    }
  }
}
</script>
