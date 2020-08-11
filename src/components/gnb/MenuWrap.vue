<template>
  <div :class="['menuWrap']">
    <btn-x class="btnClose" @click="updateState" />
    <ul>
      <li>menu1</li>
      <li>menu2</li>
    </ul>
    <div class="bg" @click="updateState"></div>
  </div>
</template>

<script>
import BtnX from '../Svg/X'
export default {
  name: 'MenuWrap',
  components: {
    BtnX
  },
  props: ['menuState'],
  data: function () {
    return {
      state: false
    }
  },
  methods: {
    updateState: function () {
      this.$emit('menuEvt', 'hide')
    }
  }
}
</script>

<style lang="scss" scoped>
.menuWrap {
  position: fixed;
  display: none;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: transparent;
  z-index: 991;
  .btnClose {
    position: fixed;
    left: 12px;
    top: 15px;
    width: 18px;
    height: 18px;
    z-index: 993;
  }
  ul {
    position: fixed;
    left: 0;
    top: 0;
    padding-top: 48px;
    display: block;
    width: 70%;
    height: 100%;
    box-sizing: border-box;
    background-color: #FFF;
    z-index: 992;
    li {
      /*&:first-of-type {
        border-top: 0 none;
      }*/
      display: block;
      width: 100%;
      padding: 12px;
      box-sizing: border-box;
      border-top: 1px solid #EBEBEB;
      font-size: 14px;
      color: #111;
      background-color: #FFF;
      &:active {
        background-color: #EBEBEB;
      }
    }
  }
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.8);
    z-index: 990;
  }
  &.show {
    display: block;
  }
  &.hide {
    display: none;
  }
}
</style>
