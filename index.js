import CLoading from "./src/CLoading.vue";

CLoading.install = function (app) {
    app.component(CLoading.name, CLoading)
}

export default CLoading
