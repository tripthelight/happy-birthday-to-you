<template>
  <div class="popup dateSheet">
    <div class="bg"></div>
    <div class="popWrap">
      <div class="dateMonth">
        <Month-Spin></Month-Spin>
      </div>
      <div class="dateDay">
        <Day-Spin></Day-Spin>
      </div>
      <button
        class="btnClose"
        @click="popClose"
      >닫기</button>
    </div>
  </div>
</template>

<script>
import MonthSpin from '@/components/Popup/date/MonthSpin'
import DaySpin from '@/components/Popup/date/DaySpin'
export default {
  name: 'PopupDateSheet',
  data () {
    return {
    }
  },
  components: {
    MonthSpin,
    DaySpin
  },
  methods: {
    popClose () {
      this.$store.commit('setPopBirthState', false)
      console.log(this.$store.state.popBirthState)
    }
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
      .dateMonth,
      .dateDay {
        background-color: #FFF;
        position: fixed;
        border-radius: 100%;
      }
      .dateMonth {
        left: -35%;
        top: -20%;
        width: 100vw;
        height: 100vw;
      }
      .dateDay {
        right: -74%;
        bottom: -55%;
        width: 190vw;
        height: 190vw;
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
  .btnClose {
    position: fixed;
    right: 24px;
    top: 24px;
    width: 32px;
    height: 32px;
    background-color: #fff;
    border: 0 none;
    border-radius: 100%;
    font-size: 0;
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
