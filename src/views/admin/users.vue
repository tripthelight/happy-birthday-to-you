<template>
  <div class="users">
    <h1>Users</h1>
    <div>
      <p>총 : {{ totalCount }}</p>
      <ul
        class="list"
        v-for="item in items"
        :key="item.length">
        <li>
          <dl>
            <dt>{{item.displayName}}</dt>
            <dd>{{item.email}}</dd>
            <dd class="imgBlock"><img :src="item.photoURL" alt="/"></dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      items: [],
      totalCount: 0
    }
  },
  methods: {
    async listPrint () {
      const { data } = await this.$axios.get('/admin/users')
      this.totalCount = data.totalCount
      this.items = data.items
    }
  },
  mounted () {
    this.listPrint()
    console.log('mounted ================= ')
  }
}
</script>

<style lang="scss" scoped>
.users {
  .list{
    li {
      margin: 20px 0 0 0;
      .imgBlock {
        display: block;
        width: 20px;
        height: 20px;
        border: 1px solid #FF0000;
        border-radius: 100%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
      }
    }
  }
}
</style>
