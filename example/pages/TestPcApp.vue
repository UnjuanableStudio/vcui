<template>
    <vc-pc-app-layout v-model:show-left-panel="lp" :inBox="false">
        <template #header-left>
            <span style="color: #f0f2f4">header-left</span>
        </template>
        <template #header-right>
            <span style="color: red">dsadasd</span>
        </template>
        <template #left-panel>
            <ul style="color: #f0f2f4; text-align: center">
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </template>
        <template #content="cont">
            {{cont.width}}
            {{cont.height}}
        </template>
    </vc-pc-app-layout>
</template>

<script>
import {VcPcAppLayout} from "../../src/";
import {ref} from "vue";

export default {
    name: "TestPcApp",
    components: {VcPcAppLayout},
    setup() {
        const lp = ref(true)
        return {lp}
    }
}
</script>

<style scoped>

</style>
