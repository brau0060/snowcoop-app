<template>
  <div id="dashboardPage">
    <el-container>
      <el-main>
        <p class="name">Hi {{ $store.state.user.firstName }}, welcome to snowcoop</p>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>
