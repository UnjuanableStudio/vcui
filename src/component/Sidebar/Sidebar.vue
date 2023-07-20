<script>
import {computed, onMounted, reactive, ref, useSlots} from "vue";

export default {
  name: "Sidebar",
  props: {
    labelSize: {type: Number, default: 80},
    collapsed: {type: Boolean, default: true},
    activated: {type: Number, default: -1},
  },
  emits: ["update:collapsed", "update:activated"],
  setup(props, ctx) {
    const slots = useSlots()
    const mounted = ref(false)
    const activatedComponent = ref(null)
    const list = reactive([])
    const switchTab = (index) => {
      ctx.emit('update:collapsed', true)
      ctx.emit('update:activated', index)
    }
    const closeComponentPanel = () => {
      ctx.emit('update:collapsed', false)
      ctx.emit('update:activated', -1)
    }
    const labelActiveStyle = computed(() => {
      if (props.activated >= 0) {
        return {
          top: props.activated * props.labelSize + 'px',
          height: props.labelSize + 'px',
        }
      }
      return {
        display: 'none'
      }
    })
    const labelStyle = computed(() => {
      return {
        width: props.labelSize + 'px',
        height: props.labelSize + 'px',
        'font-size': fontSize.value + 'px'
      }
    })
    const fontSize = computed(() => {
      return props.labelSize / 6
    })
    const componentStyle = computed(() => {
      return {
        left: props.labelSize + 'px',
        width: 'calc(100% - ' + props.labelSize + 'px )'
      }
    })

    slots.default().forEach(item => {
      const data = {
        label: item.props.label,
        icon: item.props.icon ?? "&nbsp;"
      }
      list.push(data)
    })

    onMounted(() => {
      mounted.value = true
      if (props.activated >= 0) {
        switchTab(props.activated)
      }
    })

    return {
      mounted, activatedComponent, list,
      labelActiveStyle, labelStyle, fontSize, componentStyle,
      switchTab, closeComponentPanel
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="tabs-bar">
      <div class="tabs">
        <ul>
          <template v-for="(item,index) in list">
            <li :style="labelStyle" @click="switchTab(index)">
              <span v-html="item.icon"></span>
              <label>{{ item.label }}</label>
            </li>
          </template>
        </ul>
        <div class="activated" :style="labelActiveStyle"></div>
      </div>
    </div>
    <div class="component" v-if="collapsed" :style="componentStyle">
      <slot></slot>
    </div>
    <div class="close" v-show="collapsed" @click="closeComponentPanel">
      <span> &blacktriangleleft; </span>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  position: relative;
  left: 0;
  top: 0;
  height: 100%;
}

.sidebar .tabs-bar {
  display: inline-block;
  position: absolute;
  height: 100%;
  background-color: #191a1b;
}

.sidebar .tabs-bar .tabs {
  position: relative;
  top: 0;
  height: 100%;
  color: #808080;
}


.sidebar .tabs-bar .tabs li {
  position: relative;
  text-align: center;
  cursor: pointer;
  z-index: 2;
}

.sidebar .tabs-bar .tabs li span {
  width: 100%;
  height: 60%;
  line-height: 2;
  display: block;
}

.sidebar .tabs-bar .tabs li label {
  display: block;
  width: 100%;
  height: 40%;
  line-height: 1.2;
}

.sidebar .tabs-bar .tabs li.active {
  transition: all 0.9s;
  color: white;
}

.sidebar .tabs-bar .tabs .activated {
  position: absolute;
  top: 0;
  right: 0;
  width: 94%;
  transition: all 0.5s;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: #262728;
}

.sidebar .component {
  display: block;
  position: absolute;
  z-index: 99;
  height: 100%;
  background-color: #262728;
}

.sidebar .component .container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.sidebar .close {
  position: absolute;
  top: 50px;
  right: -10px;
  width: 17px;
  height: 60px;
  line-height: 55px;
  text-align: right;
  font-size: 24px;
  cursor: pointer;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  z-index: 99;
  background-color: #262728;
  color: white;
}


/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
.container::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: #2f2f2f;
}

/*定义滚动条轨道 内阴影+圆角*/
.container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #2f2f2f;
}

/*定义滑块 内阴影+圆角*/
.container::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
