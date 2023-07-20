import {createRouter, createWebHashHistory} from "vue-router"

const routes = [
    {
        path: '/', component: () => import("../pages/index.vue"),
        meta: {label: "首页"}
    },
    {
        path: '/image', component: () => import("../pages/TestImage.vue"),
        meta: {label: "Image"}
    },
    {
        path: '/scroll_view', component: () => import("../pages/TestScrollView.vue"),
        meta: {label: "ScrollView"}
    },
    {
        path: '/pc_app', component: () => import("../pages/TestPcApp.vue"),
        meta: {label: "PC Layout"}
    },
    {
        path: '/pc_sidebar', component: () => import("../pages/TestSidebar.vue"),
        meta: {label: "Sidebar"}
    },
    {
        path: '/pointer_path', component: () => import("../pages/TestPointerPath.vue"),
        meta: {label: "通过画布获取轨迹点"}
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router

export {routes}
