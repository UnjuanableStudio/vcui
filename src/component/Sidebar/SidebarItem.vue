<script>
import {onMounted} from "vue";

export default {
  name: "SidebarItem",
  props: {
    label: {type: String},
    icon: {type: String, default: "&nbsp"},
    active: {type: Boolean, default: false},
    keepalive: {type: Boolean, default: false},
  },
}
</script>

<template>
  <template v-if="keepalive">
    <object v-show="active">
      <slot></slot>
    </object>
  </template>
  <template v-else>
    <slot v-if="active"></slot>
  </template>
</template>
