import {createRouter, createWebHashHistory} from "vue-router"
import Home from '../pages/index.vue'
import Image from '../pages/TestImage.vue'
import ScrollView from "../pages/TestScrollView.vue";
import TestPcApp from "../pages/TestPcApp.vue";

const routes = [
    {
        path: '/', component: Home,
        meta: {label: "首页"}
    },
    {
        path: '/image', component: Image,
        meta: {label: "Image"}
    },
    {
        path: '/scroll_view', component: ScrollView,
        meta: {label: "ScrollView"}
    },
    {
        path: '/pc_app', component: TestPcApp,
        meta: {label: "PC Layout"}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

export {routes}
