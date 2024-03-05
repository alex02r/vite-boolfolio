import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppProjects from './pages/AppProjects.vue'
import AppSingleProject from './pages/AppSingleProject.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {path: '/', name: 'home', component: AppHome},
        {path: '/projects', name: 'projects', component: AppProjects},
        {path: '/projects/:slug', name:'single-project' component: AppSingleProject}
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound},
    ]
})

export { router };