<template>
  <div class="notes">
    <h1>notes</h1>
    <br>
    <input type="text" v-model="title" />
    <br>
    <input type="text" v-model="content" />
    <br>
    <button @click="post">post</button>
    <br>
    <ul
      v-for="(item, i) in items"
      :key="`${i} - ${item.title}`"
      class="list"
    >
      <li>{{ item.title }}</li>
      <li>{{ item.content }}</li>
      <li>{{ item.id }}</li>
      <li><button @click="put(item.id)">수정</button></li>
      <li><button @click="del(item.id)">삭제</button></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  data: () => ({
    title: '',
    content: '',
    items: []
  }),
  mounted () {
    this.get()
  },
  methods: {
    async post () {
      // this.items.push({
      //   title: this.title,
      //   content: this.content
      // })
      const r = await this.$firebase.firestore().collection('notes').add({
        title: this.title,
        content: this.content
      })
      console.log(r)
      this.title = ''
      this.content = ''
      await this.get()
    },
    async get () {
      const citiesRef = this.$firebase.firestore().collection('notes')
      const snapshot = await citiesRef.get()
      this.items = []
      snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data())
        const { title, content } = doc.data()
        this.items.push({
          title, content, id: doc.id
        })
      })
      // console.log(snapshot)
    },
    async put (id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).set({
        title: this.title,
        content: this.content
      })
      await this.get()
      console.log(r)
    },
    async del (id) {
      const r = await this.$firebase.firestore().collection('notes').doc(id).delete()
      await this.get()
      console.log(r)
    }
  }
}
</script>

<style lang="scss" scoped>
.notes {
  position: relative;
  padding: 0;
  box-sizing: border-box;
  .list {
    border-top: 1px solid #000;
    &:first-of-type {
      border-top: 0 none;
    }
  }
}
</style>
