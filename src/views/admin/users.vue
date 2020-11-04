<template>
  <div class="users">
    <h1>Users</h1>
    <p>{{ schState }}</p>
    <div>
      <div class="searchBlock">
        <input type="text" id="iptSch" :v-model="search" @input="iptSearch" />
        <label for="iptSch">Search</label>
      </div>
      <!-- <p>총 : {{ totalCount }}</p> -->
      <ul
        class="listBlock"
        v-for="item in filteredItems"
        :key="item.uid"
      >
        <li>
          <dl>
            <dt v-html="highlightMatches(item.displayName)">{{item.displayName | nameCheck}}</dt>
            <dd>{{ item.level }}</dd>
            <dd class="imgBlock"><img :src="item.photoURL | imgCheck" :alt="item.displayName"></dd>
          </dl>
          <!-- {{ item }} -->
        </li>
      </ul>
      <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" >
        <div slot="no-more">The end is<br>the beginning of everything.</div>
        <div slot="no-results">The end is<br>the beginning of everything.</div>
      </infinite-loading>
    </div>
  </div>
</template>

<script>
export default {
  name: 'users',
  components: {
  },
  data () {
    return {
      items: [],
      totalCount: 0,
      limit: 10,
      search: '',
      schState: false
    }
  },
  computed: {
    filteredItems: function () {
      return this.items.filter(item => {
        const displayName = item.displayName.toLowerCase()
        const searchTerm = this.search.toLowerCase()

        return (
          displayName.includes(searchTerm)
        )
      })
    }
  },
  filters: {
    nameCheck (v) {
      if (v) return v
      return 'no name'
    },
    imgCheck (v) {
      if (v) return v
      return require('@/assets/img/icon_cake.jpg')
    }
  },
  methods: {
    async infiniteHandler ($state) {
      await this.$axios.get('/admin/users/', {
        params: {
          limit: this.limit
        }
      }).then(response => {
        this.totalCount = response.data.totalCount
        if (this.totalCount <= this.limit) {
          this.items = response.data.items
          $state.complete()
        } else {
          if (response.data.items.length < this.totalCount) {
            this.limit += 10
            this.items = response.data.items
            $state.loaded()
          } else {
            $state.complete()
          }
        }
      })
    },
    highlightMatches (text) {
      const matchExists = text
        .toLowerCase()
        .includes(this.search.toLowerCase())
      if (!matchExists) return text

      const re = new RegExp(this.search, 'ig')
      return text.replace(re, matchedText => `<span class='bgFFFF00'>${matchedText}</span>`)
    },
    iptSearch: function (e) {
      e.data === null ? this.schState = false : this.schState = true
      this.search = e.target.value
      if (this.schState) {
        this.limit = this.totalCount
      } else {
        this.items = []
        this.limit = 10
      }
      this.$nextTick(() => {
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset')
        this.$refs.infiniteLoading.stateChanger.reset()
      })
    }
  },
  mounted () {
    // this.listPrint()
    // console.log('mounted ================= ')
  }
}
</script>

<style lang="scss" scoped>
.users {
  .listBlock{
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
  .searchBlock {
    position: relative;
    margin: 20px 0;
    input[type="text"] {
      width: 100%;
      padding: 10px;
      box-sizing: border-box;
      + label {
        position: absolute;
        width: 1px;
        height: 1px;
        left: 0;
        top: 0;
        font-size: 0;
      }
    }
  }
}
::v-deep .infinite-status-prompt {
  text-align: center;
  padding: 30px 0;
  * {
    text-align: center;
  }
}
</style>
