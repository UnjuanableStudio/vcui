import {createApp} from 'vue'
import App from './App.vue'
import {UnjScrollPage} from "../src/layout";
import {UnjEllipseMask} from "../src/mask";
import {UnjImage} from "../src/dom";

const app = createApp(App)

app.use(UnjScrollPage)
app.use(UnjEllipseMask)
app.use(UnjImage)
app.mount('#app')
