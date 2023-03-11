import {createRouter, createWebHashHistory} from "vue-router"
import Home from '../pages/index.vue'
import Image from '../pages/TestImage.vue'
import ScrollPage from "../pages/TestScrollPage.vue";

const routes = [
    {path: '/', component: Home},
    {path: '/image', component: Image},
    {path: '/scroll_page', component: ScrollPage},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
