<template>
  <div class="zuo">
    <tit icon="icondata" tit="累计入库数据分析"></tit>
    <div class="zhongshu">
      <xz></xz>
      <ul class="list">
        <li>
          <p>累计入库</p>
          <span>0</span>
        </li>
        <li>
          <p>当日入库</p>
          <span>0</span>
        </li>
      </ul>
    </div>
    <tit icon="icondata" tit="实时入库数据分析"></tit>
    <div class="zhuzhuangtu">
      <xz></xz>
      <zhu></zhu>
    </div>
  </div>
</template>

<script>
  import tit from "../../Public/tit"
  import xz from "./xz"
  import zhu from "../../../histogram/zhu"
    export default {
        name: "index",
      components:{
          tit,xz,zhu
      }
    }
</script>

<style scoped>
  .zuo{
    width: 5.5rem;
  }
  .el-form:nth-of-type(1){
    display: flex;
  }
  .zhongshu{
    margin: .2rem 0;
    border: .01rem solid #ccc;
    border-radius: .04rem;
    padding: .2rem;
    box-sizing: border-box;
  }

  .list{
    width: 100%;
    margin: .2rem 0;
    display: flex;
  }
  .list li{
    flex: 1;
  }
  .list p{
    color: #666;
    font-size: .24rem;
    text-align: center;
    margin: .36rem 0;
  }
  .list span{
    font-size: .24rem;
    height: .7rem;
    display: inline-block;
    width: 100%;
    text-align: center;
  }
  .list li:nth-of-type(1) span{
    color: #119eee;
  }
  .list li:nth-of-type(2) span{
    color: #FCA234;
  }
  .list span:hover{
    font-size: .5rem;
  }
  .zhuzhuangtu{
    width: 100%;
    margin-top: .2rem;
    border: .01rem solid #ccc;
    border-radius: .04rem;
    height: 4.16rem;
    box-sizing: border-box;
    padding: .2rem;
  }
</style>
