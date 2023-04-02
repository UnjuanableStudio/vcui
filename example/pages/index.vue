<template>
    <ul>
        <li v-for="item in route">
            <router-link :to="item.path">{{ item.meta.label }}</router-link>
        </li>
    </ul>
</template>

<script setup>
import {routes} from "../router"
import {ref} from "vue";

const route = ref(routes)
</script>

<style scoped>

</style>
