<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="nav-1">
          <span>
            <img src="/static/images/logo.png" alt="">
            环评文件智能校核平台
          </span>
          <span>
            <i class="iconfont iconsousuo"></i>
            <i class="iconfont iconxinxi2"></i>
            <i class="iconfont iconzhuye"></i>
            <span></span>
            <p>
              <img src="/static/images/logo.png" alt="">
              Sarare
              <i class="iconfont icongengduo"></i>
            </p>
          </span>
        </div>
        <ul class="nav-2">
          <router-link to="/home" tag="li">首页</router-link>
          <router-link to="/a" tag="li">入库文件实况分析</router-link>
          <router-link to="/b" tag="li">文件查重</router-link>
          <router-link to="/c" tag="li">文件质检</router-link>
          <router-link to="/d" tag="li">备案登记表智能复核</router-link>
          <router-link to="/e" tag="li">个性化对接服务</router-link>
          <router-link to="/f" tag="li">系统管理</router-link>
        </ul>
      </el-header>
      <router-view/>
    </el-container>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped>
  .el-container {
    box-sizing: border-box;
    width: 100%;
  }

  header {
    box-sizing: border-box;
    width: 100%;
    height: 1.63rem !important;
    background: rgba(17, 158, 238, 1);
    padding: 0 .3rem;
    position: relative;
  }

  .nav-1 {
    height: .88rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-self: center;
  }

  .nav-1 > span:nth-of-type(1) {
    font-size: .24rem;
    color: #fff;
    line-height: .88rem;
  }

  .nav-1 > span:nth-of-type(1) > img {
    margin-right: .15rem;
    width: .32rem;
    height: .32rem;
    vertical-align: middle;
  }

  .nav-1 > span:nth-of-type(2) {
    font-size: .28rem;
    color: #fff;
    display: flex;
    line-height: .88rem;
  }

  .nav-1 > span:nth-of-type(2) > p {
    font-size: .2rem;
    line-height: .88rem;
  }

  .nav-1 > span:nth-of-type(2) > p > img {
    margin: 0 .24rem 0 .12rem;
  }

  .nav-1 > span:nth-of-type(2) > p > i {
    margin-left: .16rem;
  }

  .nav-1 > span:nth-of-type(2) > i {
    margin: 0 .12rem;
  }

  .nav-1 > span:nth-of-type(2) > span {
    width: .01rem;
    background: #fff;
    display: inline-block;
    height: .28rem;
    margin: .3rem .12rem;

  }

  .nav-1 > span:nth-of-type(2) > p > img {
    width: .28rem;
    height: .28rem;
    vertical-align: middle;
  }

  .nav-2 {
    height: .75rem;
    width: 18.56rem;
    background: #fff;
    border-radius: .04rem .04rem 0 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: space-around;
    align-self: center;
  }

  .nav-2 li {
    width: 2rem;
    height: .44rem;
    text-align: center;
    line-height: .44rem;
    color: #333;
    font-size: .18rem;
    margin-top: .15rem;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .router-link-active {
    background: rgba(17, 158, 238, 1);
    border-radius: 4px;
    color: #fff !important;
  }
</style>
