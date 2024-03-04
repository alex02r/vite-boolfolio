import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import ProjectCard from './pages/ProjectCard.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {path: '/', name: 'home', component: AppHome},
        {path: '/projects', name: 'projects', component: ProjectCard},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound}
    ]
})

export { router };