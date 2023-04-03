import _PcAppLayout from "./PcAppLayout.vue";
import {getComponentPrefix} from "../../_utils/index.js";

const PcAppLayout = Object.assign(_PcAppLayout, {
    install: (app, options) => {
        const componentPrefix = getComponentPrefix(options);
        app.component(componentPrefix + _PcAppLayout.name, _PcAppLayout)
    }
})
export default PcAppLayout
