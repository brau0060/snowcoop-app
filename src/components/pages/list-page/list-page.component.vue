<template>
  <div id="listPage">
    <el-container>
      <side-navigation/>
      <el-main>
        <div class="list-wrapper">
          <div class="map-view-wrapper">
            <map-view v-if="addressList" v-bind:showList="true" v-bind:addressList="addressList"></map-view>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./list-page.component.js"></script>
<style src="./list-page.component.css"></style>