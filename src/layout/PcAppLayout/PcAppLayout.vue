<template>
    <header>
        <div class="left">
            <slot name="header-left"></slot>
        </div>
        <div class="right">
            <slot name="header-right"></slot>
        </div>
    </header>

    <main ref="main">
        <div class="left" v-show="showLeftPanel" :style="leftPanelStyle">
            <slot name="left-panel"></slot>
            <div class="close" v-if="showLeftClose" @click="hideLeftPanel">
                <span>X</span>
            </div>
        </div>

        <div class="main" :style="mainStyle">
            <div class="container">
                <div class="toolbar" :style="toolbarStyle">
                    <slot name="toolbar"></slot>
                </div>

                <div class="content" ref="container" :style="contentStyle">
                    <slot name="content"></slot>
                </div>

                <div class="panel" v-show="showRightPanel" :style="rightPanelStyle">
                    <slot name="right-panel"></slot>
                </div>
            </div>

            <footer>
                <div class="left">
                    <slot name="footer-left"></slot>
                </div>
                <div class="right">
                    <slot name="footer-right"></slot>
                </div>
            </footer>
        </div>

    </main>
</template>

<script>
import {computed} from "vue";

export default {
    name: "PcAppLayout",
    props: {
        leftPanelWidth: {type: Number, default: 350},
        rightPanelWidth: {type: Number, default: 270},
        showLeftPanel: {type: Boolean, default: true},
        showRightPanel: {type: Boolean, default: true},
        showLeftClose: {type: Boolean, default: false},
    },
    emits: ['update:showLeftPanel'],
    setup(props, ctx) {
        const hideLeftPanel = () => {
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
        const toolbarStyle = computed(() => {
            const width = props.showRightPanel ? props.rightPanelWidth : 0
            return {
                width: 'calc(100% - ' + width + 'px)'
            }
        })
        const contentStyle = computed(() => {
            const width = props.showRightPanel ? props.rightPanelWidth : 0
            return {
                width: 'calc(100% - ' + width + 'px)'
            }
        })
        const rightPanelStyle = computed(() => {
            return {
                width: props.showRightPanel ? props.rightPanelWidth + 'px' : '0'
            }
        })

        return {
            hideLeftPanel,
            leftPanelStyle, mainStyle, toolbarStyle, contentStyle, rightPanelStyle
        }
    }
}
</script>

<style scoped>
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
    font-size: 12px;
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
