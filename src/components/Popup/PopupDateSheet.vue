<template>
  <div class="popup dateSheet">
    <div class="bg"></div>
    <div class="popWrap">
      <div class="dateMonth">
        <Month-Spin></Month-Spin>
      </div>
    </div>
  </div>
</template>

<script>
import MonthSpin from '@/components/Popup/date/MonthSpin'
export default {
  name: 'PopupDateSheet',
  data () {
    return {
    }
  },
  components: {
    MonthSpin
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: relative;
  &.dateSheet {
    .popWrap {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      z-index: 1001;
      .dateMonth {
        background-color: #FFF;
      }
      .dateMonth {
        position: fixed;
        left: -35%;
        top: -20%;
        width: 120vw;
        height: 120vw;
        border-radius: 100%;
        background-color: #FFF;
      }
    }
  }
  .bg {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    box-sizing: border-box;
    z-index: 1000;
    background-color: rgba(0,0,0,.8);
  }
}
::v-deep .swiper-container {
  position: fixed;
  left: 0;
  top: 0;
  width: 120vw;
  height: 120vw;
  border-radius: 100%;
  .swiper-wrapper {
    .swiper-slide {
      box-sizing: border-box;
      border: 1px solid #FF0000;
    }
  }
}
</style>
