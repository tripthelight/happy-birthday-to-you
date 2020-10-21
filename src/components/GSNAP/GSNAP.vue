<template>
  <div>
    <div id="wheel"></div>
  </div>
</template>

<script>
import { gsap, ScrollTrigger, Draggable, MotionPathPlugin, TweenLite, TweenMax, PixiPlugin } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin, TweenLite, TweenMax, PixiPlugin)

export default {
  name: 'GSAP',
  data () {
    return {
    }
  },
  methods: {
    createBox (i, radius, center, total, slice) {
      var num = i + 1
      var hue = i / total * 360
      var angle = i * slice
      var x = center + radius * Math.sin(angle)
      var y = center - radius * Math.cos(angle)

      var node = document.createElement('DIV')
      node.classList.add('box')
      node.setAttribute('data-num', num)
      var textnode = document.createTextNode(num)
      node.appendChild(textnode)
      var box = document.getElementById('wheel').appendChild(node)
      node.style.cssText = `
        position: absolute;
        border: 4px solid black;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 24px;
        width: 50px;
        height: 50px;
        top: 0;
        left: 0;
        cursor: pointer;
      `

      TweenLite.set(box, {
        backgroundColor: 'hsl(' + hue + ',100%,50%)',
        rotation: angle + '_rad',
        xPercent: -50,
        yPercent: -50,
        x: x,
        y: y
      })
    }
  },
  mounted () {
    const wheel = document.getElementById('wheel')

    var border = 1
    var radius = Math.min(window.innerWidth, window.innerHeight) * 0.7 / 2
    var center = (Math.min(window.innerWidth, window.innerHeight) * 0.7 / 2) - 1 / 2
    var total = 12
    var slice = 2 * Math.PI / 12

    TweenLite.set(wheel, {
      width: (radius * 2) - border,
      height: (radius * 2) - border,
      xPercent: -50,
      yPercent: -50
    })

    for (var i = 0; i < total; i++) {
      this.createBox(i, radius, center, total, slice)
    }

    // Draggable.create(document.getElementById('wheel'), {
    //   type: 'rotation',
    //   minimumMovement: 10,
    //   inertia: true
    // })
  }
}
</script>

<style lang="scss" scoped>
#wheel {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 10px solid black;
}
.box {
  position: absolute;
  border: 4px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  cursor: pointer;
}
</style>
