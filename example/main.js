import {createApp} from 'vue'
import App from './App.vue'
import Router from './router'
import iconfont from "@unjuanable/iconfont";

const app = createApp(App)

app.use(Router)
app.use(iconfont, '//at.alicdn.com/t/c/font_2909361_mo4704ykf7.css')
app.mount('#app')
