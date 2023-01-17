import {createRouter, createWebHashHistory} from "vue-router";
import Welcome from "../../view/Welcome.vue";
import Home from "../../view/Home.vue";
import Index from "../../view/Index.vue";
import Blog from "../../view/Blog.vue";
import Resource from "../../view/Resource.vue";
import Data from "../../view/Data.vue";
import Settings from "../../view/Settings.vue";
import Chat from "../../view/Chat.vue";

const routes = [
    {path: '/', component: Welcome},
    {
        path: '/home',
        component: Home,
        children: [
            {path: 'index', component: Index},
            {path: 'blog', component: Blog},
            {path: 'resource', component: Resource},
            {path: 'data', component: Data},
            {path: 'settings', component: Settings},
            {path: 'chat', component: Chat},
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;