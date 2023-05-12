<template>
    <vc-pc-app-layout :show-left-panel="true" :inBox="false" :leftPanelWidth="collapsed?400:80">
        <template #header-left>
            <span style="color: #f0f2f4">header-left</span>
        </template>
        <template #header-right>
            <span style="color: red">dsadasd</span>
        </template>
        <template #left-panel>
            <sidebar :options="leftMenuList" v-model:collapsed="collapsed">
                <sidebar-item label="按钮" icon="&lt"
                              :component="defineAsyncComponent(() => import('../components/TestSidebar/TestSidebarItem.vue'))">
                    <template #icon>a</template>
                </sidebar-item>
            </sidebar>
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
import {defineAsyncComponent, ref} from "vue";
import SidebarItem from "../../src/component/Sidebar/SidebarItem.vue";

const {leftMenuList} = useSideBarConfig()
const collapsed = ref(false)
</script>

<style scoped>

</style>
