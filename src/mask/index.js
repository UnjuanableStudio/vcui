import {install} from '../index'
import Loading from "./Loading.vue";
import EllipseMask from "./EllipseMask.vue";

Loading.install = install.bind(Loading)
EllipseMask.install = install.bind(EllipseMask)

export {
    Loading as UnjLoading,
    EllipseMask as UnjEllipseMask,
}