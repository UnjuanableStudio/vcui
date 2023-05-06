import _Image from "./Image.vue";
import {getPrefixComponent} from "../../_utils";

const Image = Object.assign(_Image, {
    install: (app, options) => {
        app.component(getPrefixComponent(_Image.name), _Image)
    }
})
export default Image
