<template>
  <div>
    <div id="MonthDate"></div>
    <p class="clsRpm01Month" aria-hidden="true">{{ isAngleRes }}</p>
  </div>
</template>

<script>
import $ from 'jquery'
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TweenLite, TweenMax, PixiPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TweenLite, TweenMax, PixiPlugin)

window.jQuery = $
window.$ = $

export default {
  name: 'GSAP',
  props: ['isAngleRes'],
  data () {
    return {
      angStateProps: 0
    }
  },
  methods: {
    createBox (i, radius, center, total, slice) {
      var num = i + 1
      var angle = i * slice
      var x = center + radius * Math.sin(angle)
      var y = center - radius * Math.cos(angle)

      // var node = '<input type="radio" name="' + num + '"'
      // node += '/>'
      // node = document.createElement(node)

      var node = document.createElement('INPUT')
      // var node = document.createElement(input(type='radio', name=`${num}`, value=`${num}`))

      // var node = '<input type="radio" class="box" value="' + num + '" data-num="' + num + '" name=rdo"' + num + '"'
      // node += '/>'

      node.classList.add('box')
      node.setAttribute('data-num', num)
      node.setAttribute('name', 'rdoBirth')
      node.setAttribute('id', `rdoMonth_${num}`)
      node.setAttribute('type', 'radio')
      node.setAttribute('value', num)
      var labelRes = document.createElement('LABEL')
      labelRes.classList.add('boxInLabelMonth')
      labelRes.setAttribute('for', `rdo_${num}`)
      var textnode = document.createTextNode(num)
      labelRes.appendChild(textnode)
      var box = document.getElementById('MonthDate').appendChild(node)
      var labelbox = document.getElementById('MonthDate').appendChild(labelRes)
      node.style.cssText = `
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0;
        width: 40px;
        height: 40px;
        top: 0;
        left: 0;
        border-radius: 1000px;
        border: 0 none;
        color: transparent;
        background-color: #FFF;
        box-shadow: none;
        z-index: 1000;
      `
      labelRes.style.cssText = `
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        width: 50px;
        height: 50px;
        top: 0;
        left: 0;
        border-radius: 1000px;
        border: 0 none;
        color: #000;
        background-color: #FFF;
        box-shadow: none;
        z-index: 1001;
      `

      this.createBoxFn(box, labelbox, x, y, angle)
    },
    createBoxFn (boxRes, labelRes, xRes, yRes, angleRes) {
      TweenLite.set(boxRes, {
        rotation: 0.001,
        xPercent: -50,
        yPercent: -50,
        x: xRes,
        y: yRes
      })
      TweenLite.set(labelRes, {
        rotation: 0.001,
        xPercent: -50,
        yPercent: -50,
        x: xRes,
        y: yRes
      })
    },
    initDate () {
      const monthDate = document.getElementById('MonthDate')

      var border = 0
      var radius = Math.min(window.innerWidth, window.innerHeight) * 0.7 / 2
      var center = radius - 1 / 2
      var total = 12
      var slice = 2 * Math.PI / 12

      TweenLite.set(monthDate, {
        width: (radius * 2) - border,
        height: (radius * 2) - border,
        xPercent: -50,
        yPercent: -50
      })

      for (var i = 0; i < total; i++) {
        this.createBox(i, radius, center, total, slice)
      }
    },
    stateChkFn (t) {
      var slice = 2 * Math.PI / 12
      var radius = Math.min(window.innerWidth, window.innerHeight) * 0.7 / 2
      var center = radius - 1 / 2
      const rotateTargetMonth = document.getElementById('spinnerWrapMonth')
      rotateTargetMonth.addEventListener(
        'DOMSubtreeModified',
        () => {
          t.angStateProps = Math.floor(t.$store.state.angSteDateMonth)
          const res = -(t.angStateProps)
          t.rotateFn(res, slice, radius, center)
        }
      )
    },
    rotateFn (a, sliceRes, radiusRes, centerRes) {
      const r = document.querySelectorAll('.boxInLabelMonth')
      for (var i = 0; i < r.length; i++) {
        var angle2 = i * sliceRes
        var x2 = centerRes + radiusRes * Math.sin(angle2)
        var y2 = centerRes - radiusRes * Math.cos(angle2)
        $(r[i]).css({
          WebkitTransform: 'translate(-50%, -50%) translate(' + x2 + 'px ,' + y2 + 'px) rotate(' + a + 'deg)'
        })
        $(r[i]).css({
          '-moz-transform': 'translate(-50%, -50%) translate(' + x2 + 'px ,' + y2 + 'px) rotate(' + a + 'deg)'
        })
        $(r[i]).css('transform', 'translate(-50%, -50%) translate(' + x2 + 'px ,' + y2 + 'px) rotate(' + a + 'deg)')
      }
    },
    inputChecked (a) {
      $('#MonthDate').find('input[type="radio"]').next().click(function () {
        $(this).closest('#MonthDate').find('label').css({
          backgroundColor: '#FFF',
          color: '#000'
        })
        $(this).css({
          backgroundColor: '#000',
          color: '#FFF'
        })
        a.$store.commit('setMonthSelect', $(this).prev().val())
      })
    }
  },
  mounted () {
    this.initDate()
    this.stateChkFn(this)
    this.inputChecked(this)
  }
}
</script>

<style lang="scss" scoped>
#MonthDate {
  position: absolute;
  left: 50%;
  top: 50%;
}
input[type="radio"] {
  border: 0 none;
  &:checked {
    + label {
      background-color: #000;
    }
  }
}
.clsRpm01Month,
.clsRpm02Month,
.clsRpm03Month,
.clsRpm04Month {
  display: none;
  position:fixed;
  right: 0;
  bottom:-100px;
  width: 100px;
  height: 40px;
  border: 1px solid #ff0000;
  z-index: 100000;
  font-size: 0;
  color:#000;
}
.clsRpm02Month {
  bottom:-140px;
}
.clsRpm03Month {
  bottom:-180px;
}
.clsRpm04Month {
  bottom:-220px;
}
</style>
