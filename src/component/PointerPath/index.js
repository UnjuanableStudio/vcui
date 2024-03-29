import _PointerPath from "./PointerPath.vue";
import {getPrefixComponent} from "../../_utils";

const PointerPath = Object.assign(_PointerPath, {
    install: (app, options) => {
        app.component(getPrefixComponent(_PointerPath.name), _PointerPath)
    }
})
export default PointerPath
