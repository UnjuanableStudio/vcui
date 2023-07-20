<template>
  <vc-pc-app-layout :show-left-panel="true" :inBox="false" :leftPanelWidth="collapsed?400:80">
    <template #left-panel>
      <sidebar v-model:collapsed="collapsed" v-model:activated="activate">
        <sidebar-item label="按钮" :icon="$iconfont('icon-uploader',22)" :active="activate===0">
          <test-sidebar-item1></test-sidebar-item1>
        </sidebar-item>
        <sidebar-item label="按钮2" :icon="$iconfont('icon-uploader',22)" :active="activate===1" keepalive>
          <test-sidebar-item2></test-sidebar-item2>
        </sidebar-item>
      </sidebar>
    </template>
    <template #content="cont">
      {{ cont.width }}
      {{ cont.height }}
    </template>
    <template #toolbar>
      111
    </template>
    <template #footer>
     aaaa
    </template>
  </vc-pc-app-layout>
</template>

<script setup>
import {VcPcAppLayout} from "../../src/";
import Sidebar from "../../src/component/Sidebar/Sidebar.vue";
import SidebarItem from "../../src/component/Sidebar/SidebarItem.vue";
import TestSidebarItem1 from "../components/TestSidebar/TestSidebarItem1.vue";
import TestSidebarItem2 from "../components/TestSidebar/TestSidebarItem2.vue";
import {ref} from "vue";

const collapsed = ref(false)
const activate = ref(1)

</script>

<style scoped>

</style>
