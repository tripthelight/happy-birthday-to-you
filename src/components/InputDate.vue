<template>
  <div :class="['formBlock', focusState?'focus':'blur']">
    <span class="title">{{ iptTitle }}</span>
    <input
      :type="iptType"
      v-model="date"
      @focus="focusFn"
    />
    <span class="bottomLine"></span>
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
      date: new Date().toISOString().substr(0, 10)
    }
  },
  mounted () {
  },
  methods: {
    focusFn () {
      this.focusState = true
    }
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
  margin: 10px 0 0 0;
  span {
    display: block;
    &.title {
      position: absolute;
      left: 0;
      top: 20px;
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
    padding: 5px 0;
    font-size: 14px;
    background-color: transparent;
    font-size: 0;
    min-height: 17px;
    z-index: 9;
    &:focus {
      + span {
        &.bottomLine {
          width: 100%;
          left: 0;
          background-color: #000;
          transition: width .2s, left .2s;
        }
      }
    }
  }
  &.focus {
    .title {
      top: 4px;
      font-size: 9px;
      color: #000;
      transition: top .2s, font-size .2s, color .2s;
    }
    input {
      font-size: 14px;
    }
  }
}
</style>
