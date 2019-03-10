<template>
  <div id="app">
    <el-container>
      <!-- REMOVE side-navigation FROM APP so solve back button issue -->
      <!-- Issue:
      on back button user is not logged out and router
      link displayes login with dashboard sidebar -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./app.component.js"></script>
<style src="./app.component.css"></style>
