<template>
  <div class="propeller month">
    <div id="spinnerWrapMonth">
      <Month-Date :isAngleRes="angleState"></Month-Date>
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
  data () {
    return {
      angleState: 0,
      startAngle: 0
    }
  },
  methods: {
    async proFn (a) {
      var propeller = await new pro.Propeller(document.getElementById('spinnerWrapMonth'), {
        inertia: 0.89,
        angle: 0,
        speed: 15,
        onRotate: function () {
          a.angleState = Math.floor(this.angle)
          a.$store.commit('setAngStateMonth', this.angle)
        }
      })
      propeller.bind()
    }
  },
  mounted () {
    this.proFn(this)
  }
}
</script>

<style lang='scss' scoped>
#spinnerWrapMonth {
  position: fixed;
  left: -35%;
  top: -20%;
  width: 100vw;
  height: 100vw;
  border-radius: 100%;
  background-color: #FFF;
}
</style>
