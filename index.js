import CLoading from "./src/CLoading";

CLoading.install = function (app) {
    app.component(CLoading.name, CLoading)
}

export default CLoading
