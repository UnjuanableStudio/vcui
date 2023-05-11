import _Sidebar from "./Sidebar.vue";
import {getPrefixComponent} from "../../_utils";

const PointerPath = Object.assign(_Sidebar, {
    install: (app, options) => {
        app.component(getPrefixComponent(_Sidebar.name), _Sidebar)
    }
})
export default PointerPath
