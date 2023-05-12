<script>

import {computed, inject} from "vue";

export default {
    name: "SidebarItem",
    props: {
        icon: {type: String, default: "&nbsp"},
        label: {type: String},
        component: {type: Object}
    },
    setup(props) {
        const labelSize = inject("SidebarLabelSize")
        const SwitchTab = inject("SidebarSwitchTab")
        const activated = inject("SidebarActivated")
        const labelStyle = computed(() => {
            return {
                width: labelSize + 'px',
                height: labelSize + 'px',
                'font-size': fontSize.value + 'px'
            }
        })
        const fontSize = computed(() => {
            return labelSize / 2
        })
        return {labelSize, labelStyle, fontSize, SwitchTab}
    }
}
</script>

<template>
    <li :style="labelStyle" @click="SwitchTab">
        <span v-if="$slots['icon']"><slot name="icon"></slot></span>
        <span v-else v-html="icon"></span>
        <label>{{ label }}</label>
    </li>

  <!--    <li v-for="(item,index) in options"-->
  <!--        :class="{'active':activated===index}"-->
  <!--        :style="labelStyle"-->
  <!--        @click="switchTab(index)">-->
  <!--        <span v-html="item.icon"></span>-->
  <!--        <label>{{ item.label }}</label>-->
  <!--    </li>-->
</template>

<style>
li {
    position: relative;
    text-align: center;
    cursor: pointer;
    z-index: 2;
}

li span {
    display: block;
    width: 100%;
    height: 60%;
    line-height: 1.4;
}

li label {
    display: block;
    width: 100%;
    height: 40%;
    line-height: 1.2;
    font-size: 0.4em;
}

li.active {
    transition: all 0.9s;
    color: white;
}
</style>
