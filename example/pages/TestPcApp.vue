<template>
    <pc-app-layout v-model:show-left-panel="lp"></pc-app-layout>
</template>

<script>
import PcAppLayout from "@/layout/PcAppLayout/PcAppLayout.vue";
import {ref} from "vue";

export default {
    name: "TestPcApp",
    components: {PcAppLayout},
    setup() {
        const lp = ref(true)
        return {lp}
    }
}
</script>

<style scoped>

</style>
