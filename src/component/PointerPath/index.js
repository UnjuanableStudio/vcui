import _PointerPath from "./PointerPath.vue";
import {getPrefixComponent} from "../../_utils";

const PointerPath = Object.assign(_PointerPath, {
    install: (app, options) => {
        app.component(getPrefixComponent("PointerPath"), _PointerPath)
    }
})
export default PointerPath
