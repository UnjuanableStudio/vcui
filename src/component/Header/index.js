import _Header from "./Header.vue";
import {getPrefixComponent} from "../../_utils";

const Header = Object.assign(_Header, {
    install: (app, options) => {
        app.component(getPrefixComponent(_Header.name), _Header)
    }
})

export default Header
