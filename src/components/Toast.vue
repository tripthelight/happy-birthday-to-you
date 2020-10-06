<template>
  <div :class="['toast', toastState?'show':'hide']">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      message: 'err',
      toastState: false
    }
  }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  bottom: -70px;
  transform: translateX(-50%);
  padding: 0;
  box-sizing: border-box;
  display: inline-block;
  padding: 10px;
  font-size: 12px;
  text-align: center;
  color: #fff;
  background-color: #000;
  border-radius: 4px;
  transition: bottom .4s;
  &.hide {
    bottom: -70px;
    transition: bottom .4s;
  }
  &.show {
    bottom: 0;
    transition: bottom .4s;
  }
}
</style>
