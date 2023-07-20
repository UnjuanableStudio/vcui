<template>
  <vc-pc-app-layout :show-left-panel="true" :inBox="false"
                    :leftPanelWidth="collapsed?400:80"
                    :showLeftPanel="sl"
                    :showRightPanel="sr">
    <template #left-panel>
      左边栏
    </template>
    <template #right-panel>
      右边栏
    </template>
    <template #content="cont">
      宽度：{{ cont.width }}
      高度：{{ cont.height }}
    </template>
    <template #toolbar>
      <a @click="sl=!sl">左边菜单</a>
      <a @click="sr=!sr">右边菜单</a>
    </template>
    <template #footer>
      Footer
    </template>
  </vc-pc-app-layout>
</template>

<script setup>
import {VcPcAppLayout} from "../../src/";
import {ref} from "vue";

const collapsed = ref(true)
const activate = ref(1)
const sl = ref(true)
const sr = ref(true)
</script>

<style scoped>

</style>
