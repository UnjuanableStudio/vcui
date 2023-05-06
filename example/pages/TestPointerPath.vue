<script setup>
import {ref} from "vue"
import PointerPath from "../../src/component/PointerPath/PointerPath.vue";

const points = ref([])
const onDraw = (p) => {
    points.value.length = 0
    p.forEach(item=>{
        points.value.push(item)
    })
}
</script>

<template>
    <pointer-path class="border" @change="onDraw"></pointer-path>
    <textarea>{{points}}</textarea>
</template>

<style scoped>
.border {
    border: #003d88 solid 3px;
}
</style>
