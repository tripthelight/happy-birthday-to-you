<template>
  <div>
    <carousel-3d :width="100" :height="20" :perspective="0" :space="100" :display="12">
      <slide :index="0">1</slide>
      <slide :index="1">2</slide>
      <slide :index="2">3</slide>
      <slide :index="3">4</slide>
      <slide :index="4">5</slide>
      <slide :index="5">6</slide>
      <slide :index="6">7</slide>
      <slide :index="7">8</slide>
      <slide :index="8">9</slide>
      <slide :index="9">10</slide>
      <slide :index="10">11</slide>
      <slide :index="11">12</slide>

    </carousel-3d>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  name: 'PopupDateSheet',
  components: {
    Carousel3d,
    Slide
  }
}
</script>

<style lang="scss" scoped>
</style>
