<script>
import {computed, onMounted, ref, useSlots} from "vue";

export default {
    name: "PcAppLayout",
    props: {
        leftPanelWidth: {type: Number, default: 350},
        rightPanelWidth: {type: Number, default: 270},
        showLeftPanel: {type: Boolean, default: true},
        showRightPanel: {type: Boolean, default: true},
        showLeftToggle: {type: Boolean, default: false},
        inBox: {type: Boolean, default: true},
    },
    emits: ['update:showLeftPanel'],
    setup(props, ctx) {
        const slots = useSlots()
        const content = ref(null)
        const contentWidth = ref(0)
        const contentHeight = ref(0)
        const toggleLeftPanel = () => {
            ctx.emit("update:showLeftPanel", !props.showLeftPanel)
        }
        const leftPanelStyle = computed(() => {
            return {
                width: props.showLeftPanel ? props.leftPanelWidth + 'px' : 0
            }
        })
        const mainStyle = computed(() => {
            return {
                width: props.showLeftPanel ? 'calc(100% - ' + props.leftPanelWidth + 'px)' : '100%'
            }
        })
        const containerStyle = computed(() => {
            const height = slots["footer"] ? 40 : 0
            return {
                height: 'calc(100% - ' + height + 'px)'
            }
        })
        const toolbarStyle = computed(() => {
            const width = props.showRightPanel ? props.rightPanelWidth : 0
            return {
                width: 'calc(100% - ' + width + 'px)'
            }
        })
        const contentStyle = computed(() => {
            const width = props.showRightPanel ? props.rightPanelWidth : 0
            const height = slots["toolbar"] ? 40 : 0
            return {
                width: 'calc(100% - ' + width + 'px)',
                height: 'calc(100% - ' + height + 'px)'
            }
        })
        const rightPanelStyle = computed(() => {
            return {
                width: props.showRightPanel ? props.rightPanelWidth + 'px' : '0'
            }
        })
        onMounted(() => {
            contentWidth.value = content.value.clientWidth
            contentHeight.value = content.value.clientHeight
            window && window.addEventListener("resize", () => {
                contentWidth.value = content.value.clientWidth
                contentHeight.value = content.value.clientHeight
            })
        })

        return {
            content,
            toggleLeftPanel,
            contentWidth, contentHeight,
            leftPanelStyle, mainStyle, containerStyle, toolbarStyle, contentStyle, rightPanelStyle
        }
    }
}
</script>


<template>
    <div class="pc-app-box" v-show="inBox"></div>
    <Teleport to=".pc-app-box" :disabled="!inBox">
        <header>
            <div class="left" v-if="$slots['header-left']">
                <slot name="header-left"></slot>
            </div>
            <div class="right" v-if="$slots['header-right']">
                <slot name="header-right"></slot>
            </div>
        </header>

        <main>
            <div class="left" :style="leftPanelStyle">
                <slot name="left-panel"></slot>
                <div class="close" v-if="showLeftToggle" @click="toggleLeftPanel">
                    <span v-if="showLeftPanel"> &blacktriangleleft; </span>
                    <span v-else> &blacktriangleright; </span>
                </div>
            </div>

            <div class="main" :style="mainStyle">
                <div class="container" :style="containerStyle">
                    <div class="toolbar" v-if="$slots['toolbar']" :style="toolbarStyle">
                        <slot name="toolbar"></slot>
                    </div>

                    <div class="content" ref="content" :style="contentStyle">
                        <slot name="content" :width="contentWidth" :height="contentHeight"></slot>
                    </div>

                    <div class="panel" v-show="showRightPanel" :style="rightPanelStyle">
                        <slot name="right-panel"></slot>
                    </div>
                </div>

                <footer v-if="$slots['footer']">
                    <div class="left">
                        <slot name="footer-left"></slot>
                    </div>
                    <div class="right">
                        <slot name="footer-right"></slot>
                    </div>
                </footer>
            </div>
        </main>
    </Teleport>
</template>


<style scoped>
.pc-app-box {
    min-width: 1200px;
    height: 100%;
}

header {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #003d88;
    padding: 0 10px;
    box-sizing: border-box;
}

header .left {
    position: relative;
    float: left;
    height: 100%;
}

header .right {
    position: relative;
    float: right;
    height: 100%;
}

main {
    position: relative;
    width: 100%;
    height: calc(100% - 50px);
    background-color: #f0f2f4;
}

main .left {
    position: relative;
    float: left;
    height: 100%;
    background-color: #191a1b;
}

main .left .close {
    position: absolute;
    top: 50px;
    right: -10px;
    width: 17px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
    cursor: pointer;
    background-color: #191a1b;
    color: #ffffff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    z-index: 99;
}

main .main {
    position: relative;
    float: left;
    height: 100%;
}

main .main .container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 40px);
}

main .main .container .toolbar {
    position: relative;
    width: 100%;
    height: 40px;
    background-color: white;
}

main .main .container .content {
    position: relative;
    width: 100%;
    height: calc(100% - 40px);
}

main .main .panel {
    position: absolute;
    top: 0;
    right: 0;
    width: 270px;
    height: 100%;
    background-color: #191a1b;
}

footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background-color: white;
}

footer .left {
    height: 100%;
    float: left;
    display: flex;
    justify-content: left;
}

footer .right {
    float: right;
    display: flex;
    justify-content: right;
}
</style>
