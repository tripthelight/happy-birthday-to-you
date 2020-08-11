<template>
  <div class="home">
    <div class="topWrap">
      <ul class="profile">
        <li><img src="@/assets/img/ngr_dummy.jpg" alt="남규리"></li>
        <li>name</li>
        <li>1985 / 4 / 5</li>
      </ul>
      <ul class="btnBlock">
        <li><span>좋아요</span></li>
        <li><span>측하 메세지 보내기</span></li>
      </ul>
    </div>
    <div class="cardWrap">
      <dl class="card">
        <dt><img src="@/assets/img/ngr_dummy.jpg" alt="남규리"></dt>
        <dd>name</dd>
        <dd>1985 / 4 / 5</dd>
        <dd>좋아요</dd>
        <dd>측하 메세지 보내기</dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  padding: 0;
  box-sizing: border-box;
  .topWrap {
    display: block;
    padding: 16px;
    box-sizing: border-box;
    ul {
      position: relative;
      display: block;
      padding: 16px;
      box-sizing: border-box;
      border-radius: 12px;
      &.profile {
        padding: 20px 0 20px;
        background-color: #EBEBEB;
        li {
          &:first-of-type {
            width: 60px;
            height: 60px;
            border-radius: 1000px;
            overflow: hidden;
          }
          position: relative;
          display: block;
          margin: 0 auto;
          text-align: center;
          margin-top: 4px;
          font-size: 14px;
        }
      }
      &.btnBlock {
        padding: 20px;
        background-color: #EBEBEB;
        margin-top: 12px;
        display: table;
        width: 100%;
        li {
          &:first-of-type {
            padding-left: 0;
            width: 20px;
            span {
              width: 28px;
              height: 28px;
              font-size: 0;
              line-height: 0;
            }
          }
          display: table-cell;
          vertical-align: middle;
          padding: 0;
          padding-left: 10px;
          span {
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            display: block;
            background-color: #FF0000;
            border-radius: 1000px;
            text-align: center;
          }
        }
      }
    }
  }
  .cardWrap {
    display: block;
    padding: 16px;
    box-sizing: border-box;
    // box-shadow: 3px 3px 12px 1px #999;
    .card {
      display: block;
      padding: 12px;
      box-sizing: border-box;
      border-radius: 12px;
      box-shadow: 1px 1px 5px 1px rgba(0,0,0,0.1);
    }
  }
}
</style>
