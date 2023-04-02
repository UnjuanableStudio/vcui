<template>
    <header :class="headerClass">
        <slot name="header"></slot>
    </header>
    <div class="scroll-page" :class="{scrollbar:scrollbar}" ref="page">
        <div class="full-page" v-for="n in size">
            <slot :name="'page' + n"></slot>
        </div>
        <slot name="footer"></slot>
    </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";
import {debounce} from 'throttle-debounce';

/**
 * 页面全幅滚动组件
 * @author LeeNux
 * @version 1.0.0
 * TODO: 2.0.0 版本将通过页码来进行防抖。
 */
export default {
    name: "FullScrollView",
    props: {
        size: {type: Number, default: 1}, // 滚动页数
        scrollbar: {type: Boolean, default: false}, // 是否显示滚动条
        scrollTime: {type: Number, default: 500},  // 滚动动画时常
        headerClass: {type: String, default: null}
    },
    setup(props, ctx) {
        const page = ref(null) // DOM
        const data = reactive({
            pWidth: document.body.clientWidth, // 单页宽度
            pHeight: document.body.clientHeight, // 单页高度
            current: 1, // 当前页
            delta: 0, // 触发滚动偏移量
            isScrolling: false,
        })

        /**
         * 下一页
         */
        const next = () => {
            if (data.current <= props.size) {
                moveTo(data.current + 1)
            } else {
                data.delta = 0
            }
        }

        /**
         * 上一页
         */
        const prev = () => {
            if (data.current > 1) {
                moveTo(data.current - 1)
            } else {
                data.delta = 0
            }
        }

        /**
         * 跳转到第 p 页
         * @param {number} p
         */
        const moveTo = debounce(props.scrollTime, (p) => {
            data.isScrolling = true
            page.value.scrollTop = Math.ceil((p - 1) * data.pHeight + (p > props.size ? 3 : 0))
            data.current = p
            data.delta = 0
            setTimeout(() => {
                data.isScrolling = false
            }, props.scrollTime)
        }, {atBegin: true})

        /**
         * 阻止默认事件及事件冒泡
         * @param e
         */
        const preventDefault = (e) => {
            if (e.preventDefault) {
                e.preventDefault()
                e.stopPropagation()
            } else {
                e.cancelBubble = true
            }
        }

        /**
         * 鼠标滚轮滚动事件
         * @param e
         * @returns {boolean}
         */
        const onWheel = (e) => {
            preventDefault(e)
            if (data.current <= props.size) {
                data.delta += e.deltaY
                if (data.delta > data.pHeight) {
                    next()
                } else if (data.delta < -data.pHeight) {
                    prev()
                }
                return false
            }
            if (page.value.scrollTop + e.deltaY <= props.size * data.pHeight + 10) {
                data.delta += e.deltaY
                if (data.delta < -data.pHeight) {
                    prev()
                } else {
                    if (!data.isScrolling) {
                        page.value.scrollTop = props.size * data.pHeight
                    }
                }
            } else {
                if (!data.isScrolling) {
                    page.value.scrollTop += e.deltaY
                }
                data.delta = 0
            }
            return false
        }

        /**
         * 滑动条滚动事件
         * @param e
         */
        const onScroll = (e) => {
            let p = parseInt((page.value.scrollTop / data.pHeight).toFixed(0)) + 1
            if (p > props.size) p = props.size + 1
            data.current = p
            if (page.value.scrollTop < data.pHeight * props.size + 10 && ['mouseup', 'touchend'].indexOf(e.type) >= 0) {
                moveTo(data.current)
            }
        }

        const onKey = (e) => {
            preventDefault(e)
            console.log(e.keyCode)
            if (e.type === 'keydown') {
                if (e.keyCode === 33 || e.keyCode === 38) {
                    prev()
                } else if (e.keyCode === 34 || e.keyCode === 40) {
                    next()
                }
            }
        }

        onMounted(() => {
            page.value.addEventListener('mousewheel', onWheel, {passive: false})
            page.value.addEventListener('DOMMouseScroll', onWheel, {passive: false})
            page.value.addEventListener('scroll', onScroll, {passive: false})
            page.value.addEventListener('touchstart', onScroll, {passive: false})
            page.value.addEventListener('touchend', onScroll, {passive: false})
            page.value.addEventListener('mousedown', onScroll, {passive: false})
            page.value.addEventListener('mouseup', onScroll, {passive: false})
            document.addEventListener('keydown', onKey, {passive: false})
            document.addEventListener('keypress', onKey, {passive: false})
            document.addEventListener('keyup', onKey, {passive: false})
        })

        return {page, data}
    }
}
</script>

<style scoped>
.scroll-page {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
}

header {
    position: fixed;
    display: inline-block;
}

.full-page {
    width: 100vw;
    height: 100vh;
}

/* 默认样式：不显示滚动条 */
.scroll-page::-webkit-scrollbar {
    width: 0;
    height: 0;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.scrollbar::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background-color: rgba(0, 0, 0, 0.1);
}

/*定义滚动条轨道 内阴影+圆角*/
.scrollbar::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.1);
}

/*定义滑块 内阴影+圆角*/
.scrollbar::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.5);
}
</style>
