<template>
    <div class="top">
      <zuo></zuo>
      <zhong></zhong>
      <you></you>
    </div>
</template>

<script>
  import zuo from "./zuo/zuo"
  import zhong from "./zhong/zhong"
  import you from "./you/you"
    export default {
        name: "index",
      components:{zuo,zhong,you}
    }
</script>

<style scoped>
  .top{
    display: flex;
    justify-content: space-between;
  }
</style>
