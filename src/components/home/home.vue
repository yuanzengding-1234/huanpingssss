<template>
  <el-main class="home">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    </el-breadcrumb>
    <tops></tops>
  </el-main>
</template>

<script>
  import tops from "./tops/tops"
  export default {
    name: 'HelloWorld',
    data () {
      return {

      }
    },
    components:{
      tops
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home{
    width: 100%;
    box-sizing: border-box;
  }
  .el-breadcrumb{
    margin-bottom: .2rem;
  }
  .el-breadcrumb__item{
    font-size: .2rem;
    color: #333;
  }
</style>
