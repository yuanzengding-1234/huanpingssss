<template>
    <p>
      <i :class="'iconfont '+icon"></i>
      {{tit}}
    </p>
</template>

<script>
    export default {
        name: "tit",
      props:["tit","icon"]
    }
</script>

<style scoped>
 i{
   font-size: .16rem;
   margin-right: .2rem;
   color: #119eee;
   margin-left: .2rem;
 }
  p{
    font-size: .16rem;
    color: #333;
    height: .6rem;
    line-height: .6rem;
    border: .01rem solid #ccc;
    border-radius: .04rem;
    width: 100%;
  }
</style>
