import { createRouter, createWebHistory } from "vue-router";
import AppHome from './pages/AppHome.vue'
import AppProjects from './pages/AppProjects.vue'
import SingleProject from './pages/AppSingleProject.vue'
import AppContact from './pages/AppContact.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
    history: createWebHistory(),

    routes: [
        {path: '/', name: 'home', component: AppHome},
        {path: '/projects', name: 'projects', component: AppProjects},
        {path: '/projects/:slug', name:'single-project', component: SingleProject},
        {path: '/contacts', name:'contacts', component: AppContact},
        {path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound}
    ]
})

export { router };