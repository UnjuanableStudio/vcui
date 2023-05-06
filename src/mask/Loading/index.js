import _Loading from "./Loading.vue";
import {getPrefixComponent} from "../../_utils";

const Loading = Object.assign(_Loading, {
    install: (app, options) => {
        app.component(getPrefixComponent(_Loading.name), _Loading)
    }
})
export default Loading
