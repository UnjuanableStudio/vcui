<template>
  <div class="scroll-page" :class="{scrollbar:scrollbar}" ref="page">
    <slot name="header"></slot>
    <div class="full-page" v-for="n in size">
      <slot :name="'page' + n"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import {onMounted, reactive, ref} from "vue";

/**
 * 页面全幅滚动组件
 * @author LeeNux
 * @version 1.0.0
 */
export default {
  name: "ScrollPage",
  props: {
    size: {type: Number, default: 1}, // 滚动页数
    scrollbar: {type: Boolean, default: false}, // 是否显示滚动条
    scrollTime: {type: Number, default: 500},  // 滚动动画时常
  },
  setup(props) {
    const page = ref(null) // DOM
    const data = reactive({
      pWidth: document.body.clientWidth, // 单页宽度
      pHeight: document.body.clientHeight, // 单页高度
      current: 1, // 当前页
      isScrolling: false, // 是否正在滚动
      delta: 0, // 触发滚动偏移量
    })

    /**
     * 鼠标滚轮滚动事件
     * @param e
     * @returns {boolean}
     */
    const onWheel = (e) => {
      preventDefault(e)
      if (data.isScrolling) return false
      data.delta += e.deltaY
      if (data.current <= props.size) {
        if (data.delta > data.pHeight) {
          next()
        } else if (data.delta < -data.pHeight) {
          prev()
        }
      } else {
        if (page.value.scrollTop + e.deltaY <= props.size * data.pHeight) {
          if (data.delta < -data.pHeight * 2) {
            prev()
          } else {
            page.value.scrollTop = props.size * data.pHeight
          }
        } else {
          page.value.scrollTop += e.deltaY
          data.delta = 0
        }
      }
      return false
    }

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
     * 下一页
     */
    const next = () => {
      if (data.current <= props.size) {
        moveTo(data.current + 1)
      }
      data.delta = 0
    }

    /**
     * 上一页
     */
    const prev = () => {
      if (data.current > 1) {
        moveTo(data.current - 1)
      }
      data.delta = 0
    }

    /**
     * 跳转到第 p 页
     * @param {number} p
     */
    const moveTo = (p) => {
      data.isScrolling = true
      page.value.scrollTop = Math.ceil((p - 1) * data.pHeight + (p > props.size ? 3 : 0))
      data.current = p
      data.delta = 0
      setTimeout(() => {
        data.isScrolling = false
      }, props.scrollTime)
    }

    /**
     * 滑动条滚动事件
     * @param e
     */
    const onScroll = (e) => {
      let p = parseInt((page.value.scrollTop / data.pHeight).toFixed(0)) + 1
      if (p > props.size) p = props.size + 1
      console.log(p)
      data.current = p
    }

    onMounted(() => {
      page.value.addEventListener('mousewheel', onWheel, {passive: false})
      page.value.addEventListener('DOMMouseScroll', onWheel, {passive: false})
      page.value.addEventListener('scroll', onScroll, {passive: false})
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