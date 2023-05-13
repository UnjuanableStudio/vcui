<script>

import {onActivated} from "vue";

export default {
    name: "SidebarItem",
    methods: {onActivated},
    props: {
        label: {type: String},
        icon: {type: String, default: "&nbsp"},
    },
    setup(props) {

        return {}
    }
}
</script>

<template>

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
