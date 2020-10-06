<template>
  <div class="axios">
    <h1>Axios</h1>

    <div class="block">
      <h2>create</h2>
      <textarea rows="3" v-model="textCreate" />
      <button @click="create">submit</button>
    </div>

    <div class="block">
      <h2>read</h2>
      <textarea rows="3" v-model="textRead" />
      <button @click="read">submit</button>
    </div>

    <div class="block">
      <h2>update</h2>
      <textarea rows="3" v-model="textUpdate" />
      <button @click="update">submit</button>
    </div>

    <div class="block">
      <h2>del</h2>
      <textarea rows="3" v-model="textDelete" />
      <button @click="del">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Axios',
  data () {
    return {
      textCreate: '',
      textRead: '',
      textUpdate: '',
      textDelete: ''
    }
  },
  methods: {
    async create () {
      const r = await this.$axios.post('test')
      this.textCreate = r.data
    },
    read () {
      this.$axios.get('http://localhost:5001/happybirthdaytoyou-e8bdc/us-central1/test')
        .then(r => {
          this.textRead = r.data
        })
        .catch(e => console.error(e.message))
    },
    update () {
      this.$axios.put('http://localhost:5001/happybirthdaytoyou-e8bdc/us-central1/test/111')
        .then(r => {
          this.textUpdate = r.data
        })
        .catch(e => console.error(e.message))
    },
    del () {
      this.$axios.delete('http://localhost:5001/happybirthdaytoyou-e8bdc/us-central1/test/222')
        .then(r => {
          this.textDelete = r.data
        })
        .catch(e => console.error(e.message))
    }
  }
}
</script>

<style lang="scss" scoped>
.axios {
  position: relative;
  padding: 0;
  box-sizing: border-box;
  padding: 24px;
  .block {
    &:first-of-type {
      border-top: 0 none;
    }
    display: block;
    padding:20px 0;
    border-top: 1px solid #000;
    textarea {
      display: block;
      width: 100%;
    }
  }
}
</style>
