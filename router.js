import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    hystory: createWebHashHistory(),

    routes: [
        {path: '/', components: AppHome}
    ]
})