import {createRouter, createWebHashHistory} from "vue-router";
import Welcome from "../../view/Welcome.vue";
import Home from "../../view/Home.vue";
import Index from "../../view/Index.vue";
import Blog from "../../view/Blog.vue";
import Resource from "../../view/Resource.vue";
import Data from "../../view/Data.vue";
import Settings from "../../view/Settings.vue";
import Chat from "../../view/Chat.vue";
import Projects from "../../components/resource/Projects.vue";
import Files from "../../components/resource/Files.vue";

const routes = [
    {path: '/', component: Welcome},
    {
        path: '/home',
        component: Home,
        redirect: '/home/index',
        children: [
            {path: 'index', component: Index},
            {path: 'blog', component: Blog},
            {
                path: 'resource',
                component: Resource,
                redirect: '/home/resource/files',
                children: [
                    {path: 'projects', component: Projects},
                    {path: 'files', component: Files}
                ]
            },
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