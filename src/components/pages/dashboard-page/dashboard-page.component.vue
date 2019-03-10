<template>
  <div id="dashboardPage">
    <el-container>
      <!-- Add side nav to dashboard -->
      <side-navigation/>
      <el-main>
        <p class="name">Hi {{userInfo}}, welcome to Snowcoop</p>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
