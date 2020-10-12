<template>
  <div :class="['formBlock', focusState?'focus':'blur', effChk?'effEnd':'', errChk?'err':'']">
    <span class="title">{{ iptTitle }}</span>
    <input
      :type="iptType"
      v-model="vModel"
      @focus="focusFn"
      @click="focusFn"
      @blur="blurFn($event)"
      @input="checkExist($event)"
      :max="today"
    />
    <span class="bottomLineInit"></span>
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
      vModel: '',
      errMsg: '',
      effChk: false,
      errChk: false,
      date: new Date().toISOString().substring(0, 10),
      today: new Date().toISOString().substring(0, 10),
      form: {
        birthday: new Date().toISOString().substring(0, 10)
      }
    }
  },
  methods: {
    focusFn () {
      this.focusState = true
      this.effChk = false
    },
    blurFn (event) {
      if (this.iptLength.length < 10) {
        this.errMsg = '생년월일을 선택해주세요'
        this.focusState = false
        this.effChk = false
        this.errChk = true
        this.$emit('birthdayEff', false)
      } else if (this.iptLength <= this.date) {
        this.errMsg = ''
        this.focusState = true
        this.effChk = true
        this.errChk = false
        this.$emit('birthdayEff', true)
      }
    },
    checkExist (event) {
      this.iptLength = event.target.value
      this.$emit('birthdayEff', false)
      if (this.iptLength.length < 10) {
        this.errMsg = '생년월일을 선택해주세요'
        this.focusState = false
        this.effChk = false
        this.errChk = true
        this.$emit('birthdayEff', false)
      } else if (this.iptLength > this.date && this.iptLength.length === 10) {
        this.errMsg = '오늘 날짜까지만 선택 가능합니다.'
        this.errChk = true
        this.$emit('birthdayEff', false)
      }
      if (this.iptLength <= this.date && this.iptLength.length === 10) {
        this.errMsg = ''
        this.errChk = false
        this.$emit('birthdayRes', this.iptLength)
        this.$emit('birthdayEff', true)
      }
    },
    vModelFn () {
      this.vModel = this.form.birthday
    }
  },
  mounted () {
    this.vModelFn()
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
  padding: 20px 0 0 0;
  margin: 9px 0 0 0;
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
    &.bottomLineInit {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: #999;
      z-index: 10;
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
    padding: 5px 0;
    font-size: 14px;
    background-color: transparent;
    font-size: 14px;
    min-height: 17px;
    opacity: 0;
    z-index: 9;
    /* &:focus {
      + span {
        &.bottomLine {
          width: 100%;
          left: 0;
          background-color: #000;
          transition: width .2s, left .2s;
        }
      }
    } */
  }
  .errMsg {
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
    input {
      font-size: 14px;
      opacity: 1;
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
    input {
      font-size: 14px;
      opacity: 1;
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
      opacity: 1;
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
  }
}
</style>
