<template>
    <svg :class="{void:!blocked}" :width="width" :height="height" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <!-- mask 如果是黑色表示不透明, white 表示是完全透明 -->
            <mask id="mask">
                <rect :width="width" :height="height" fill="white"/>
                <ellipse :cx="cx" :cy="cy" :rx="rx" :ry="ry" fill="black"/>
            </mask>
        </defs>
        <rect :width="width" :height="height" mask="url(#mask)" :fill="color"/>
    </svg>
</template>

<script>
import {computed} from "vue";

export default {
    name: "EllipseMask",
    props: {
        width: {type: Number, required: true},
        height: {type: Number, required: true},
        cx: {type: Number},
        cy: {type: Number},
        rx: {type: Number},
        ry: {type: Number},
        color: {type: String, default: 'white'},
        blocked: {type: Boolean, default: false}
    },
    setup(props, ctx) {
        const width = computed(() => {
            return props.width ? props.width : props.rx * 2
        })
        const height = computed(() => {
            return props.height ? props.height : props.ry * 2
        })
        const cx = computed(() => {
            return props.cx ? props.cx : width.value / 2
        })
        const cy = computed(() => {
            return props.cy ? props.cy : height.value / 2
        })
        const rx = computed(() => {
            return props.rx ? props.rx : width.value / 2
        })
        const ry = computed(() => {
            return props.ry ? props.ry : height.value / 2
        })

        return {width, height, cx, cy, rx, ry}
    }
}
</script>

<style scoped>
.void {
    pointer-events: none;
}
</style>
