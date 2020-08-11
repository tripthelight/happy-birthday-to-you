<template>
  <div :class="['gnb', menuState?'show':'hide']">
    <div class="btnGnb" @click="showMenu" >
      <hamburger-menu />
    </div>
    <div :class="['menuWrap']">
      <div class="btnClose" @click="hideMenu">
        <btn-x />
      </div>
      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
      </ul>
      <div class="bg" @click="hideMenu"></div>
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '../Svg/HamburgerMenu'
import BtnX from '../Svg/X'
export default {
  name: 'Gnb',
  components: {
    HamburgerMenu,
    BtnX
  },
  data: function () {
    return {
      menuState: false
    }
  },
  methods: {
    showMenu () {
      this.menuState = !this.menuState
    },
    hideMenu () {
      this.menuState = !this.menuState
    }
  }
}
</script>

<style lang="scss" scoped>
.gnb {
  .btnGnb {
    position: fixed;
    left: 12px;
    top: 10px;
    width: 28px;
    height: 28px;
    z-index: 980;
    .svgWrap {
      position: relative;
      width: 28px;
      height: 28px;
    }
  }
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
      display: block;
      left: 12px;
      top: 15px;
      width: 18px;
      height: 18px;
      z-index: 993;
      .svgWrap {
        position: relative;
        width: 18px;
        height: 18px;
        display: block;
      }
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
  &.show {
    .menuWrap {
      display: block;
    }
  }
  &.hide {
    .menuWrap {
      display: none;
    }
  }
}
</style>
