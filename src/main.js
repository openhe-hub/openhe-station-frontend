import {createApp} from 'vue'
// Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// Vue Router
import router from './plugin/router/config.js'
// Axios
import api from './plugin/axios/config.js'

import App from './App.vue'

const app = createApp(App);
app.use(ElementPlus)
    .use(router)
    .mount('#app');
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.config.globalProperties.$axios = api;