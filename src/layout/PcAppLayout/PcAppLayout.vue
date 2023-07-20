<script>
import {computed, onMounted, onUpdated, ref, watch, useSlots} from "vue";

export default {
  name: "PcAppLayout",
  props: {
    leftPanelWidth: {type: Number, default: 350},
    rightPanelWidth: {type: Number, default: 270},
    showLeftPanel: {type: Boolean, default: true},
    showRightPanel: {type: Boolean, default: true},
  },
  emits: ['update:showLeftPanel', 'update:showRightPanel'],
  setup(props, ctx) {
    const slots = useSlots() // slots
    const content = ref(null) // 内容显示区域的Dom
    const contentWidth = ref(0) // 内容区域宽度
    const contentHeight = ref(0) // 内容区域高度
    /**
     * 切换左边栏开关状态
     */
    const toggleLeftPanel = () => {
      ctx.emit("update:showLeftPanel", !props.showLeftPanel)
    }
    /**
     * 切换右边栏开关状态
     */
    const toggleRightPanel = () => {
      ctx.emit("update:showRightPanel", !props.showRightPanel)
    }
    /**
     * 计算Content区域的大小
     */
    const countContentSize = () => {
      contentWidth.value = content.value.clientWidth // 计算的Content宽度
      contentHeight.value = content.value.clientHeight // 计算的Content高度
    }
    /**
     * 左边栏动态样式
     * @type {ComputedRef<{width: string|number}>}
     */
    const leftPanelStyle = computed(() => {
      return {
        width: props.showLeftPanel ? props.leftPanelWidth + 'px' : 0
      }
    })
    /**
     * 右边栏动态样式
     * @type {ComputedRef<{width: string|number}>}
     */
    const rightPanelStyle = computed(() => {
      return {
        width: props.showRightPanel ? props.rightPanelWidth + 'px' : 0
      }
    })
    /**
     * 除左边栏外右侧核心区样式
     * @type {ComputedRef<{width: string|string}>}
     */
    const mainStyle = computed(() => {
      return {
        width: props.showLeftPanel ? 'calc(100% - ' + props.leftPanelWidth + 'px)' : '100%'
      }
    })
    /**
     * Main中除掉Footer后区域样式
     * @type {ComputedRef<{height: string}>}
     */
    const containerStyle = computed(() => {
      const height = slots["footer"] ? 40 : 0
      return {
        height: 'calc(100% - ' + height + 'px)'
      }
    })
    /**
     * Main中Container上部工具栏样式
     * @type {ComputedRef<{width: string}>}
     */
    const toolbarStyle = computed(() => {
      const width = props.showRightPanel ? props.rightPanelWidth : 0
      return {
        width: 'calc(100% - ' + width + 'px)'
      }
    })
    /**
     * Container中Content内容区域样式
     * @type {ComputedRef<{width: string, height: string}>}
     */
    const contentStyle = computed(() => {
      const offsetWidth = props.showRightPanel ? props.rightPanelWidth : 0
      const offsetHeight = slots["toolbar"] ? 40 : 0
      return {
        width: 'calc(100% - ' + offsetWidth + 'px)',
        height: 'calc(100% - ' + offsetHeight + 'px)'
      }
    })

    onMounted(() => {
      countContentSize()
      window && window.addEventListener("resize", () => {
        countContentSize()
      })
    })

    onUpdated(() => {
      countContentSize()
    })

    return {
      content,
      toggleLeftPanel, toggleRightPanel,
      contentWidth, contentHeight,
      leftPanelStyle, mainStyle, containerStyle, toolbarStyle, contentStyle, rightPanelStyle
    }
  }
}
</script>


<template>
  <main>
    <div class="left" :style="leftPanelStyle">
      <slot name="left-panel"></slot>
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
        <slot name="footer"></slot>
      </footer>
    </div>
  </main>
</template>


<style scoped>
main {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f0f2f4;
}

main .left {
  position: relative;
  float: left;
  height: 100%;
  background-color: #191a1b;
  color: #fff;
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
  line-height: 40px;
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
  color: #fff;
}

footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: white;
}
</style>
