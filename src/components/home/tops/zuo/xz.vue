<template>
  <el-form ref="form" :model="form" label-width=".6rem">
    <el-form-item label="行业:" class="scoped">
      <el-select v-model="form.industry" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="地区:" class="scoped">
      <el-select v-model="form.area" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="时间:" class="scoped">
      <el-select v-model="form.time" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
</template>

<script>
    export default {
        name: "xz",
      data(){
        return{
          form:{
            industry:"",
            area:"",
            time:""
          }
        }
      },
    }
</script>

<style scoped>
  .scoped{
    margin: 0;
  }
  .scoped >>> label.el-form-item__label{
    font-size: .14rem;
    color: #666;
    height: .33rem;
    line-height: .33rem;
  }
  .scoped >>> .el-form-item__content,
  .scoped >>> .el-select,
  .scoped >>> .el-input__inner
  {
    height: .33rem;
    line-height: .33rem;
    color: #666;
    font-size: .14rem;
  }
  .scoped >>> .el-select__caret{
    line-height: .33rem;
  }
</style>
