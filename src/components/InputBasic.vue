<template>
  <div :class="['formBlock', focusState?'focus':'blur', effChk?'effEnd':'', errChk?'err':'']">
    <span class="title">{{ iptTitle }}</span>
    <input
      :value="value"
      @input="changeMessage($event)"
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
    'value'
  ],
  data () {
    return {
      focusState: false,
      effChk: false,
      errChk: false,
      delState: false,
      errMsg: '',
      iptTitle: '',
      message: ''
    }
  },
  methods: {
    changeMessage (event) {
      this.message = event.target.value
      this.$emit('input', this.message)
      this.$emit('chgEmailLoginRes', this.message)
      this.$emit('chgEmailSignRes', this.message)
    }
  },
  mounted () {
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
