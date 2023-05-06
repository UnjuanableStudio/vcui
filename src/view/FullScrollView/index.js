import _FullScrollView from "./FullScrollView.vue";
import {getPrefixComponent} from "../../_utils";

const FullScrollView = Object.assign(_FullScrollView, {
    install: (app, options) => {
        app.component(getPrefixComponent(_FullScrollView.name), _FullScrollView)
    }
})
export default FullScrollView
