import _Sidebar from "./Sidebar.vue";
import _SidebarItem from "./SidebarItem.vue"
import {getPrefixComponent} from "../../_utils";

const Sidebar = Object.assign(_Sidebar, {
    install: (app, options) => {
        app.component(getPrefixComponent(_Sidebar.name), _Sidebar)
        app.component(getPrefixComponent(_SidebarItem.name), _SidebarItem)
    }
})

export default Sidebar
