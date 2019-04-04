<template>
<div id="mapView" class="map-view">ListPage
    <div class="map-view-wrapper">
        <div class="addres-list-wrapper" v-if="showList">
        Some List
        </div>
        <div class="map-wrapper">
            <GmapMap
                :center="{lat:10, lng:10}"
                :zoom="7"
                style="width: 100%; height: 400px">
                <GmapMarker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                @click="center=m.position"/>
            </GmapMap>
        </div>
    </div>
</div>
</template>
<script src="./map-view.component.js"></script>
<style src="./map-view.component.css" scoped></style>