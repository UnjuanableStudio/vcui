<script>
import {markRaw, onMounted, ref} from 'vue'

export default {
    name: "PointerPath",
    props: {
        width: {type: Number, default: 200},
        height: {type: Number, default: 200},
        color: {type: String, default: "red"},
        lineWidth: {type: Number, default: 3},
    },
    emits: ["change"],
    setup(props, ctx) {
        const canvas = ref(null)
        const flag = ref(false)
        const points = markRaw([])
        let ctx2d = null

        onMounted(() => {
            ctx2d = canvas.value.getContext("2d");
            ctx2d.lineWidth = props.lineWidth;
            ctx2d.strokeStyle = props.color; //线条
        })

        const onStart = (e) => {
            ctx2d.clearRect(0, 0, props.width, props.height);
            flag.value = true
            points.length = 0
            ctx2d.beginPath()
        }

        const onMove = (e) => {
            if (!flag.value) return;
            const x = e.clientX - canvas.value.offsetLeft
            const y = e.clientY - canvas.value.offsetTop
            const point = {x: props.width - x, y: props.height - y}
            ctx2d.lineTo(x, y);
            ctx2d.stroke();
            points.push(point)
        }

        const onEnd = (e) => {
            flag.value = false
            ctx.emit("change", points)
        }

        return {onEnd, onStart, onMove, canvas}
    }
}
</script>

<template>
    <canvas ref="canvas" :width="width" :height="height"
            @pointerdown="onStart"
            @pointermove="onMove"
            @pointerup="onEnd"
            @pointerleave="onEnd"></canvas>
</template>
