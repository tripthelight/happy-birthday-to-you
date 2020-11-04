<template>
  <div :class="['modal', popModalState?'show':'hide']">
    <div class="bg"></div>
    <div class="body">
      <div
        class="con"
        v-html="titleState"
      ></div>
      <div
        class="btnBottom"
        @click="$emit('close')"
      >
        <button>닫기</button>
      </div>
      <!-- <button
        class="btnClose"
        @click="$emit('close')"
      >
        <svg x="0" y="0" viewBox="0 0 22.88 22.88" style="enable-background:new 0 0 22.88 22.88;" xml:space="preserve">
          <path style="fill:#FFF;" d="M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0 c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z" />
          <g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
        </svg>
        <span>close popup</span>
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    popModalState: {
      type: Boolean,
      require: true,
      default: false
    },
    titleState: {
      type: String,
      require: true,
      default: ''
    }
  },
  data () {
    return {
      message: 'err',
      modalState: false
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  // animation-duration: 3s;
  // animation-name: aniShow;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    z-index: 9000;
  }
  .body {
    position: fixed;
    left: 50%;
    top: 50%;
    width: 80%;
    height: auto;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    padding: 0;
    background-color: rgba(255,255,255,1);
    border-radius: 8px;
    z-index: 9001;
    overflow: hidden;
    .con {
      display: block;
      word-break: keep-all;
      font-size: 12px;
      text-align: center;
      color: #000;
      padding: 20px 10px 54px;
    }
    .btnBottom {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 34px;
      background-color: #f65656;
      button {
        width: 100%;
        height: 34px;
        text-align: center;
        color: #FFF;
        font-size: 14px;
      }
    }
    .btnClose {
      position: absolute;
      right: 8px;
      top: 8px;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background-color: #000;
      z-index: 9002;
      svg {
        position: absolute;
        width: 8px;
        height: 8px;
        left: 50%;
        top: 50%;
        margin: -4px 0 0 -4px;
      }
      span {
        width: 1px;
        height: 1px;
        font-size: 0;
      }
    }
  }
  &.hide {
    display: none;
  }
  &.show {
    display: block;
  }
}
@keyframes aniShow {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
