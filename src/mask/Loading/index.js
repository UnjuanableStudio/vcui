import _Loading from "./Loading.vue";
import {getComponentPrefix} from "@/_utils/index.js";

const Loading = Object.assign(_Loading, {
    install: (app, options) => {
        const componentPrefix = getComponentPrefix(options);
        app.component(componentPrefix + _Loading.name, _Loading)
    }
})

export default Loading
