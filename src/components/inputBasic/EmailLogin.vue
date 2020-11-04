<template>
  <div
    :class="['formBlock', focusState?'focus':'blur', effChk?'effEnd':'', errChk?'err':'']"
  >
    <span class="title">{{ iptTitle }}</span>
    <div class="inputBlock">
      <input
        type="text"
        :value="value"
        @input="changeMessage($event)"
        @focus="focusFn"
        @blur="blurFn"
      />
      <span class="del" @click="delFn" v-if="delState">
        <em>삭제</em>
        <svg viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
          <g>
            <g>
              <g>
                <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490c270.6,0,490-219.4,490-490C990,229.4,770.6,10,500,10z M600.8,500l178.5,178.5L678.5,779.3L500,600.8L321.5,779.3L220.7,678.5L399.2,500L220.7,321.5l100.8-100.9L500,399.2l178.5-178.5l100.8,100.8L600.8,500z"/>
              </g>
            </g>
            <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></g>
        </svg>
      </span>
      <span class="bottomLine"></span>
    </div>
    <span class="errMsg">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'EmailLogin',
  props: [
    'value',
    'iptTitle',
    'chgEmailLoginInit'
  ],
  data () {
    return {
      focusState: false,
      effChk: false,
      errChk: false,
      delState: false,
      emailChk: false,
      endState: false,
      errMsg: '',
      message: ''
    }
  },
  methods: {
    focusFn () {
      this.focusState = true
      this.delState = false
      // del fn
      if (this.message.length > 0) {
        this.delState = true
      } else {
        this.delState = false
      }
    },
    blurFn () {
      if (this.message.length === 0) {
        this.focusState = false
        this.errChk = false
        this.errMsg = ''
      } else {
        this.focusState = true
      }

      // del fn
      setTimeout(() => {
        this.delState = false
      }, 100)

      this.$emit('endStateResEmailLogin', this.endState)
    },
    changeMessage (event) {
      this.message = event.target.value
      // console.log('this.message.length : ' + this.message.length)
      if (this.message.length < 10) {
        this.errChk = true
        this.effChk = false
        this.endState = false
        this.errMsg = '10글자 이상 입력해주세요.'
      }
      if (this.message.length > 10 && !this.emailChk) {
        this.errChk = true
        this.effChk = false
        this.endState = false
        this.errMsg = '특수문자를 제외하고 이메일 형식에 맞게 입력해주세요.'
      }
      if (this.message.length > 10 && this.emailChk) {
        this.errChk = true
        this.effChk = true
        this.endState = true
        this.errMsg = '이메일 입력이 완료되었습니다.'
      }
      this.CheckEmail(this.message)
      this.$emit('input', this.message)
      this.$emit('chgEmailLoginRes', this.message)
      this.$emit('endStateResEmailLogin', this.endState)

      // del fn
      if (this.message.length >= 1) {
        this.delState = true
      } else {
        this.delState = false
      }
    },
    initMessage (msg) {
      this.message = msg
      this.CheckEmail(this.message)
      if (this.message.length < 10) {
        this.errChk = true
        this.effChk = false
        this.endState = false
        this.errMsg = '10글자 이상 입력해주세요.'
      }
      if (this.message.length > 10 && !this.emailChk) {
        this.errChk = true
        this.effChk = false
        this.endState = false
        this.errMsg = '특수문자를 제외하고 이메일 형식에 맞게 입력해주세요.'
      }
      if (this.message.length > 10 && this.emailChk) {
        this.errChk = true
        this.effChk = true
        this.endState = true
        this.errMsg = '이메일 입력이 완료되었습니다.'
      }
      if (this.message.length === 0) {
        this.focusState = false
        this.effChk = false
        this.errChk = false
        this.errMsg = ''
      }
    },
    delFn () {
      // this.value = ''
      this.message = ''
      this.errMsg = ''
      this.focusState = false
      this.effChk = false
      this.errChk = false
      this.delState = false
      this.endState = false
      this.$emit('input', '')
      this.$emit('chgEmailLoginRes', '')
      this.$emit('endStateResEmailLogin', this.endState)
    },
    CheckEmail (str) {
      const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regEmail.test(str)) {
        this.emailChk = false
      } else {
        this.emailChk = true
      }
    }
  },
  mounted () {
    // this.changeMessage(this.value)
    this.initMessage(this.value)
  },
  watch: {
    chgEmailLoginInit (newVal, oldVal) {
      if (newVal) {
        this.delFn()
        this.$emit('chgEmailLoginInitRes', false)
      }
    }
  },
  beforeCreate () {
    // console.log('input beforeCreate')
  },
  created () {
    // console.log('input created')
  },
  beforeMount () {
    // console.log('input beforeMount')
  },
  beforeUpdate () {
    // console.log('input beforeUpdate')
  },
  updated () {
    // console.log('input updated')
  },
  beforeDestroy () {
    // console.log('input beforeDestroy')
  },
  destroyed () {
    // console.log('input destroyed')
  }
}
</script>

<style lang="scss" scoped>
.formBlock {
  &:first-of-type {
    margin: 0 0 0 0;
  }
  position: relative;
  width: 100%;
  padding: 24px 0 0 0;
  margin: 14px 0 0 0;
  box-sizing: border-box;
  span {
    display: block;
    &.title {
      position: absolute;
      left: 0;
      top: 24px;
      font-size: 16px;
      color: #999;
      z-index: 1;
      transition: top .2s, font-size .2s, color .2s;
    }
    &.bottomLine {
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 0;
      height: 1px;
      background-color: #555;
      z-index: 10;
      transition: width .2s, left .2s;
    }
  }
  .inputBlock {
    position: relative;
    input {
      position: relative;
      width: 100%;
      border-radius: 0;
      border: 0 none;
      border-bottom: 1px solid #999;
      padding: 5px 30px 5px 0;
      box-sizing: border-box;
      font-size: 14px;
      background-color: transparent;
      z-index: 9;
      transition: color .2s;
    }
    .del {
      position: absolute;
      right: 0;
      bottom: 2px;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      z-index: 11;
      em {
        font-size: 0;
        display: inline-block;
      }
      svg {
        position: absolute;
        width: 12px;
        height: 12px;
        display: block;
        left: 50%;
        top: 50%;
        margin: -6px 0 0 -6px;
      }
    }
  }
  .errMsg {
    display: none;
    position: absolute;
    left: 0;
    bottom: -16px;
    width: 100%;
    font-size: 10px;
    color: #ff0000;
  }
  &.focus {
    .title {
      top: 8px;
      font-size: 10px;
      color: #000;
      transition: top .2s, font-size .2s, color .2s;
    }
    span {
      &.bottomLine {
        width: 100%;
        left: 0;
        background-color: #000;
        transition: width .2s, left .2s;
      }
    }
  }
  &.err {
    .title {
      top: 8px;
      font-size: 10px;
      color: #FF0000;
      transition: top .2s, font-size .2s, color .2s;
    }
    input {
      transition: color .2s;
    }
    span {
      &.bottomLine {
        width: 100%;
        left: 0;
        background-color: #FF0000;
        transition: width .2s, left .2s;
      }
    }
    .errMsg {
      display: block;
    }
    &.effEnd {
      .errMsg {
        display: block;
        color: #1e90ff;
      }
    }
  }
  &.effEnd {
    .title {
      top: 8px;
      font-size: 10px;
      color: #1e90ff;
      transition: top .2s, font-size .2s, color .2s;
    }
    span {
      &.bottomLine {
        width: 100%;
        left: 0;
        background-color: #1e90ff;
        transition: width .2s, left .2s;
      }
    }
  }
}
</style>
