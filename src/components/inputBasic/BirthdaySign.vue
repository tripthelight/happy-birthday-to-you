<template>
  <div class="wrap">
    <!-- 회원가입 입력 필드 -->
    <div
      :class="['formBlock', focusState?'focus':'blur', effChk?'effEnd':'', errChk?'err':'']"
      @click="datePopEvt"
    >
      <span class="title">{{ iptTitle }}</span>
      <div class="inputBlock">
        <span class="dateBirth">
          {{ `${$store.state.monthSelect}. ${$store.state.daySelect}` }}
        </span>
        <span class="bottomLineInit"></span>
        <span class="bottomLine"></span>
      </div>
      <span class="errMsg">{{ errMsg }}</span>
    </div>

    <!-- 생일 월일 선택 팝업 -->
    <Popup-Date-Sheet
      v-if="this.$store.state.popBirthState"
      :class="['popupDateSteet', this.$store.state.popBirthState]"
    />
  </div>
</template>

<script>
import PopupDateSheet from '@/components/Popup/PopupDateSheet.vue'

export default {
  name: 'InputBasic',
  props: [
    'value',
    'iptTitle'
  ],
  components: {
    PopupDateSheet
  },
  data () {
    return {
      focusState: false,
      effChk: false,
      errChk: false,
      endState: false,
      errMsg: '',
      message: '',
      date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      today: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate()
    }
  },
  methods: {
    focusFn () {
    },
    blurFn (event) {
    },
    changeMessage (event) {
    },
    datePopEvt () {
      this.$store.commit('setPopBirthState', true)
    }
  },
  mounted () {
    if (this.$store.state.monthSelect > 0 && this.$store.state.daySelect > 0) {
      this.focusState = true
      this.effChk = true
      this.errMsg = '생년월일이 입력되었습니다.'
      this.message = `${this.$store.state.monthSelect}. ${this.$store.state.daySelect}`
      this.$emit('chgBirthdaySignRes', this.message)
      this.$emit('endStateResBirthdaySign', true)
    } else if (this.$store.state.monthSelect === 0 && this.$store.state.daySelect === 0) {
      this.focusState = false
      this.effChk = false
      this.message = ''
      this.$emit('endStateResBirthdaySign', false)
    }
  },
  beforeCreate () {
    // console.log('beforeCreate')
  },
  created () {
    // console.log('created')
  },
  beforeMount () {
    // console.log('beforeMount')
  },
  beforeUpdate () {
    // console.log('beforeUpdate')
  },
  updated () {
    if (this.$store.state.monthSelect > 0 && this.$store.state.daySelect > 0) {
      this.focusState = true
      this.effChk = true
      this.errMsg = '생년월일이 입력되었습니다.'
      this.message = `${this.$store.state.monthSelect}. ${this.$store.state.daySelect}`
      this.$emit('chgBirthdaySignRes', this.message)
      this.$emit('endStateResBirthdaySign', true)
    } else if (this.$store.state.monthSelect === 0 && this.$store.state.daySelect === 0) {
      this.focusState = false
      this.effChk = false
      this.message = ''
      this.$emit('endStateResBirthdaySign', false)
    }
  },
  beforeDestroy () {
    // console.log('beforeDestroy')
  },
  destroyed () {
    // console.log('destroyed')
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  .formBlock {
    position: relative;
    width: 100%;
    padding: 24px 0 0 0;
    margin: 14px 0 0 0;
    span {
      display: block;
      &.title {
        position: absolute;
        left: 0;
        top: 24px;
        font-size: 16px;
        color: #999;
        z-index: 1;
        transition: top .2s, font-size .2s, color .2s;
      }
      &.bottomLineInit {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: #999;
        z-index: 10;
      }
      &.bottomLine {
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: #555;
        z-index: 10;
        transition: width .2s, left .2s;
      }
    }
    .inputBlock {
      .dateBirth {
        position: relative;
        width: 100%;
        border-radius: 0;
        border: 0 none;
        border-bottom: 1px solid #999;
        padding: 5px 0;
        font-size: 14px;
        background-color: transparent;
        font-size: 14px;
        min-height: 17px;
        opacity: 0;
        z-index: 9;
        /* &:focus {
          + span {
            &.bottomLine {
              width: 100%;
              left: 0;
              background-color: #000;
              transition: width .2s, left .2s;
            }
          }
        } */
      }
    }
    .errMsg {
      display: none;
      position: absolute;
      left: 0;
      bottom: -16px;
      width: 100%;
      font-size: 10px;
      color: #ff0000;
    }
    &.focus {
      .title {
        top: 8px;
        font-size: 10px;
        color: #000;
        transition: top .2s, font-size .2s, color .2s;
      }
      .inputBlock {
        .dateBirth {
          font-size: 14px;
          opacity: 1;
        }
      }
      span {
        &.bottomLine {
          width: 100%;
          left: 0;
          background-color: #000;
          transition: width .2s, left .2s;
        }
      }
    }
    &.err {
      .title {
        top: 8px;
        font-size: 10px;
        color: #FF0000;
        transition: top .2s, font-size .2s, color .2s;
      }
      .inputBlock {
        input {
          opacity: 1;
        }
      }
      .errMsg {
        display: block;
      }
      span {
        &.bottomLine {
          width: 100%;
          left: 0;
          background-color: #FF0000;
          transition: width .2s, left .2s;
        }
      }
    }
    &.effEnd {
      .title {
        top: 8px;
        font-size: 10px;
        color: #1e90ff;
        transition: top .2s, font-size .2s, color .2s;
      }
      .inputBlock {
        .dateBirth {
          font-size: 14px;
          opacity: 1;
        }
      }
      span {
        &.bottomLine {
          width: 100%;
          left: 0;
          background-color: #1e90ff;
          transition: width .2s, left .2s;
        }
      }
      .errMsg {
        display: block;
        color: #1e90ff;
      }
    }
  }
  ::v-deep .wrapper {
    z-index: 1000;
  }
  .popupDateSteet {
    // &.hide {
    //   display: none;
    // }
    // &.show {
    //   display: block;
    // }
  }
}
</style>
