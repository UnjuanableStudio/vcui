import Loading from "./loading/Loading.vue";

export const prefix = 'Unj'

Loading.install = function (app) {
    app.component(`${prefix}${Loading.name}`, Loading)
}

export {
    Loading as UnjLoading,
}