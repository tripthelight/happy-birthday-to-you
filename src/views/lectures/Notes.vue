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
      <li><button @click="put(item)">수정</button></li>
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
  },
  methods: {
    post () {
      this.items.push({
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
    },
    get () {

    },
    put () {

    },
    del () {

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
