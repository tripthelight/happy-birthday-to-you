<template>
  <div class="propeller month">
    <div id="spinnerWrapDay">
      <Day-Date :isAngleRes="angleState"></Day-Date>
    </div>
  </div>
</template>

<script>
import DayDate from '@/components/Popup/date/DayDate'
import pro from '@/plugins/pro'

export default {
  name: 'Day',
  components: {
    DayDate
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
      var propeller = await new pro.Propeller(document.getElementById('spinnerWrapDay'), {
        inertia: 0.89,
        angle: 0,
        speed: 15,
        onRotate: function () {
          a.angleState = Math.floor(this.angle)
          a.$store.commit('setAngStateDay', this.angle)
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
#spinnerWrapDay {
  position: fixed;
  right: -74%;
  bottom: -55%;
  width: 190vw;
  height: 190vw;
  border-radius: 100%;
  background-color: #FFF;
}
</style>
