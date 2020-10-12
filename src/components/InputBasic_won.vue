<template>
  <div :class="['formBlock', focusState?'focus':'blur', effChk?'effEnd':'', errChk?'err':'']">
    <span class="title">{{ iptTitle }}</span>
    <input
      :type="iptType"
      v-model="vModel"
      @focus="focusFn"
      @blur="blurFn($event)"
      @input="checkExist($event)"
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
    <span class="errMsg">{{ errMsg }}</span>
  </div>
</template>

<script>
export default {
  name: 'InputBasic',
  props: [
    'iptTitle',
    'iptType'
  ],
  data () {
    return {
      focusState: false,
      iptLength: '',
      valType: '',
      errMsg: '',
      vModel: '',
      emailChk: false,
      effChk: false,
      errChk: false,
      delState: false,
      form: {
        emailLogin: '',
        passwordLogin: '',
        emailSign: '',
        passwordSign: '',
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    init () {
      if (this.vModel === '') return
      if (this.vModel.length > 0) {
        this.iptLength = this.vModel
        this.vModelChk(this.iptLength)
      }
    },
    focusFn () {
      this.focusState = true
      this.effChk = false
      if (this.iptLength.length > 0) {
        this.delState = true
      } else {
        this.delState = false
      }
    },
    blurFn (event) {
      // this.effChk = false
      // this.errChk = false
      // this.iptLength = event.target.value
      // this.delState = false
      if (this.iptTitle === 'FIRST NAME' || this.iptTitle === 'LAST NAME') {
        if (this.iptLength.length >= 1 && this.iptLength.length <= 30) {
          this.errMsg = ''
          this.focusState = false
          this.effChk = true
          this.errChk = false
          if (this.iptTitle === 'FIRST NAME') {
            this.$emit('firstNameEff', true)
          }
          if (this.iptTitle === 'LAST NAME') {
            this.$emit('lastNameEff', true)
          }
        }
      }
      if (this.iptTitle === 'LOGIN EMAIL') {
        if (this.iptLength.length >= 10 && this.emailChk) {
          this.errMsg = ''
          this.focusState = false
          this.effChk = true
          this.errChk = false
          this.$emit('emailLoginEff', true)
        }
      }
      if (this.iptTitle === 'SIGN IN EMAIL') {
        if (this.iptLength.length >= 10 && this.emailChk) {
          this.errMsg = ''
          this.focusState = false
          this.effChk = true
          this.errChk = false
          this.$emit('emailSignEff', true)
        }
      }
      if (this.iptTitle === 'PASSWORD') {
        if (this.iptLength.length >= 6 && this.iptLength.length <= 30) {
          this.errMsg = ''
          this.focusState = false
          this.effChk = true
          this.errChk = false
          this.$emit('passwordEff', true)
        }
      }
      if (this.iptLength.length === 0) {
        this.errMsg = ''
        this.focusState = false
        this.effChk = false
        this.errChk = false
      }
      setTimeout(() => {
        this.delState = false
      }, 100)
    },
    vModelFn () {
      switch (this.iptTitle) {
        case 'FIRST NAME' :
          this.vModel = this.form.firstName
          return
        case 'LAST NAME' :
          this.vModel = this.form.lastName
          return
        case 'LOGIN EMAIL' :
          this.vModel = this.form.emailLogin
          return
        case 'SIGN IN EMAIL' :
          this.vModel = this.form.emailSign
          return
        case 'LOGIN PASSWORD' :
          this.vModel = this.form.passwordLogin
          return
        case 'SIGN IN PASSWORD' :
          this.vModel = this.form.passwordSign
          return
        default :
          this.vModel = ''
      }
    },
    checkExist (event) {
      this.iptLength = event.target.value
      if (this.iptLength.length >= 1) {
        this.delState = true
      } else {
        this.delState = false
      }
      this.vModelChk(this.iptLength)

      switch (this.iptTitle) {
        case 'FIRST NAME' :
          this.$emit('firstNameRes', this.iptLength)
          return
        case 'LAST NAME' :
          this.$emit('lastNameRes', this.iptLength)
          return
        case 'LOGIN EMAIL' :
          this.$emit('emailLoginRes', this.iptLength)
          return
        case 'SIGN IN EMAIL' :
          this.$emit('emailSignRes', this.iptLength)
          return
        case 'LOGIN PASSWORD' :
          this.$emit('passwordLoginRes', this.iptLength)
          return
        case 'SIGN IN PASSWORD' :
          this.$emit('passwordSignRes', this.iptLength)
      }
    },
    vModelChk (iptL) {
      if (this.iptTitle === 'FIRST NAME' || this.iptTitle === 'LAST NAME') {
        if (iptL.length === 0) {
          this.errMsg = '1글자 이상 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          if (this.iptTitle === 'FIRST NAME') {
            this.$emit('firstNameEff', false)
          }
          if (this.iptTitle === 'LAST NAME') {
            this.$emit('lastNameEff', false)
          }
        } else if (iptL.length >= 31) {
          this.errMsg = '30글자 이하로 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          if (this.iptTitle === 'FIRST NAME') {
            this.$emit('firstNameEff', false)
          }
          if (this.iptTitle === 'LAST NAME') {
            this.$emit('lastNameEff', false)
          }
        } else {
          this.errMsg = ''
          this.errChk = false
          if (this.iptTitle === 'FIRST NAME') {
            this.$emit('firstNameEff', true)
          }
          if (this.iptTitle === 'LAST NAME') {
            this.$emit('lastNameEff', true)
          }
        }
      }
      if (this.iptTitle === 'LOGIN EMAIL') {
        this.CheckEmail(iptL)
        if (iptL.length < 10) {
          this.errMsg = '10글자 이상 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('emailLoginEff', false)
        } else if (this.emailChk === false) {
          this.errMsg = 'EMAIL 형식에 맞게 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('emailLoginEff', false)
        } else {
          this.errMsg = ''
          this.errChk = false
          this.$emit('emailLoginEff', true)
        }
      }
      if (this.iptTitle === 'SIGN IN EMAIL') {
        this.CheckEmail(iptL)
        if (iptL.length < 10) {
          this.errMsg = '10글자 이상 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('emailSignEff', false)
        } else if (this.emailChk === false) {
          this.errMsg = 'EMAIL 형식에 맞게 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('emailSignEff', false)
        } else {
          this.errMsg = ''
          this.errChk = false
          this.$emit('emailSignEff', true)
        }
      }
      if (this.iptTitle === 'LOGIN PASSWORD') {
        if (iptL.length <= 5) {
          this.errMsg = '6글자 이상 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('passwordLoginEff', false)
        } else if (iptL.length >= 31) {
          this.errMsg = '30글자 이하로 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('passwordLoginEff', false)
        } else {
          this.errMsg = ''
          this.errChk = false
          this.$emit('passwordLoginEff', true)
        }
      }
      if (this.iptTitle === 'SIGN IN PASSWORD') {
        if (iptL.length <= 5) {
          this.errMsg = '6글자 이상 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('passwordSignEff', false)
        } else if (iptL.length >= 31) {
          this.errMsg = '30글자 이하로 입력해주세요'
          this.focusState = true
          this.effChk = false
          this.errChk = true
          this.$emit('passwordSignEff', false)
        } else {
          this.errMsg = ''
          this.errChk = false
          this.$emit('passwordSignEff', true)
        }
      }
    },
    CheckEmail (str) {
      const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regEmail.test(str)) {
        this.emailChk = false
      } else {
        this.emailChk = true
      }
    },
    delFn () {
      this.errMsg = ''
      this.iptLength = ''
      this.vModel = ''
      this.focusState = false
      this.effChk = false
      this.errChk = false
      this.delState = false
    }
  },
  mounted () {
    this.vModelFn()
    this.init()
  },
  updated () {
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
  margin: 10px 0 0 0;
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
  &.effEnd {
    .title {
      top: 8px;
      font-size: 10px;
      color: #000;
      transition: top .2s, font-size .2s, color .2s;
    }
    span {
      &.bottomLine {
        left: 50%;
        bottom: 0;
        width: 0;
        background-color: #555;
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
      color: #FF0000;
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
  }
}
</style>
