<template>
  <div class="unj-image" :style="style">
    <img :src="src"
         :alt="alt"
         :style="{'object-fit': mode}"
         @load="onLoad"
         @error="onError">
    <div v-if="process.loading" class="unj-image-load">
      <slot name="loading">Loading</slot>
    </div>
    <div v-if="process.error" class="unj-image-error">
      <slot name="error">
        Error
      </slot>
    </div>
  </div>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "VcImage",
  emits: ['loading', 'error'],
  props: {
    src: {type: String},
    alt: {type: String},
    width: {type: [String, Number]},
    height: {type: [String, Number]},
    mode: {
      type: String,
      default: "fill",
      validator(value) {
        // https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit
        return ['contain', 'cover', 'fill', 'none', 'scale-down'].includes(value);
      }
    },
  },
  setup(props, ctx) {
    const process = reactive({
      loading: true,
      error: false,
    })

    const style = computed(() => {
      return {
        width: typeof props.width === 'number' ? props.width + 'px' : props.width,
        height: typeof props.height === 'number' ? props.height + 'px' : props.height,
      }
    })

    const onLoad = (e) => {
      process.loading = false;
      ctx.emit('loading', e);
    }

    const onError = (e) => {
      process.loading = false;
      process.error = true;
      ctx.emit('error', e);
    }

    return {process, style, onLoad, onError}
  }
}
</script>

<style scoped>
.unj-image {
  position: relative;
  overflow: hidden;
}

.unj-image .unj-image-load,
.unj-image .unj-image-error {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
}

.unj-image img {
  width: 100%;
  height: 100%;
}
</style>
