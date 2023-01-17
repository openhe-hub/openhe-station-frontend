import {createRouter, createWebHashHistory} from "vue-router";
import Welcome from "../../view/Welcome.vue";
import Home from "../../view/Home.vue";

const routes = [
    {path: '/', component: Welcome},
    {path: '/home', component: Home},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;