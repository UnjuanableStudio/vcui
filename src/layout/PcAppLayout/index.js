import _PcAppLayout from "./PcAppLayout.vue";
import {getPrefixComponent} from "../../_utils";

const PcAppLayout = Object.assign(_PcAppLayout, {
    install: (app, options) => {
        app.component(getPrefixComponent(_PcAppLayout.name), _PcAppLayout)
    }
})
export default PcAppLayout
