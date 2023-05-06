import _EllipseMask from "./EllipseMask.vue";
import {getPrefixComponent} from "../../_utils";

const EllipseMask = Object.assign(_EllipseMask, {
    install: (app, options) => {
        app.component(getPrefixComponent(_EllipseMask.name), _EllipseMask)
    }
})
export default EllipseMask
