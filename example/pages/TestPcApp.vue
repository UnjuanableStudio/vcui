<template>
    <vc-pc-app-layout :show-left-panel="true" :inBox="false">
        <template #header-left>
            <span style="color: #f0f2f4">header-left</span>
        </template>
        <template #header-right>
            <span style="color: red">dsadasd</span>
        </template>
        <template #left-panel>
            <sidebar :options="leftMenuList"></sidebar>
        </template>
        <template #content="cont">
            {{ cont.width }}
            {{ cont.height }}
        </template>
    </vc-pc-app-layout>
</template>

<script setup>
import {VcPcAppLayout} from "../../src/";
import Sidebar from "../../src/component/Sidebar/Sidebar.vue";
import {useSideBarConfig} from "../../example/components/TestSidebar"

const {leftMenuList} = useSideBarConfig()
</script>

<style scoped>

</style>
