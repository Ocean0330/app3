<template>
<div>
  <div class="common-layout">
    <el-container>
      <el-header>
        <router-link to="/">首页</router-link>
        <router-link to="/about">登录/注册</router-link>
        <router-link to="/login">证书查询</router-link>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
    <router-view></router-view>
  </div>
</div>
  
</template>


<script lang='ts' setup >


</script>


<style scoped lang='scss'>
</style>
