import VcLoading from "./VcLoading.vue";
import VcEllipseMask from "./VcEllipseMask.vue";

VcLoading.install = function (app) {
    app.component(VcLoading.name, VcLoading)
}
VcEllipseMask.install = function (app) {
    app.component(VcEllipseMask.name, VcEllipseMask)
}

export {
    VcLoading, VcEllipseMask
}
