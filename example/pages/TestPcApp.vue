<template>
    <vc-pc-app-layout v-model:show-left-panel="lp">
        <template #content="size">
            {{ size.width }}
            {{ size.height }}
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
