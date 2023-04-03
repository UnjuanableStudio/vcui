import _Image from "./Image.vue";
import {getComponentPrefix} from "../../_utils/index.js";

const Image = Object.assign(_Image, {
    install: (app, options) => {
        const componentPrefix = getComponentPrefix(options);
        app.component(componentPrefix + _Image.name, _Image)
    }
})
export default Image
