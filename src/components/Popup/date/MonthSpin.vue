<template>
  <div class="propeller month">
    <div id="spinnerWrap">
      <Month-Date v-bind:pdata="angleState"></Month-Date>
    </div>
  </div>
</template>

<script>
import MonthDate from '@/components/Popup/date/MonthDate'
import pro from '@/plugins/pro'

export default {
  name: 'Month',
  components: {
    MonthDate
  },
  props: ['pdata'],
  template: '<div> {{pdata}} </div>',
  data () {
    return {
      angleState: 0
    }
  },
  methods: {
    proFn (a) {
      var propeller = new pro.Propeller(document.getElementById('spinnerWrap'), {
        inertia: 0.89,
        onRotate: function () {
          a.angleState = Math.floor(this.angle)
        }
      })
      console.log(propeller)
    }
  },
  mounted () {
    this.proFn(this)
  }
}
</script>

<style lang='scss' scoped>
#spinnerWrap {
  position: fixed;
  left: -35%;
  top: -20%;
  width: 120vw;
  height: 120vw;
  border-radius: 100%;
  background-color: #FFF;
}
.clsRpm01,
.clsRpm02,
.clsRpm03,
.clsRpm04 {
  position:absolute;right:0;bottom:-100px;width: 100px;height: 40px;border:1px solid #ff0000;z-index:100000;font-size:20px;color:#000;
}
.clsRpm02 {
  bottom:-140px;
}
.clsRpm03 {
  bottom:-180px;
}
.clsRpm04 {
  bottom:-220px;
}
</style>
