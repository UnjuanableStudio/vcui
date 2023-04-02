import _EllipseMask from "./EllipseMask.vue";
import {getComponentPrefix} from "@/_utils/index.js";

const EllipseMask = Object.assign(_EllipseMask, {
    install: (app, options) => {
        const componentPrefix = getComponentPrefix(options);
        app.component(componentPrefix + _EllipseMask.name, _EllipseMask)
    }
})

export default EllipseMask
