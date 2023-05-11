import _FullScrollLayout from "./FullScrollLayout.vue";
import {getPrefixComponent} from "../../_utils";

const FullScrollView = Object.assign(_FullScrollLayout, {
    install: (app, options) => {
        app.component(getPrefixComponent(_FullScrollLayout.name), _FullScrollLayout)
    }
})
export default FullScrollView
