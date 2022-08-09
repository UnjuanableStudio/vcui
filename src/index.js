import {prefix} from "../index.js";
import Loading from "./loading/Loading.vue";

Loading.install = function (app) {
    app.component(`${prefix}${Loading.name}`, Loading)
}

export {Loading}