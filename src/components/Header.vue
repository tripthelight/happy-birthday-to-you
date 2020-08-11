<template>
  <div class="header">
    <Gnb />
  </div>
</template>

<script>
import Gnb from './Gnb/Gnb'
export default {
  name: 'Header',
  components: {
    Gnb
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 48px;
  background-color: #FFF;
  overflow-y: inherit;
  z-index: 990;
}
</style>
