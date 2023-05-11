import {defineAsyncComponent, markRaw} from "vue";

export function useSideBarConfig() {

    const leftMenuList = [
        // {key: "layer", icon: "icon-layer", label: "图层", component: markRaw(defineAsyncComponent(() => import('./components/resource/HierarchyPanel.vue')))},
        {
            key: "template",
            icon: "icon-template",
            label: "模板",
            component: markRaw(defineAsyncComponent(() => import('./TestSidebarItem.vue')))
        },
        {
            key: "image",
            icon: "icon-resource",
            label: "素材",
            component: markRaw(defineAsyncComponent(() => import('./TestSidebarItem.vue')))
        },
        {
            key: "upload",
            icon: "icon-upload",
            label: "上传",
            component: markRaw(defineAsyncComponent(() => import('./TestSidebarItem.vue')))
        },
        {
            key: "text",
            icon: "icon-text",
            label: "文字",
            component: markRaw(defineAsyncComponent(() => import('./TestSidebarItem.vue')))
        }
    ]

    const leftMenuStyle = {
        bar: {
            width: 80,
            height: '100%',
        },
        icon: {
            width: 80,
            height: 80,
        },
        content: {
            width: 350,
            height: '100%'
        }
    }
    return {leftMenuList, leftMenuStyle}
}
