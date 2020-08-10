<template>
  <div class="gnb">
    <div class="btnGnb">
      <hamburger-menu />
      <menu-wrap />
    </div>
  </div>
</template>

<script>
import HamburgerMenu from '../Svg/HamburgerMenu'
import MenuWrap from './MenuWrap'
export default {
  name: 'Gnb',
  components: {
    HamburgerMenu,
    MenuWrap
  }
}
</script>

<style lang="scss" scoped>
.gnb {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: #FFF;
  border-bottom: 1px solid #EBEBEB;
  overflow-y: inherit;
  z-index: 990;
  .btnGnb {
    position: fixed;
    left: 12px;
    top: 10px;
    width: 28px;
    height: 28px;
    .svgWrap {
      position: relative;
      width: 28px;
      height: 28px;
    }
  }
}
</style>
