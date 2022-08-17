import {install} from "../index";
import ScrollPage from "./ScrollPage.vue";

ScrollPage.install = install.bind(ScrollPage)

export {
    ScrollPage as UnjScrollPage,
}