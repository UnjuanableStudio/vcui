import _FullScrollView from "./FullScrollView.vue";
import {getComponentPrefix} from "@/_utils/index.js";

const FullScrollView = Object.assign(_FullScrollView, {
    install: (app, options) => {
        const componentPrefix = getComponentPrefix(options);
        app.component(componentPrefix + _FullScrollView.name, _FullScrollView)
    }
})
export default FullScrollView
