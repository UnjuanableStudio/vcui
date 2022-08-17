export const prefix = 'Unj' // 自定义组件前缀

export function install(app) {
    app.component(`${prefix}${this.name}`, this)
}